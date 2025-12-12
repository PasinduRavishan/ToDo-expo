import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Modal, Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@tasks_v1';

export default function Index() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingTask, setEditingTask] = useState<any>(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if (raw) {
      setTasks(JSON.parse(raw));
    }
  }

  async function saveTasks(newTasks: any[]) {
    setTasks(newTasks);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks));
  }



  function openAddModal() {
    setEditingTask(null);
    setTitle('');
    setDesc('');
    setModalVisible(true);
  }

  function openEditModal(task: any) {
    setEditingTask(task);
    setTitle(task.title);
    setDesc(task.desc);
    setModalVisible(true);
  }

  async function handleSave() {
    if (!title.trim()) {
      Alert.alert("Title required");
      return;
    }

    if (editingTask) {
      // editing
      const updated = tasks.map(t =>
        t.id === editingTask.id ? { ...t, title, desc } : t
      );
      await saveTasks(updated);
    } else {
      // adding
      const newTask = {
        id: Date.now().toString(),
        title,
        desc,
      };
      await saveTasks([...tasks, newTask]);
    }

    setModalVisible(false);
  }


  async function deleteTask(task: any) {
    const filtered = tasks.filter(t => t.id !== task.id);
    await saveTasks(filtered);
  }




  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Expo To-Do</Text>
        <TouchableOpacity style={styles.addBtn} onPress={openAddModal}>
          <Text style={{ color: 'white', fontSize: 18 }}>+ Add</Text>
        </TouchableOpacity>
      </View>

      {tasks.length === 0 ? (
        <Text style={{ padding: 16 }}>No tasks yet. Tap + Add.</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.taskRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.taskTitle}>{item.title}</Text>
                {item.desc ? <Text>{item.desc}</Text> : null}
              </View>
              <TouchableOpacity onPress={() => openEditModal(item)}>
                <Text style={styles.edit}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(item)}>
                <Text style={styles.delete}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}

      {/* ADD/EDIT MODAL */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>
              {editingTask ? 'Edit Task' : 'Add Task'}
            </Text>

            <TextInput
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
              style={styles.input}
            />

            <TextInput
              placeholder="Description (optional)"
              value={desc}
              onChangeText={setDesc}
              style={[styles.input, { height: 80 }]}
              multiline
            />

            <View style={styles.modalActions}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelBtn}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleSave}>
                <Text style={styles.saveBtn}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}



const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  heading: { fontSize: 24, fontWeight: '600' },
  addBtn: { backgroundColor: '#007aff', padding: 10, borderRadius: 6 },
  taskRow: { flexDirection: 'row', padding: 12, borderBottomWidth: 1, borderColor: '#eee' },
  taskTitle: { fontSize: 16, fontWeight: '500' },
  edit: { color: 'blue', marginHorizontal: 10 },
  delete: { color: 'red' },

  modalOverlay: { flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)' },
  modalBox: { backgroundColor: 'white', margin: 20, padding: 20, borderRadius: 10 },
  modalTitle: { fontSize: 20, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 6, marginBottom: 10 },

  modalActions: { flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 },
  cancelBtn: { marginRight: 20, fontSize: 16 },
  saveBtn: { color: '#007aff', fontSize: 16 }
});



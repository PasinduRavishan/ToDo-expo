# Expo To-Do App 📝

A simple, elegant to-do list application built with Expo and React Native. This app allows you to create, edit, and delete tasks with persistent local storage.

## 🌟 Features

- ✅ **Create Tasks**: Add new to-do items with a title and optional description
- ✏️ **Edit Tasks**: Modify existing tasks on the fly
- 🗑️ **Delete Tasks**: Remove completed or unwanted tasks
- 💾 **Persistent Storage**: All tasks are saved locally using AsyncStorage
- 📱 **Cross-Platform**: Runs on iOS, Android, and Web
- 🎨 **Clean UI**: Simple and intuitive user interface
- 🔄 **Real-time Updates**: Changes are immediately reflected in the app

## 🚀 Tech Stack

- **Expo** ~54.0.28 - Development platform for React Native apps
- **React** 19.1.0 - UI framework
- **React Native** 0.81.5 - Cross-platform mobile development
- **TypeScript** ~5.9.2 - Type-safe JavaScript
- **Expo Router** ~6.0.18 - File-based routing for React Native
- **AsyncStorage** 2.2.0 - Local data persistence
- **React Native Reanimated** ~4.1.1 - Smooth animations
- **Expo Vector Icons** ^15.0.3 - Icon library
- **React Navigation** ^7.1.8 - Navigation management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- For iOS development: [Xcode](https://developer.apple.com/xcode/) (macOS only)
- For Android development: [Android Studio](https://developer.android.com/studio)
- [Expo Go](https://expo.dev/go) app on your mobile device (for testing)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todo_expo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```
   
   Or if you prefer yarn:
   ```bash
   yarn install
   ```

## 🎯 Getting Started

### Running the App

1. Start the development server:
   ```bash
   npm start
   ```
   
   Or:
   ```bash
   npx expo start
   ```

2. Once the server starts, you'll see a QR code in your terminal and a browser window will open with the Expo DevTools.

3. Choose how to run your app:

   **Option 1: Using Expo Go (Recommended for quick testing)**
   - Install the [Expo Go](https://expo.dev/go) app on your iOS or Android device
   - Scan the QR code with your camera (iOS) or Expo Go app (Android)
   - The app will load on your device

   **Option 2: iOS Simulator (macOS only)**
   ```bash
   npm run ios
   ```
   - Requires Xcode to be installed
   - Opens the app in the iOS Simulator

   **Option 3: Android Emulator**
   ```bash
   npm run android
   ```
   - Requires Android Studio and an Android Virtual Device (AVD)
   - Opens the app in the Android Emulator

   **Option 4: Web Browser**
   ```bash
   npm run web
   ```
   - Opens the app in your default web browser

### Development Tips

- Press `r` in the terminal to reload the app
- Press `m` to toggle the menu
- Press `j` to open the debugger
- Shake your device to open the developer menu on physical devices

## 📁 Project Structure

```
todo_expo/
├── app/                    # Main application code
│   ├── _layout.tsx        # Root layout component
│   └── index.tsx          # Main to-do list screen
├── assets/                # Images, fonts, and other static files
│   └── images/            # App icons and images
├── app.json               # Expo configuration
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # This file
```

## 🎮 How to Use

1. **Add a Task**: Tap the "+ Add" button in the top right corner
2. **Enter Details**: Fill in the task title (required) and optional description
3. **Save**: Tap "Save" to add the task to your list
4. **Edit a Task**: Tap "Edit" on any task to modify it
5. **Delete a Task**: Tap "Delete" on any task to remove it
6. **Persistence**: All tasks are automatically saved and will persist when you close and reopen the app

## 🔧 Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android emulator/device
- `npm run ios` - Run on iOS simulator/device (macOS only)
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint to check code quality
- `npm run reset-project` - Reset the project to initial state

## 🏗️ Building for Production

### Build for Android (APK/AAB)
```bash
npx expo build:android
```

### Build for iOS (IPA)
```bash
npx expo build:ios
```

### Using EAS Build (Recommended)
```bash
# Install EAS CLI
npm install -g eas-cli

# Configure your project
eas build:configure

# Build for Android
eas build --platform android

# Build for iOS
eas build --platform ios
```

## 🐛 Troubleshooting

### Common Issues

**Metro bundler issues:**
```bash
# Clear cache and restart
npx expo start -c
```

**Dependencies not installing properly:**
```bash
# Remove node_modules and reinstall
rm -rf node_modules
npm install
```

**iOS build issues:**
```bash
# Clean and rebuild pods (macOS only)
cd ios
pod install
cd ..
```

**Android build issues:**
```bash
# Clean gradle cache
cd android
./gradlew clean
cd ..
```

## 📱 Testing

This project uses [file-based routing](https://docs.expo.dev/router/introduction) with Expo Router. You can start developing by editing the files inside the **app** directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌐 Learn More

- [Expo Documentation](https://docs.expo.dev/) - Learn about Expo features and API
- [React Native Documentation](https://reactnative.dev/) - Learn React Native
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/) - Learn about file-based routing
- [AsyncStorage Documentation](https://react-native-async-storage.github.io/async-storage/) - Learn about local storage

## 👥 Join the Community

Join our community of developers creating universal apps:

- [Expo on GitHub](https://github.com/expo/expo) - View our open source platform and contribute
- [Expo Discord](https://chat.expo.dev/) - Chat with other Expo developers
- [Expo Forums](https://forums.expo.dev/) - Ask questions and share knowledge

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- Icons from [Expo Vector Icons](https://icons.expo.fyi/)
- Inspired by the React Native community





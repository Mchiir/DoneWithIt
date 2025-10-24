# React Navigation Study Guide (Expo - Windows 11 + VSCode)

## 1. Setup Environment

You are using Expo Managed Workflow with Windows 11 and VSCode. Ensure Node.js and Expo CLI are installed. Create your Expo project using the command:

```
expo init DoneWithIt
```

Select the blank managed workflow template.

---

## 2. Install React Navigation Packages

In your project directory, run the following commands in order:

```
yarn add @react-navigation/native \
react-native-screens \
react-native-safe-area-context \
@react-navigation/native-stack \
@react-navigation/bottom-tabs \
@react-navigation/drawer \
react-native-gesture-handler \
react-native-reanimated@~3.16.0 \
react-native-worklets
```

---

## 3. Configure babel.config.js

Open/create the babel.config.js file in project root dir and ensure the following plugin is added at the bottom of the configuration:

```
plugins: ["react-native-reanimated/plugin"]
```

This allows the app to work properly with React Native Reanimated.

Example structure:

```
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
    ],
  };
};
```

---

## 4. Project Folder Structure

Your directory should look like this after setup:

```
DoneWithIt/
│
├── App.js
├── babel.config.js
├── package.json
├── screens/
│   ├── HomeScreen.js
│   ├── DetailsScreen.js
│   └── ProfileScreen.js
```

Each screen represents a basic React Native component that will be used for navigation demonstrations.

---

## 5. Navigation Types Covered

Three main types of navigation are covered in this guide:

1. **Stack Navigation** - Handles screen-to-screen transitions such as moving from one page to another and back.
2. **Tab Navigation** - Displays a bottom tab bar that allows users to switch between primary screens quickly.
3. **Drawer Navigation** - Provides a side panel menu allowing users to navigate across the app’s major sections.

---

## 6. Implementation Flow

1. Start with Stack Navigator for moving between screens like Home, Details, and Profile.
2. Integrate Tab Navigator to organize the app into multiple sections (e.g., Home and Profile tabs).
3. Wrap everything inside a Drawer Navigator to provide an overall menu-based structure that contains all the navigators.

---

## 7. Running the Application

```
npx expo start
```

---

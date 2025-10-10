# React native

> React native have been used to develop ios and android platforms, such as FB, IG, Skype, Uber EAT, ...

## Install these extensions in vscode

- React Native Tools by Microsoft
- React-Native/React/Redux snippets for es6/es7 by EQuimper
- Prettier by Prettier
- Material Icon Theme by Material Design Icons for Visual Studio Code

> Go to settings, enable formatonsave

## Creating The First React native app

### Using expo

```bash
expo init proj_name
```

> Choose only blank managed workflow For **Managed workflow**, expo manages a lot of complexity (not ios and android folders) For **Bare workflow**, you have the complexity as well

> The **assets** folder is there to save any assets you bundle with your app (images, audios, videos, ...)

- React native prefers functinal components to class components
- React native widgets get compiled to mobile platform native components
  - i.e View -> UIView or AndroidView

```bash
npm start || yarn start ||
```

### On web

> Tu run in web, Make sure **react** and **react-dom** have the same versions, and also install **react-native-web**

```bash
yarn add react-dom@19.1.0 react@19.1.0 react-native-web
yarn web
```

> access **localhost:8081**

### On mobile simulators

> Use **Xcode** for macOS, use **Android studio** for windows, use ctrl+n to open React-native dev menu.

### On physical mobile device

> install and use **Expo Client**, scan the metro bundler QR code, then view the app, shake the device to open React-native dev menu. (I contantly press **S** simply on my bluestack's Expo client to open dev menu)
> please make sure your device and host machine are connected on the same network, WI-FI or via USB.

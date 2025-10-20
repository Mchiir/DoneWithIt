import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaViewBase } from 'react-native';

export default function App() {

  let x = 1;

  console.log("App executed");
  // x.tostring();


  return (
    <SafeAreaViewBase style={styles.container}>
      <Text>Hello react-native devs, I'm Mchiir!</Text>
      <StatusBar style="auto" />
    </SafeAreaViewBase>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

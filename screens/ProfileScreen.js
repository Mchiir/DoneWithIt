import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.subtitle}>This is the Profile screen</Text>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.customButton, styles.button]}
          onPress={() => navigation.openDrawer()} // Open drawer
        >
          <Text style={styles.customButtonText}>Open Drawer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.customButton, styles.button]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.customButtonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#666',
    textAlign: 'center',
  },
  buttonsContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  customButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    minWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34C759',
  },
  customButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
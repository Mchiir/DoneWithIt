import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.subtitle}>This screen is part of Stack, Drawer, and Tab navigation!</Text>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.customButton, styles.stackButton]}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={styles.customButtonText}>Stack: Go to Details</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.customButton, styles.stackButton]}
          onPress={() => navigation.openDrawer()}
        >
          <Text style={styles.customButtonText}>Drawer: Open Menu</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.customButton, styles.stackButton]}
          onPress={() => navigation.navigate('ProfileTab')}
        >
          <Text style={styles.customButtonText}>Tab: Go to Profile</Text>
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
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#666',
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  customButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    minWidth: 250,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  stackButton: {
    backgroundColor: '#007AFF',
  },
  drawerButton: {
    backgroundColor: '#34C759',
  },
  tabButton: {
    backgroundColor: '#FF3B30',
  },
  customButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DetailsScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details screen!</Text>

      {/* Custom Styled Buttons Container */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.customButton, styles.button]}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.customButtonText}>Go back</Text>
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
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 30,
    width: '100%',
    flexWrap: 'wrap',
  },
  customButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginVertical: 8,
    minWidth: 200,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: '#007AFF',
  },
  customButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
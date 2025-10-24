import React from 'react'
import { View, Button, Text } from "react-native"

export default function DashboardScreen({ navigation }) {
  return (
    <View>
        <Text style={{ fontSize:22 }}>📊 Dashboard Screen</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()}/>
    </View>
  )
}
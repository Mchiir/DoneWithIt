import React from 'react'
import { View, Button, Text } from "react-native"

export default function LoginScreen({ navigation }) {
  return (
    <View>
        <Text style={{ fontSize:22 }}>🔑 Login Screen</Text>
        <Button title="Login" onPress={() => navigation.navigate("Dashboard")}/>
    </View>
  )
}
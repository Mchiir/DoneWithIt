import React from 'react'
import { View, Button, Text } from "react-native"

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
        <Text style={{ fontSize:22 }}>🌄 Welcome Screen</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate("Login")}/>
    </View>
  )
}
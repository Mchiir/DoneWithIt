import React from 'react'
import { View, Text, Button } from "react-native"

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
            <Text style={{ fontSize:22 }}>🏠 Home screen</Text>
            <Button title="Go to details" onPress={() => navigation.navigate("Details")} />
        </View>
    )
}

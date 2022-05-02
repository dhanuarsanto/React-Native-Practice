import React from "react"
import { View, Text } from "react-native"


const HelloWorld = () => {
    console.log('Hello World')
    return (
        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Hello World</Text>
        </View>
    )
}

export default HelloWorld

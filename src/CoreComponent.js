import React from "react"
import { View, Text, Image, ScrollView, TextInput } from "react-native"

const App = () => {
    console.log('Core Component')
    return (
        <ScrollView>
            <Text>Some Text</Text>
            <View>
                <Text>Some More Text</Text>
                <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style={{ width: 200, height: 200 }} />
            </View>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} defaultValue="You can type here" />
        </ScrollView>
    )
}

export default App

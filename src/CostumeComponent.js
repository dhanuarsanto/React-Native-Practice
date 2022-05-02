import React from 'react'
import { Text, View, TextInput } from 'react-native'

const Cat = () => {
    console.log('Costume Component')
    return (
        <View>
            <Text>Hello i am ....</Text>
            <TextInput style={{ height:40, borderColor: 'gray', borderWidth: 1 }} defaultValue="Name me!!" />
        </View>
    )
}

export default Cat

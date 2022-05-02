import React from 'react'
import { Text, View } from 'react-native'

const Cat = () => {
    return (
        <View>
            <Text>I am also a cat!</Text>
        </View>
    )
}

const Cafe = () => {
    console.log('Multiple Component')
    return (
        <View>
            <Text>Welcome!</Text>
            <Cat />
            <Cat />
            <Cat />
        </View>
    )
}

export default Cafe

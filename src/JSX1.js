import React from 'react'
import { Text } from 'react-native'

const name = "Maru"

const Cat = () => {
    console.log(name)
    return (
        <Text>Hello i am {name}</Text>
    )
}

export default Cat

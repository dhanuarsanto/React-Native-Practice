import React from 'react'
import { Text, View } from 'react-native'

const Cat = (props) => {
    console.log(props)
    return (
        <View>
            <Text>Hello i am {props.name}</Text>
        </View>
    )
}

const Cafe = () => {
    console.log('props')
    return (
        <View>
            <Cat name="Maru" />
            <Cat name="Jellylorum" />
            <Cat name="Spot" />
        </View>
    )
}

export default Cafe

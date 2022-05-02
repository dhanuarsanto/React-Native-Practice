import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(true)
    console.log(isHungry, props)

    return (
        <View>
            <Text>i am {props.name} and i am {isHungry ? "Hungry" : "Full"} !</Text>
            <Button onPress={() => {setIsHungry(false)}} disabled={!isHungry} title={isHungry ? "Pour me some milk, please!" : "Thank you"}/>
        </View>
    )
}

const Cafe = () => {
    return (
        <View>
            <Cat name="Munkustrap" />
            <Cat name="Spot" />
        </View>
    )
}

export default Cafe

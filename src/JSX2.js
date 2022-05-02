import React from 'react'
import { Text } from 'react-native'

const GetFullName = (firstName, middleName, lastName) => {
    return firstName + ' ' + middleName + ' ' + lastName
}

const Cat = () => {
    console.log(GetFullName("Rum", "Tum", "Tugger"))
    return (
        <Text>Hello i am {GetFullName("Rum", "Tum", "Tugger")}</Text>
    )
}

export default Cat

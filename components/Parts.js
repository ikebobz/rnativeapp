import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';


export function PartA()
{
    return(<Text>React native is great</Text>)
}

export function PartB(){
  return (<Text>I recently started playing with its concepts</Text>)
}

export function PartC(){
    return(<TextInput placeholder = "Please state your opinion about React Native"></TextInput>)
}

export class PartD extends React.Component{
    render(){
        return(
            <View>
                <Text>Hello Guys I just love coding in React</Text>
            </View>
        )
    }
}
export function Counter(){
    const [count, setCount] = useState(1);
    return (
        <View>
            <Text>{count}</Text>
            <TouchableOpacity onPress = {() => setCount(count + 2)}>Increment By 2</TouchableOpacity>
        </View>
    )
}

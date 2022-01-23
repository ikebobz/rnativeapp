import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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

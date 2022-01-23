import React from 'react';
import { connect } from 'react-redux'
import { addItem } from '../src/actions/action'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

class AddItem extends React.Component
{
    state = {
        eid:'',
        pid:'',
        qty:0
    }
    clearState = () => this.setState({
        eid:'',
        pid:'',
        qty:0
    })
    render()
    {
        return(
            <View style = {style.view}>
                <TextInput style = {style.textbox} placeholder = 'EmployeeID' onChangeText = {(text) => this.setState({eid:text})}></TextInput>
                <TextInput style = {style.textbox} placeholder = 'ProductID' onChangeText = {(text) => this.setState({pid:text})}></TextInput>
                <TextInput style = {style.textbox} placeholder = 'Quantity' onChangeText = {(text) => this.setState({qty:parseInt(text)})}></TextInput>
                <TouchableOpacity style = {{marginTop:30,backgroundColor:'#cde'}} onPress = {() => {
                    const item = {
                        eid:this.state.eid,
                        pid: this.state.pid,
                        quantity: this.state.qty
                    };
                    this.props.dispatch(addItem(item));
                    this.clearState();
                     }}>Add Work Unit</TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view:{
        flexDirection:'column',
        marginVertical:20
    },
    textbox:{
        width:100,
        marginTop:30
    }
});
export default connect()(AddItem);
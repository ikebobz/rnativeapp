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
                <View style = {style.top}/>
                <View style = {style.middle}>
                <TextInput style = {style.textbox} placeholder = 'EmployeeID' onChangeText = {(text) => this.setState({eid:text})}></TextInput>
                <TextInput style = {style.textbox} placeholder = 'ProductID' onChangeText = {(text) => this.setState({pid:text})}></TextInput>
                <TextInput style = {style.textbox} placeholder = 'Quantity' onChangeText = {(text) => this.setState({qty:parseInt(text)})}></TextInput>
                <TouchableOpacity style = {{marginTop:30,backgroundColor:'#cde',width:200,marginBottom:15}} onPress = {() => {
                    const item = {
                        eid:this.state.eid,
                        pid: this.state.pid,
                        quantity: this.state.qty
                    };
                    // debugger;
                    const action = addItem(item)
                    this.props.dispatch(action);
                    this.clearState();
                     }}><Text>Add Work Item</Text></TouchableOpacity>
                <TouchableOpacity style = {{marginTop:30,backgroundColor:'#ccf',width:200,marginBottom:15}} onPress = {() => this.props.navigation.navigate("ViewItem")}><Text>View Items</Text></TouchableOpacity>
                </View>
                <View style = {style.bottom}/>
            </View>
        )
    }
}

const style = StyleSheet.create({
    view:{
        flex : 1,
        flexDirection:'column',
        
    },
    textbox:{
        width:400,
        height:100,
        marginTop:30
    },
    top:{
        flex:1,
        backgroundColor:'#eeb'
    },
    middle: {
        flex:3,
        backgroundColor:'#acc'
    },
    bottom: {
        flex:1,
        backgroundColor:'#ecd'
    }

});
export default connect()(AddItem);
import React from 'react'
import { connect } from 'react-redux'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

 class ViewItem extends React.Component{
    render(){
        return(
            <View  style = {style.mainView}>
             <Text>Showing Added Items</Text>
              {this.props.value.map((val,index) => (
                <View key = {index}>
                   <Text>{val.employeeid}</Text>
                   <Text>{val.productid}</Text> 
                   <Text>{val.quantity}</Text>
                </View>
                ))}
            </View>
        )
    }
}

const style = StyleSheet.create({
    mainView:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#55f'
    }
})

const mapStateToProp = (state) => ({
    value : state.workmgt
})

export default connect(mapStateToProp)(ViewItem)
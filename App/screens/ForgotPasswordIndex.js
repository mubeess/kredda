import React from 'react'
import { Button,Input,Text } from '@ui-kitten/components'
import { useState } from 'react'
import { View,StyleSheet, StatusBar} from 'react-native'
import { Colors } from '../Colors'
import Header from '../components/Header'

export default function ForgotPasswordIndex(props) {
    const [phone,setPhone]=useState('')
    return (
        <View style={styles.container}>
        <Text style={styles.txt} category='h4'>Forgot Password</Text>
        <Text appearance='hint'>Please enter your registered email address to reset your PIN.</Text>
        <Input
        style={styles.inp}
      value={phone}
      label='Enter Password'
      placeholder='Enter Password'
      onChangeText={nextValue => setPhone(nextValue)}
    />
    <Button onPress={()=>{
        props.navigation.navigate('NewPin')
    }} style={styles.btn}>PROCEED</Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
    flex:1,
    paddingTop:StatusBar.currentHeight,
    padding:10,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:'white'
    },
    txt:{
        color:Colors.primary
    },
    inp:{
        marginTop:20,
        width:'93%',
        marginLeft:'auto',
        marginRight:'auto',
        backgroundColor:Colors.midGray
    },
    btn:{
        marginTop:50,
        width:'93%',
        marginLeft:'auto',
        marginRight:'auto',
        
    }
   
})
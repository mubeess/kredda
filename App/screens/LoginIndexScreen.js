import React from 'react'
import { Button,Input,Text } from '@ui-kitten/components'
import { useState } from 'react'
import { View,StyleSheet, StatusBar} from 'react-native'
import { Colors } from '../Colors'
import Header from '../components/Header'

export default function LoginIndexScreen(props) {
    const [phone,setPhone]=useState('')
    return (
        <View style={styles.container}>
        <Header back={()=>props.navigation.goBack()}/>
        <Text style={styles.txt} category='h1'>Welcome Najeeb,</Text>
        <Text appearance='hint'>Please login to your kredda account</Text>
        <Input
        style={styles.inp}
      value={phone}
      label='Enter Password'
      placeholder='Enter Password'
      onChangeText={nextValue => setPhone(nextValue)}
    />
    <Button style={styles.btn}>LOG IN</Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
    flex:1,
    paddingTop:StatusBar.currentHeight,
    padding:10
    },
    txt:{
        color:Colors.primary
    },
    inp:{
        marginTop:20,
        width:'93%',
        marginLeft:'auto',
        marginRight:'auto'
    },
    btn:{
        marginTop:20,
        width:'93%',
        marginLeft:'auto',
        marginRight:'auto'
    }
   
})
import { Button, Icon,Input,Text } from '@ui-kitten/components'
import React from 'react'
import { useState } from 'react'
import { View,StyleSheet, StatusBar} from 'react-native'
import { Colors } from '../Colors'
import Header from '../components/Header'

export default function SignUpIndexScreen(props) {
    const [phone,setPhone]=useState('')
    return (
        <View style={styles.container}>
        <Header back={()=>props.navigation.goBack()}/>
        <Text style={styles.txt} category='h1'>Get Started</Text>
        <Input
        style={styles.inp}
      value={phone}
      label='Enter Phone Number'
      placeholder='Phone Number'
      onChangeText={nextValue => setPhone(nextValue)}
    />
    <Button onPress={()=>{
        props.navigation.navigate('Verify')
    }} style={styles.btn}>SIGN UP</Button>
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

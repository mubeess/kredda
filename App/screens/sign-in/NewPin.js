import { Button, Input, Text } from '@ui-kitten/components'
import React from 'react'
import { View,StyleSheet, StatusBar, Image } from 'react-native'
import { Colors } from '../../Colors'

export default function NewPin(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.txt} category='h3'>Create New Pin</Text>
            <Text style={styles.sub}>This is a 4-digit private PIN to secure your account
            and should never be disclosed to any body.</Text>
            <Image resizeMode='contain' style={styles.pic} source={require('../../../assets/images/lock.png')}/>
            <View style={styles.inp}>
                <Input
                secureTextEntry
                label='Enter Pin'
                keyboardType='numeric'
                placeholder='****'
                style={styles.mainInp}
                />

             <Input
                secureTextEntry
                label='Confirm Pin'
                keyboardType='numeric'
                placeholder='****'
                style={[styles.mainInp,{marginTop:20}]}
                />
              
            </View>
            <Button onPress={()=>{
                props.navigation.navigate('Profile')
            }} style={{
                width:'90%',
                marginTop:20
            }}>CONFIRM</Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     padding:10,
     paddingTop:StatusBar.currentHeight,
     alignItems:'center',
     backgroundColor:'white',
    
    },
    txt:{
        color:Colors.primary,
        textAlign:'center',
        marginTop:20,
        fontWeight:'bold',
       
    },
    sub:{
        textAlign:'center',
        
    },
    num:{
        flexDirection:'row',
        justifyContent:'center'
    },
    numBold:{
        fontWeight:'bold',
        
    },
    pic:{
        width:50,
        height:50,
        marginTop:10,
    },
    inp:{
        flexDirection:'column',
        marginTop:20,
    
        
    },
    mainInp:{
        width:'90%',
        backgroundColor:Colors.midGray,
        elevation:2,
        marginRight:3
    }
})

import { Input, Text,Button } from '@ui-kitten/components'
import React from 'react'
import { View,StyleSheet, StatusBar, Image} from 'react-native'
import { Colors } from '../Colors'

export default function Profile(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.txt} category='h4'>Profile Details</Text>
            <Image resizeMode='contain' source={require('../../assets/images/lock.png')} style={styles.img}/>
            <Input
            label='Full Name'
            placeholder='Full Name'
            style={styles.inp}
            />
            <Input
            label='Email Address'
            placeholder='Email Address'
            style={styles.inp}
            />
            <Input
            label='Phone Number'
            placeholder='Phone Number'
            style={styles.inp}
            />
            <Input
            label='Date Of Birth'
            placeholder='dd/mm/yy'
            style={styles.inp}
            />
            <Button onPress={()=>{
                props.navigation.navigate('Dash')
            }} appearance='ghost' style={{
                marginTop:20,
                width:'90%'
            }}>Skip</Button>
            <Button onPress={()=>{
                props.navigation.navigate('Dash')
            }}  style={{
                marginTop:20,
                width:'90%'
            }}>SAVE</Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
    flex:1,
    backgroundColor:'#ffffff',
    paddingTop:StatusBar.currentHeight,
    alignItems:'center'
    },
    txt:{
        color:Colors.primary
    },
    img:{
        width:100,
        height:100,
        borderRadius:50,
        marginTop:20
    },
    inp:{
        backgroundColor:'#f9f9f9',
        width:'90%',
        marginTop:10
    }
})

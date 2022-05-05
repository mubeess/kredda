import { Button,Text } from '@ui-kitten/components'
import React from 'react'
import { View,StyleSheet, Image } from 'react-native'
import { Colors } from '../../Colors'

export default function Welcome(props) {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/welcome.png')} style={styles.img}/>
            <Text style={styles.txt} category='h4'>Welcome To Kredda</Text>
            <Text style={styles.txt} category='h4'>Najeeb</Text>
            <Button onPress={()=>{
                props.navigation.navigate('Profile')
            }} style={{
                marginTop:100,
                elevation:5
            }}>GET STARTED</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
    },
    img:{
        width:'50%',
        height:150,
        marginBottom:20
    },
    txt:{
        color:Colors.primary
    }
})

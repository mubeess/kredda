import { Icon } from '@ui-kitten/components'
import React from 'react'
import { View, Text, Image, TouchableOpacity,StyleSheet } from 'react-native'

export default function Header(props) {
    return (
        <View style={styles.header}>
        <Image source={require('../../assets/images/logo2.png')} style={styles.img}/>
        <TouchableOpacity onPress={()=>{
            props.back()
        }} style={styles.iconCont}>
        <Icon
  style={styles.icon}
  fill='#000000'
  name='close-outline'
/>
        </TouchableOpacity>
        
          </View>
    )
}
const styles = StyleSheet.create({
    header:{
        minHeight:100,
        width:'100%',
        padding:10,
        flexDirection:'row',
        alignItems:'center'
         },
         img:{
             height: 70,
             width:70
         },
         icon:{
           width:40,
           height:40,
           marginLeft:'auto'
         },
         iconCont:{
             marginLeft:'auto',
             marginRight:20
         }
})


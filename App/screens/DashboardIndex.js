import { Icon } from '@ui-kitten/components'
import React from 'react'
import { View, Text,StyleSheet, StatusBar, Image, ScrollView } from 'react-native'
import { Colors } from '../Colors'
import Card1 from '../components/Card1'

export default function DashboardIndex() {
    return (
        <View style={styles.container}>
           <View style={styles.head}>
       <Image style={styles.image} source={require('../../assets/images/mb.jpg')} resizeMode='contain'/>
       <View style={styles.details}>

        <View style={styles.texts}>
        <Text style={styles.text1}>Hello, </Text>
        <Text style={styles.text2}>Najeeb</Text>
        </View>

        <View style={styles.acNum}>
        <Icon 
       style={styles.icon}
       fill='#000000'
       name='person-outline'
      />
      <Text style={styles.text3}>Kredda: </Text>
      <Text style={styles.text3}>0238465058</Text>
        </View>

    </View>

    <View style={styles.notify}>
    <Icon 
       style={styles.icon2}
       fill='#000000'
       name='bell-outline'
      />
    <Text style={styles.text4}>1</Text>
    </View>
           </View>

    
    <ScrollView horizontal scrollEnabled style={styles.cards}>
  <Card1/>
    </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#f9f9f9',
        paddingTop:StatusBar.currentHeight,
        padding:10
    },
    head:{
        width:'100%',
        height:100,
        flexDirection:'row',
        padding:10
    },
    image:{
        width:50,
        height:50,
        borderRadius:50,
        marginRight:10
    },
    texts:{
        flexDirection:'row'
    },
    text1:{
        color:Colors.primary,
        fontSize:20
  },
  text2:{
      color:Colors.primary,
      fontWeight:'bold',
      fontSize:20
  },
  icon:{
      width:20,
      height:20
  },
  text3:{
fontSize:14
  },
  acNum:{
      flexDirection:'row',
      alignItems:'center'
  },
  notify:{
      marginLeft:'auto',
      position:'relative'
      
  },
  icon2:{
    width:40,
    height:40
},
text4:{
    color:'white',
    backgroundColor:'red',
    textAlign:'center',
    width:25,
    height:25,
    borderRadius:30,
    position:'absolute',
    right:0
},
cards:{
    minWidth:'100%',
    maxHeight:230,
    flexDirection:'row',
    padding:10,
    
}
})

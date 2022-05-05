import { Input, Text } from '@ui-kitten/components'
import React from 'react'
import { View,StyleSheet, StatusBar, Image } from 'react-native'
import { Colors } from '../../Colors'

export default function Verification(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.txt} category='h3'>Number Verification</Text>
            <Text style={styles.sub}>Please input the 6 digits numbers sent to</Text>
            <View style={styles.num}>
                <Text style={styles.numBold}>098882222 </Text>
                <Text>for verification</Text>
            </View>
            <Image style={styles.pic} source={require('../../../assets/images/phone.png')}/>
            <View style={styles.inp}>
                <Input
                keyboardType='numeric'
                style={styles.mainInp}
                />
                 <Input
                  keyboardType='numeric'
                style={styles.mainInp}
                />
                 <Input
                  keyboardType='numeric'
                style={styles.mainInp}
                />
                 <Input
                  keyboardType='numeric'
                style={styles.mainInp}
                />
                 <Input
                  keyboardType='numeric'
                style={styles.mainInp}
                />
                 <Input
                 onChangeText={(txt)=>{
                props.navigation.navigate('Pin')
                 }}
                  keyboardType='numeric'
                style={styles.mainInp}
                />
              
            </View>
            <View style={styles.num}>
                <Text>Didn't recieved the code? </Text>
                <Text style={[styles.numBold,{color:Colors.primary}]}>RESEND</Text>
               
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     padding:10,
     paddingTop:StatusBar.currentHeight,
     alignItems:'center',
     backgroundColor:'white'
    },
    txt:{
        color:Colors.primary,
        textAlign:'center',
        marginTop:20
    },
    sub:{
        textAlign:'center'
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
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-around',
        
    },
    mainInp:{
        height:50,
        width:40,
        backgroundColor:Colors.midGray,
        elevation:2,
        marginRight:3
    }
})

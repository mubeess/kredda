import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

export default function Card1() {
    return (
        <View style={styles.card}>
            <View style={styles.cardDe}></View>
            <View style={styles.cardDe2}>
                <View style={styles.cardDash}>
                <View style={styles.afterDash}></View>
                <View style={styles.final}>
                 <Text style={styles.text1}>Wallet Balance</Text>
                 <View style={styles.amounts}>
                 <Text style={styles.amount}>N81,000</Text>
                 <Text style={styles.amount2}>.00</Text>
                 </View>
                 
                 <View style={styles.visa}>
                <Text style={styles.text2}>KREDDA</Text>
                <View style={styles.visa2}>
                <Text style={styles.text2}>VISA</Text>
              
                <View style={styles.visaBall}></View>
                <View style={styles.visaBall}></View>
                </View>
                 </View>
                </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
card:{
    width:250,
    height:170,
    backgroundColor:'#151626',
    borderRadius:20
},
cardDe:{
    backgroundColor:'#ba4527',
    width:'90%',
    height:20,
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:10,
    borderTopLeftRadius:20,
    borderTopRightRadius:20
},
cardDe2:{
    width:'100%',
    flex:1,
    backgroundColor:'#1b1d31',
    borderRadius:20
},
cardDash:{
    width:'95%',
    height:'95%',
    backgroundColor:'transparent',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'auto',
    marginBottom:'auto',
    borderRadius:20,
    borderWidth:3,
    borderColor:'black',
    borderStyle:'dashed',
    padding:5
},
afterDash:{
    backgroundColor:'#fc8f19',
    width:'100%',
    height:20,
    marginLeft:'auto',
    marginRight:'auto',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
},
final:{
    width:'100%',
    backgroundColor:'#151626',
    flex:1,
    marginLeft:'auto',
    marginRight:'auto',
    
},
text1:{
    color:'white',
    textAlign:'center'
},
amount:{
color:'white',
textAlign:'center',
fontWeight:'bold',
fontSize:30
},
amounts:{
    flexDirection:'row',
    justifyContent:'center'
},
amount2:{
    color:'white',
    marginTop:'auto'
},
visa:{
    marginTop:'auto',
    flexDirection:'row',
    marginBottom:5,
    marginRight:5,
    marginLeft:5
},
text2:{
    color:'white',
    fontWeight:'bold',
    fontStyle:'italic'
},
visa2:{
    marginLeft:'auto',
    flexDirection:'row',
    alignItems:'center'
},
visaBall:{
    width:10,
    height:10,
    borderRadius:20,
    backgroundColor:'white'
}
})

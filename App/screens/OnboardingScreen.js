import React from 'react'
import { View, Text,Image ,StyleSheet, StatusBar, Dimensions} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

export default function OnboardingScreen() {
    return (
    <View style={styles.container}>
    <StatusBar backgroundColor='#ffffff'/>
    <Image resizeMode='contain' style={styles.logo} source={require('../../assets/images/logo.png')}/>
    <View style={styles.onabord}>
    <Onboarding
    showDone={false}
    showNext={false}
    showSkip={false}
    bottomBarColor='#ffffff'
    containerStyles={{
        maxHeight:(Dimensions.get('window').height/2)-50
    }}
    imageContainerStyles={{
        paddingBottom:0
    }}
    DotComponent={({selected})=>(
        <View style={{
            height:selected?15:10,
            width:selected?15:10,
            backgroundColor:selected?'blue':'rgba(0,0,0,0.5)',
            borderRadius:20,
            margin:3
        }}/>
    )}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image resizeMode='contain' style={styles.img} source={require('../../assets/images/onb1.png')} />,
            title: 'Top up your wallet and make several payments.',
            subtitle: '',
          },
          {
            backgroundColor: '#fff',
            image: <Image resizeMode='contain' style={styles.img} source={require('../../assets/images/onb2.png')} />,
            title: 'Easy for you to invest and take loan to achieve goals.',
            subtitle: '',
          },
          {
            backgroundColor: '#fff',
            image: <Image resizeMode='contain' style={styles.img} source={require('../../assets/images/onb3.png')} />,
            title: 'Save towards your goal and plan your finance.',
            subtitle: '',
          },
        ]}
      />
    </View>
        
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
        paddingTop:StatusBar.currentHeight
    },
    logo:{
        width:100,
        height:100,
        marginLeft:20
    },
    onabord:{
        height:Dimensions.get('window').height/2,
        marginTop:30
    },
    img:{
        height:Dimensions.get('window').height/3,
        width:Dimensions.get('window').width-20
    }
})

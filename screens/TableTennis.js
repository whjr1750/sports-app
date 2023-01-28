import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
export default class IndianCuisine extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1, backgroundColor: 'orange' }}>
        <View
          style={{
            marginTop:20,
            padding: 20,
            backgroundColor: 'pink',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              position: 'absolute',
              alignSelf: 'center',
              fontFamily:'courier',
              fontWeight:'bold',
              color:'white',
              fontSize:25
            }}>
            Best in Tennis
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              backgroundColor: 'yellow',
              alignItems: 'center',
              marginTop: 30,
              marginLeft: 20,
              borderRadius: 100,
            }}
            onPress={() => {
              this.props.navigation.navigate('Dashboard');
            }}>
            <Text style={{ fontSize: 30 }}>👈</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 15,
            width: 280,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{textAlign:'center', fontFamily:'courier'}}>
      Ma Long
          </Text>
          <Image
            source={{
              uri: 'https://sport.one/content/images/2017/06/Zhang_Jike.jpg',
            }}
            style={{ width: 250, height: 190 }}></Image>
        </View>
         <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 15,
            width: 280,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{textAlign:'center', fontFamily:'courier'}}>
      Zhang Yining
          </Text>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/R.71defee0b68814abb73ea25c7423ca89?rik=IaS%2bL3wgzoVRog&riu=http%3a%2f%2f2.bp.blogspot.com%2f-Uv6OS1HhJW0%2fT2SkTny9Z-I%2fAAAAAAAAPwQ%2faG6p2BqXS8Y%2fs1600%2fZhang%2bYining-4.jpg&ehk=FvagLV%2boMtgDLHVWtqIPypAG3sYC61FETP9Vrrllk1c%3d&risl=&pid=ImgRaw&r=0',
            }}
            style={{ width: 250, height: 190 }}></Image>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 15,
            width: 280,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{textAlign:'center', fontFamily:'courier'}}>
      Wang Na
          </Text>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/OIP.1jNPGFOX1Mwwk2gyESCTJAAAAA?pid=ImgDet&rs=1',
            }}
            style={{ width: 250, height: 190 }}></Image>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 15,
            width: 280,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{textAlign:'center', fontFamily:'courier'}}>
      Zoran Primorac
          </Text>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/OIP.InULLcZRQyfFZYm7oz2sYwHaEo?pid=ImgDet&rs=1',
            }}
            style={{ width: 250, height: 190 }}></Image>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 15,
            width: 280,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{textAlign:'center', fontFamily:'courier'}}>
      Yoo Nam-kyu
          </Text>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/OIP.0598l_I_YYntjmV9cvvv0QHaE7?pid=ImgDet&rs=1',
            }}
            style={{ width: 250, height: 190 }}></Image>
        </View>
       
          
        
        
      </View>
      </ScrollView>
    );
  }
}

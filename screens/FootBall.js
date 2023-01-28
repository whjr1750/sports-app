import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
export default class ChineseCuisine extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
        <View
          style={{
            marginTop:20,
            padding: 20,
            backgroundColor: 'lightgreen',
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
           Best in FootBall
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
      Lionel Messi
          </Text>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/OIP.RWlUpP6GDZZHy3nB96UPhAHaEK?pid=ImgDet&rs=1',
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
        Cristiano Ronaldo
          </Text>
          <Image
            source={{
              uri: 'https://grmdaily.com/wp-content/uploads/2020/10/cristiano-ronaldo-billionaire-2048x1152.jpg',
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
      Kylian Mbappé
          </Text>
          <Image
            source={{
              uri: 'https://www.thesun.co.uk/wp-content/uploads/2020/12/GettyImages-1230171123.jpg',
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
      NeymarJr
          </Text>
          <Image
            source={{
              uri: 'https://images.news18.com/ibnlive/uploads/2020/08/1596633203_neymar.png',
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
      Erling Haaland
          </Text>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/OIP.pSgmBLtpO651nVH8LSwg8AHaEJ?pid=ImgDet&rs=1',
            }}
            style={{ width: 250, height: 190 }}></Image>
        </View>
       
          
        
        
      </View>
      </ScrollView>
    );
  }
}

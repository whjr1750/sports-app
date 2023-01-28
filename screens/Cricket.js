import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
export default class Cricket extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1, backgroundColor: 'pink' }}>
        <View
          style={{
            marginTop:20,
            padding: 20,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              position: 'absolute',
              alignSelf: 'center',
              fontFamily:'Verdana',
              fontWeight:'bold',
              color:'white',
              fontSize:25
            }}>
            Best in Cricket
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
            backgroundColor: 'red',
            flex: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 15,
            width: 280,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{textAlign:'center', fontFamily:'Serif',fontWeight:'bold'}}>
      Sachin Tendulkar
          </Text>
          <Image
            source={{
              uri: 'https://www.telegraph.co.uk/multimedia/archive/02698/tendulkar_2698039b.jpg',
            }}
            style={{ width: 250, height: 190 }}></Image>
        </View>
         <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 15,
            width: 280,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{textAlign:'center',fontFamily:'Serif',fontWeight:'bold'}}>
      Don Bradman
          </Text>
          <Image
            source={{
              uri: 'https://www.madametussauds.com/sydney/media/e3ybbu1k/don-bradman-sports.jpg',
            }}
            style={{ width: 250, height: 190 }}></Image>
        </View>
        <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 15,
            width: 280,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{textAlign:'center', fontFamily:'Serif',fontWeight:'bold'}}>
      Shane Warne
          </Text>
          <Image
            source={{
              uri: 'https://i.pinimg.com/736x/c5/bc/c0/c5bcc0dcc32de721fcc322e758e9b9e1--shane-warne-cricket.jpg',
            }}
            style={{ width: 250, height: 190 }}></Image>
        </View>
       <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 15,
            width: 280,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{textAlign:'center', fontFamily:'Serif',fontWeight:'bold'}}>
      Brett Lee
          </Text>
          <Image
            source={{
              uri: 'https://im.indiatimes.in/content/2019/Sep/brett_lee_1568630197_725x725.jpg',
            }}
            style={{ width: 250, height: 190 }}></Image>
        </View>

           <View
          style={{
            backgroundColor: 'red',
            flex: 1,
            padding: 10,
            marginTop: 20,
            borderRadius: 15,
            width: 280,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <Text style={{textAlign:'center', fontFamily:'Serif',fontWeight:'bold'}}>
      Virat Kholi
          </Text>
          <Image
            source={{
              uri: 'https://cdn.lifestyleasia.com/wp-content/uploads/sites/7/2020/12/01170721/GettyImages-1076435316-scaled.jpg',
            }}
            style={{ width: 250, height: 190 }}></Image>
        </View>
          
        
        
      </View>
      </ScrollView>
    );
  }
}

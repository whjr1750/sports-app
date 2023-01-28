import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
export default class AmericanCuisine extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <View
          style={{
            marginTop:20,
            padding: 20,
            backgroundColor: 'yellow',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              position: 'absolute',
              alignSelf: 'center',
              fontFamily:'courier',
              fontWeight:'bold',
              color:'darkblue',
              fontSize:25
            }}>
            Best in Hockey
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
      Dhyan Chand
          </Text>
          <Image
            source={{
              uri: 'https://static.sportskeeda.com/wp-content/uploads/2014/08/dhyan-chand-1409231388.jpg',
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
      Rani Rampal
          </Text>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/R.125be94125b2c3b43a2d186d9148e8d9?rik=7QcNhMXiJAHmZA&riu=http%3a%2f%2fstatic.dnaindia.com%2fsites%2fdefault%2ffiles%2fstyles%2ffull%2fpublic%2f2018%2f06%2f29%2f699105-695002-694332-rani-rampal-twitter-thehockeyindia.jpg&ehk=tRGY4SFxSfCE0ldAcJXfe1sIvIjPSIx8JiqNZoOZQPM%3d&risl=&pid=ImgRaw&r=0',
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
      Leslie Claudius
          </Text>
          <Image
            source={{
              uri: 'https://static.toiimg.com/thumb/msid-17696850,width-1070,height-580,imgsize-16658,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg',
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
      Udham Singh
          </Text>
          <Image
            source={{
              uri: 'https://www.bouncefeed.com/wp-content/uploads/2020/10/Udham-Singh-Udham-Singh.jpg',
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
      Sardar Singh
          </Text>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/OIF.r0NlMMAvyLpoXIyFlLPK8w?pid=ImgDet&rs=1',
            }}
            style={{ width: 250, height: 190 }}></Image>
        </View>
       
          
        
        
      </View>
      </ScrollView>
    );
  }
}

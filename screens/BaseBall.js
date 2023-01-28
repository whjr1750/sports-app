import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking, ScrollView } from 'react-native';
export default class BaseBall extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1, backgroundColor: 'cyan' }}>
        <View
          style={{
            marginTop:20,
            padding: 20,
            backgroundColor: 'darkgreen',
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
            Best in BaseBall
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
      Babe Ruth 
          </Text>
          <Image
            source={{
              uri: 'https://3.bp.blogspot.com/-KAJkmtVnBKw/V7W82CnlQAI/AAAAAAAARxU/8xUButka-zcGsIDaRnyWeVo-3OkhfDi-ACLcB/s1600/la-sp-babe-ruth-through-the-years-20140708.jpg',
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
     Cy Young
          </Text>
          <Image
            source={{
              uri: 'https://th.bing.com/th/id/OIP.O75M6UFArAoaEpZolPdHqQHaFh?pid=ImgDet&rs=1',
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
      Ty Cobb
          </Text>
          <Image
            source={{
              uri: 'https://www.sportscasting.com/wp-content/uploads/2021/01/Ty-Cobb.jpg',
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
      Billy Martin
          </Text>
          <Image
            source={{
              uri: 'https://www.gannett-cdn.com/presto/2019/06/25/USAT/64727858-be81-4107-ab66-6bfbaede167d-billymartin.jpg?crop=2699,1518,x0,y313&width=3200&height=1680&fit=bounds',
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
      Walter Johnson
          </Text>
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/e3/bc/b0/e3bcb0b4c0a156bacfe694c20e96b213.jpg',
            }}
            style={{ width: 250, height: 190 }}></Image>
        </View>
          
        
        
      </View>
      </ScrollView>
    );
  }
}

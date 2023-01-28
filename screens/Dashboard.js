import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  ScrollView,
} from 'react-native';
import * as Font from "expo-font";
import { RFValue } from 'react-native-responsive-fontsize';
var date = new Date();
var hours = date.getHours();
export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      fontsLoaded: false,
      text: '',
      bg: '',
      fontS: 0,
    };
  }
  setGreeting = () => {

    if (hours < 12) {
      this.setState({
        text: ' Good Morning!',
        bg: 'yellow',
        fontS: 45,
      });
    } else if (hours >= 12 && hours <= 16) {
      this.setState({
        text: ' Good Afternoon!',
        bg: 'lightgreen',
        fontS: 42,
      });
    } else if (hours > 16) {
      this.setState({
        text: ' Good Evening!',
        bg: 'lightgreen',
        fontS: 45,
      });
    }
  };

  async _loadFontsAsync() {
    await Font.loadAsync({
      'Times-New-Roman': require('../assets/fonts/times.ttf')
    }
    ).then(() => this.setState({ fontsLoaded: true }))
  }
  componentDidMount() {
    this._loadFontsAsync();
    this.setGreeting();
    
  }


  GoScreen = (screen) => {
    this.props.navigation.navigate(screen);
  };
  render() {
    if (this.state.fontsLoaded) {
    return (
      <View style={{ backgroundColor: this.state.bg }}>
        <ScrollView>
          <View
            style={{
              marginTop: RFValue(20),
              padding: RFValue(30),
              backgroundColor: 'turqoise',
              borderRadius: RFValue(25),
              borderStyle: 'solid',
              borderWidth: RFValue(2),
            }}>
            <Text
              style={{
                fontFamily: 'Times-New-Roman',
                color: 'darkblue',
                fontWeight: 'bold',
                position: 'absolute',
                alignSelf: 'center',
                top: 5,

                fontSize: RFValue(45),
              }}>
              Sports-Info
            </Text>
          </View>
          <Image

            style={{
              width: RFValue(380),
              height: RFValue(155),
              marginRight: RFValue(50),
              opacity: 0.2,
              position: 'absolute',
              alignSelf: 'center',
              marginTop: RFValue(30),
              marginLeft: RFValue(50),
              borderRadius: 25,
            }}></Image>
          <View style={{}}>
            <Text
              style={{
                fontFamily: 'Times-New-Roman',
                color: 'darkgreen',
                fontSize: this.state.fontS,
                textAlign: 'center',
              }}>
              {this.state.text}
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                backgroundColor: 'lightblue',
                height: 90,
                width: 200,
                borderTopLeftRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                borderStyle: 'solid',
                borderWidth: 4,
                borderBottomRightRadius: 25,
                marginTop: 20,
              }}
              onPress={() => {
                this.GoScreen('Cricket');
              }}>
              <Image
                source={require('../pictures/Cricket.jpg')}
                style={{
                  width: 190,
                  height: 80,
                  position: 'absolute',
                  opacity: 0.2,
                  borderTopLeftRadius: 15,
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,

                }}></Image>
              <Text
                style={{
                  //fontWeight: 'bold',
                  fontFamily: 'Times-New-Roman',
                  fontSize: 27,
                  color: 'black',
                }}>
                Cricket
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              style={{
                width: 190,
                height: 90,
                borderTopLeftRadius: 25,
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'skyblue',
                borderBottomRightRadius: 25,
                borderWidth: 4,
              }}
              onPress={() => {
                this.GoScreen('FootBall');
              }}>
              <Text
                style={{
                  fontFamily: 'Times-New-Roman',
                  fontSize: 25,
                  //fontWeight: 'bold',
                }}>
                FootBall
              </Text>
              <Image
                source={require('../pictures/FootBall.jpg')}

                style={{
                  width: 190,
                  opacity: 0.3,
                  height: 90,
                  position: 'absolute',
                  borderTopLeftRadius: 25,
                  borderBottomRightRadius: 25,
                }}></Image>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
                width: 190,
                borderTopLeftRadius: 25,
                height: 90,
                alignSelf: 'center',
                borderWidth: 4,
                backgroundColor: 'lightgreen',
                borderBottomRightRadius: 25,
              }}
              onPress={() => {
                this.GoScreen('BaseBall');
              }}>
              <Text
                style={{
                  fontFamily: 'Times-New-Roman',
                  //fontWeight: 'bold',
                  fontSize: 25,
                }}>
                BaseBall
              </Text>
              <Image
                source={require('../pictures/BaseBall.jpg')}
                style={{
                  width: 190,
                  borderTopLeftRadius: 25,
                  borderBottomRightRadius: 25,
                  height: 90,
                  position: 'absolute',
                  opacity: 0.4,
                }}></Image>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                height: 90,
                width: 190,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 4,
                borderBottomRightRadius: 25,
                borderTopLeftRadius: 25,
                marginTop: 20,
                backgroundColor: 'white',
              }}
              onPress={() => {
                this.GoScreen('Hockey');
              }}>
              <Text
                style={{
                  fontFamily: 'Times-New-Roman',
                  fontSize: 23,
                }}>
                Hockey
              </Text>
              <Image
                source={require('../pictures/Hockey.png')}
                style={{
                  width: 190,
                  borderTopLeftRadius: 25,
                  borderBottomRightRadius: 25,
                  height: 90,
                  position: 'absolute',
                  opacity: 0.4,
                }}></Image>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                height: 90,
                width: 190,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 4,
                borderBottomRightRadius: 25,
                borderTopLeftRadius: 25,
                marginTop: 20,
              }}
              onPress={() => {
                this.GoScreen('TableTennis');
              }}>
              <Text
                style={{
                  fontFamily: 'Times-New-Roman',
                  fontSize: 25,
                }}>
                TableTennis
              </Text>
              <Image
                source={require('../pictures/TableTennis.jpeg')}
                style={{
                  width: 190,
                  borderTopLeftRadius: 25,
                  borderBottomRightRadius: 25,
                  height: 90,
                  position: 'absolute',
                  opacity: 0.3,
                }}></Image>
            </TouchableOpacity>
          </View>
          <View style={{ paddingBottom: 23 }}>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                height: 90,
                width: 190,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 4,
                borderBottomRightRadius: 25,
                borderTopLeftRadius: 25,
                marginTop: 20,
              }}
              onPress={() => {
                this.GoScreen('Feedback');
              }}>
              <Text
                style={{
                  fontFamily: 'Times-New-Roman',
                  fontSize: 30,
                }}>
                FEEDBACK
              </Text>
              <Image
                source={{
                  uri: 'https://www.pngitem.com/pimgs/m/76-768106_feedback-icon-png-transparent-png.png',
                }}
                style={{
                  width: 190,
                  borderTopLeftRadius: 25,
                  borderBottomRightRadius: 25,
                  height: 90,
                  position: 'absolute',
                  opacity: 0.4,
                  backgroundColor: 'white'
                }}></Image>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
    }
  }
}

import React from 'react';
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import firebase from 'firebase';
import db from '../config';
export default class Feedback extends React.Component {
  constructor() {
    super();
    this.state = {
      feedback: '',
    };
  }
  submitFeed = () => {
    db.collection('feedbacks').add({
      feedback: this.state.feedback,
    });
    this.setState({
      feedback: '',
    });
  };

  render() {
    return (
      <View>
        <View
          style={{
            padding: 20,
            backgroundColor: 'lightgreen',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              position: 'absolute',
              alignSelf: 'center',
              color: 'white',
              fontWeight:'bold',
              fontSize:25,
              fontFamily:'courier'
            }}>
            Feedback
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
        <View>
          <TextInput
            style={{
              borderWidth: 2,
              height: 300,
              width: 250,
              margin: 40,
              padding: 10,
              backgroundColor: 'black',
              color: 'white',
              fontFamily:'courier'
            }}
            multiline={true}
            placeholder={'In case of any Trouble,Contact us here....'}
            onChangeText={(text) => {
              this.setState({
                feedback: text,
              });
            }}
            value={this.state.feedback}></TextInput>
        </View>
        <View>
          <TouchableOpacity
            style={{
              backgroundColor: 'orange',
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 2,
              width: 60,
              height: 40,
              alignSelf: 'center',
            }}
            onPress={() => {
              this.submitFeed();
            }}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

import React from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { WebBrowser } from 'expo';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };


  render() {
    return (
      <View>

          <Image
              style={{
                  height: 400,
                  width: 200,
                  marginTop: 100,
                  marginLeft: 100,
                  marginRight: 100,
                  alignItems: 'center'
              }}
              source={require('../assets/images/map.png')}
          />
      </View>
    );
  }

}

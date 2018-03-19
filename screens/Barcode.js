import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import Barcode from 'react-native-barcode-builder';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>

          <Text style={styles.text}>Enter your Student ID:</Text>

          <TextInput
              style={styles.input}
              value={this.state.text}
              onChangeText={(text) => {

                  if(this.state.text.length > 8){

                      let short = this.state.text.substring(0,8);

                      this.setState({
                          text: short,
                      });
                  } else {
                      this.setState( {text} );
                  }
              }}

              keyboardType='numeric'
              returnKeyType='done'
          />

          <Barcode
              value={this.state.text}
              onError={() => 0}
              background='#e9e9ee'
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({

  text: {
    marginTop: 215,
    textAlign: 'center',
    marginLeft: 80,
    marginRight: 80,
  },

  input: {
    textAlign: 'center',
    borderLeftColor: 'black',
    borderLeftWidth: 1,
    borderRightColor: 'black',
    borderRightWidth: 1,
    borderTopColor: 'black',
    borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 40,
    marginLeft: 80,
    marginRight: 80,
  }

});

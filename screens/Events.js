import React from 'react';
import {
    FlatList,
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import { WebBrowser } from 'expo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View>

          <FlatList
              style={styles.pad}
              data={[{title: 'Title Text', key: 'item1'},
                  {title: 'Title Text', key: 'item2'},
                  {title: 'Title Text', key: 'item3'},
                  {title: 'Title Text', key: 'item4'},
                  {title: 'Title Text', key: 'item5'},
                  {title: 'Title Text', key: 'item6'},
                  {title: 'Title Text', key: 'item7'},
                  {title: 'Title Text', key: 'item22'},
                  {title: 'Title Text', key: 'item32'},
                  {title: 'Title Text', key: 'item421'},
                  {title: 'Title Text', key: 'item5234'},
                  {title: 'Title Text', key: 'item62'},
                  {title: 'Title Text', key: 'item37'},
                  {title: 'Title Text', key: 'item342'},
                  {title: 'Title Text', key: 'item2343'},
                  {title: 'Title Text', key: 'item34'},
                  {title: 'Title Text', key: 'item335'},
                  {title: 'Title Text', key: 'item456'},
                  {title: 'Title Text', key: 'item77'},
                  {title: 'Title Text', key: 'item762'},
                  {title: 'Title Text', key: 'item7563'},
                  {title: 'Title Text', key: 'item764'},
                  {title: 'Title Text', key: 'item75'},
                  {title: 'Title Text', key: 'item776'},
                  {title: 'Title Text', key: 'item887'}]}
              renderItem={({item, separators}) => (

                  <TouchableHighlight

                      onPress={() => {
                          let a = 5;
                      }}>

                      <View style={styles.lyst}>
                          <Text
                              style={styles.cen}>{item.title}</Text>
                      </View>

                  </TouchableHighlight>


              )}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({

    pad: {
        paddingTop: 50,
    },

    cen: {
        textAlign: 'center',
        fontSize: 22,
    },

    lyst: {
        marginLeft: 50,
        marginRight: 50,
    },

})

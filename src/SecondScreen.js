/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class SecondScreen extends Component<{}> {
  static navigationOption = {
    drawerLabel: 'Second',
    drawerIcon: ({tintColor}) => {
      return (
        <MaterialIcons
          name="card-membership"
          size={24}
          style={{color: tintColor}}
        >
        </MaterialIcons>
      );
    }
  }

  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{fontSize: 30, color: 'green'}}>Screen 2</Text>  
        <Button 
          onPress={() => this.props.navigation.navigate('DrawerToggle')}
          title="Open Drawer"
        ></Button>       
      </View>
    );
  }
}
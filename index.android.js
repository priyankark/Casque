/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView

} from 'react-native';

import MapView from 'react-native-maps';
import Header from './src/components/Header';
import ShowMap from './src/components/ShowMap';
import Contacts from './src/components/Contacts';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});




export default class Casque extends Component {
  render() {
    const { region } = this.props;
    console.log(region);

    return (

      <ScrollView>
      <View style={{flexDirection:'column',flex:1}}>


    <View>
    <Header headerText={'Casque'}/>
    </View>


    <View>
       <ShowMap/>
     </View>

     <View style={{marginTop:410}}>
       <Contacts/>
     </View>

    </View>
    </ScrollView>
    );
  }
}


AppRegistry.registerComponent('Casque', () => Casque);

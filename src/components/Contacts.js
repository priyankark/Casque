import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Alert,
  TouchableOpacity
} from 'react-native';

import { Button, Card } from 'react-native-material-design';
import Communications from 'react-native-communications';


var SelectContacts = require('react-native-select-contact-android');
var ContactPicker = require('react-native-android-contactpicker');





export default class Contacts extends Component{


  selectC()
  {
    Communications.text('9945864011', "hey");
    ContactPicker.open({
      theme: ContactPicker.Themes.LIGHT,
      limit: 20,
      onlyWithPhone: true
    })
    .then( (contacts) => {
      Alert.alert(contacts[0].phoneNumbers[0].number);


    })
    .catch( (err) => {
      Alert.alert(err.code, err.message);
    });

    /**
Sample contact list:
[
  {
    id: "100",
    name: {
      display:"John Doe",
      first: "John",
      last: "Doe"
    },
    phoneNumbers: [ {"number": "+1-555-555-5555"} ],
    emailAddresses: [ {"email": "john.doe@email.com"} ]
  }
]
**/





  }


  render()
{

  return (


    <Button value="NORMAL FLAT" onPress={()=>this.selectC()} text='Contacts'/>


);


}

}

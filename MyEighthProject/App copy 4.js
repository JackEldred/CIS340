import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker' //impot 

export default function App() {
  
  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraRollPermissionAsync();

    if (permissionResult.granted === false){

        alert('Permission is required');
        return;      
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }

  // end of the code






  return (
    <View style={styles.container}>
     <Image source={{uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png' }} 
        style={styles.logo} />

    <Text style={styles.insts}>
        Press the button below to select an image on your Phone!
    </Text>



     
    <TouchableOpacity style = {styles.button} onPress={openImagePickerAsync} >
    
      <Text style={styles.buttonText}> Pick Image </Text>

    </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'FFFFE0',
  },

  button: {
    backgroundColor: '008B8B',
    padding: 10,
    borderRadius: 5
  },

  insts: {
    fontSize: 18,
    color: '#87CEFA',
    marginHorizontal: 15,
    marginalBottom: 10,
  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20
  },

  buttonText: {
    fontSize: 20,
    color: '#fff'

  }

});

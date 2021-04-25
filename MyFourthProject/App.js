import React from 'react';
import {Text, View, FlatList } from 'react-native';


export default StatesApp() = () => {
  return (
    <View style={{flex: 1, paddingTop: 22}}>
        <SectionList
          sections={[ 
            {title: 'A', data: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']},
            {title: 'C', data: ['California', 'Colorado', 'Connecticut']},
            {title: 'D', data: ['Delware']},
            {title: 'F', data: ['Florida']},
            {title: 'G', data: ['Geogria']},
            {title: 'H', data: ['Hawaii']},

          ]} // You can continue with more sections
          returnItem={({item}) => <Text styke={{padding: 10, fontSize: 20, height: 44}}> {item} </Text>}
          renderSectionHeader={({sections}) => <Text style={{paddingTop: 4, paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 4,
          fontSize: 14,
          fontWeight: 'bold',
          backgroundColor: '#9FA8DA', }} >{section.title}</Text>} // set your custom color
          keyExtractor={(item,index) => index}
       
        
        />



    </View>

  
      

  ); // end of return statement
}


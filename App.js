import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View style={{paddingLeft: 10}}>
      <View style={{width: 100, height: 25, backgroundColor: '#0abde3'}} />
      <Text style={{paddingVertical: 5}}>"Halo React</Text>
      <Text style={{paddingVertical: 5}}>Native"</Text>
      <Agung />
      <Gambar />
      <TextInput
        style={{
          borderWidth: 1,
          width: 100,
          height: 30,
          marginVertical: 5,
          borderRadius: 5,
        }}
      />
    </View>
  );
};

const Agung = () => {
  return <Text style={{paddingVertical: 5}}>By: Nalendro Agung W</Text>;
};

const Gambar = () => {
  return (
    <Image
      source={{uri: 'http://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100, marginVertical: 10}}
    />
  );
};

export default App;

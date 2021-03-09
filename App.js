import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View style={{paddingLeft: 10}}>
      <View
        style={{
          borderRadius: 8,
          marginTop: 10,
          width: 130,
          height: 475,
          backgroundColor: '#15d888',
          paddingHorizontal: 14,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.3,
          shadowRadius: 1,
          elevation: 4,
        }}>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: 5,
              color: 'white',
              fontSize: 15,
            }}>
            React-Native
          </Text>
          <Agung />
          <Gambar />
          <Box />
          <TextInput
            style={{
              borderWidth: 1,
              width: 100,
              height: 30,
              marginVertical: 7,
              borderRadius: 5,
            }}
          />
          <Photo />
        </View>
      </View>
    </View>
  );
};

const Agung = () => {
  return (
    <Text style={{paddingVertical: 5, color: 'white', textAlign: 'center'}}>
      Nalendro Agung W
    </Text>
  );
};

// hooks (function componen)
const Gambar = () => {
  return (
    <Image
      source={{uri: 'http://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100, marginVertical: 10, borderRadius: 5}}
    />
  );
};

// class component
class Box extends Component {
  render() {
    return (
      <Text>
        This is Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
        dolorum.
      </Text>
    );
  }
}

class Photo extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'http://placeimg.com/100/100/animals'}}
          style={{width: 100, height: 100, borderRadius: 5}}
        />
        <Text style={{color: 'white'}}>This is dog</Text>
      </View>
    );
  }
}

export default App;

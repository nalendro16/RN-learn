import React, {Component} from 'react';
import {Image, Text, TextInput, View, StyleSheet} from 'react-native';
import laptop from './belilaptop.jpeg';

const App = () => {
  return <StylingReactNativeComponent />;
};

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={style.text}>Style Component</Text>
      <View
        style={{
          width: 340,
          height: 100,
          backgroundColor: '#0abde3',
          borderWidth: 2,
          borderColor: 'yellow',
          marginTop: 10,
          marginLeft: 10,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#F2fddf',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={laptop}
          style={{width: 188, height: 107, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          [SECOND] Lenovo G41-35
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: '#F2994a',
            marginTop: 16,
          }}>
          Rp.8.000.000
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: '300',
            color: 'black',
            marginTop: 12,
          }}>
          Semarang Barat
        </Text>
        <View
          style={{
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            borderRadius: 25,
            marginTop: 20,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '900',
              textAlign: 'center',
              color: 'white',
            }}>
            BELI
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: '#10ac84',
    marginLeft: 10,
    marginTop: 10,
  },
});

const SampleComponent = () => {
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

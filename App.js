import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    let cidade = 'JALES - SP';

    return (
      <View>
        <Text>My App</Text>
        <Text>Primeiro App com React Native</Text>
        <Text style={{ color: 'red' }}>Exemplo de Props</Text>
        <Text style={{ color: '#00FFF', fontSize: 25, margin: 15 }}>Exemplo de Props</Text>
        <Image source={{ uri: 'https://i.imgur.com/mVvh7pG.png' }} style={{ width: 300, height: 300 }} />
        <Text style={{ fontFamily: 'arial', fontStyle: 'italic', fontSize: 35 }}>{cidade}</Text>
      </View>
    );
  }
}

export default App
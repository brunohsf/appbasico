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
        <Imagem largura={420} altura={400} />
        <Text style={{ fontFamily: 'arial', fontStyle: 'italic', fontSize: 35 }}>{cidade}</Text>
      </View>
    );
  }
}

class Imagem extends Component {
  render() {
    let img = 'https://i.imgur.com/mVvh7pG.png';

    return (
      <View>
        <Image source={{ uri: { img } }} style={{ width: this.props.largura, height: this.props.altura }} />
      </View>

    );
  }
}

export default App
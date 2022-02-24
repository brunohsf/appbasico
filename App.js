import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class App extends Component {
  render() {
    let cidade = 'JALES - SP';

    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>appMuseum</Text>
        <View style={styles.body}>
          <Text style={styles.textBody}>MUSEU DE JALES</Text>
        </View>
        <View style={styles.gallery}>
          <Imagem largura={125} altura={133} />
          <Imagem largura={125} altura={133} />
          <Imagem largura={125} altura={133} />
        </View>
      </View>
    );
  }
}

class Imagem extends Component {
  render() {
    let img = 'https://i.imgur.com/mVvh7pG.png';

    return (
      <View>
        <Image source={{ uri: img }} style={{ width: this.props.largura, height: this.props.altura }} />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#00008B',
  },

  body: {
    height: 400,
    backgroundColor: '#ADD8E6',
  },

  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF'

  },

  textBody: {
    fontSize: 40,
    textAlign: 'center',
  },

  gallery: {
    flexDirection: 'row',
    alignContent: 'stretch'
  }



})

export default App
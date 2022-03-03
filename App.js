import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';

import {Picker} from '@react-native-picker/picker';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      profissao: 0,
      profissoes: [
        {key: 1, nome: 'Marcelo Boer', profissao: "Professor"},
        {key: 2, nome: 'Tiago Riberiro', profissao: "Coordenador"},
        {key: 3, nome: 'Bruno', profissao: "Analista de Qualidade"},
      ]
    };
  };

 render(){

  let profissaoPessoa = this.state.profissoes.map( (v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome} />
  } )

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Lista de Profissionais</Text>

      <Picker
      selectedValue={this.state.nome}
      onValueChange={ (itemValue, itemIndex) =>  this.setState({profissao: itemValue}) }
      >
       {profissaoPessoa}
      </Picker>

      <Text style={styles.profissoes}>O profissional escolhido é {this.state.profissoes[this.state.profissao].profissao}</Text>
    </View>
   );
 }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20,
  },
  logo:{
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold'
  },
  profissoes:{
    marginTop: 15,
    fontSize: 25,
    textAlign: 'center'
  }
});
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'; 

class Aula07 extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    };

    this.pegaNome = this.pegaNome.bind(this);
    this.entrar = this.entrar.bind(this);
  }

  pegaNome(texto){
    if(texto.length > 0){
      this.setState({nome: 'Bem vindo: ' + texto});
    }else{
      this.setState({nome: ''})
    }
  }

  entrar(){

    if( this.state.input === '' ){
        alert("Digite algo!")
        return;
    }

    this.setState({nome: 'Bem vindo!' + this.state.input})
  }

  render(){
    return(
      <View style={styles.container}>

        <TextInput
        style={styles.input}
        placeholder="Digite seu nome?"
        underlineColorAndroid="transparent"
        onChangeText={ (texto) => this.setState({input: texto})}
        />

        <Button title='Entrar' onPress={this.entrar} />   

        <Text style={styles.texto}>{this.state.nome}</Text>

      </View>
    );
  }
}

export default Aula07;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25
  }
});


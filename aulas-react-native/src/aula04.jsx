//Estrutura Padrão
import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';

class Aula04 extends Component {
    render(){
        return(
            <View style={styles.area}>
               <Text style={styles.textoPrincipal}>Texto 1</Text>
               <Text style={[styles.alinhaTexto, styles.mudaCorTexto]}>Texto 2</Text>
               <Text style={styles.mudaCorTexto}>Texto 3</Text>
               <Text style={styles.mudaCorTexto}>Texto 4</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    area:{
        marginTop: 40,
        backgroundColor: 'purple'
    },

    textoPrincipal: {
        fontSize: 25,
        color: '#FF0000'
    },

    alinhaTexto:{
        textAlign: 'center'
    },

    mudaCorTexto:{
        color: '#fff'
    }

})

export default Aula04;


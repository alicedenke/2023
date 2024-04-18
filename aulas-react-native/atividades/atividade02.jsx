import react, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

class Atividade02 extends Component {
    render(){

        return(
            <View style= {styles.area}>
            
        <Image 
        source={{uri: 'data:image/jpeg;base64,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'}}
        style={styles.img}
        />    

        <Text style={styles.textoPrincipal}>Só bagunça</Text>
 

    </View>
        );
    }
}

export default Atividade02;


const styles = StyleSheet.create({
    area:{
        marginTop: 40,
        backgroundColor: 'lightblue'
    },

    textoPrincipal: {
        fontSize: 25,
        color: '#FF0000'
    },

    alinhaTexto:{
        textAlign: 'center'
    },

    mudaCorTexto: {
        color: '#fff',

    },

    img: {
        width: 100, height: 100,
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    }

    

})
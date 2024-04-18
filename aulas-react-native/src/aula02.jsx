import React, { Component } from "react";
import { View, Text, Image } from 'react-native';

class Aula02 extends Component {
    render(){   
        return ( 
        <View>
            <Text>COMPONENTES DO REACT</Text>
            <Image
                source={{ uri: 
                    'https://colegiobarao.info/img/Logo_Bola_PNG.png'
                }}
                style={{ with: 50,heigth: 50}}
            />
        </View>
        );   
    }
}
export default Aula02;

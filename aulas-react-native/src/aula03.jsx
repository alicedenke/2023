import React, { Component } from "react";
import { View, Text, Image } from 'react-native';

class Aula03 extends Component {
    render(){   
        let nome= "Alice";
        let idade= "16";
        let altura= "1,54"
        return ( 
             <View>
                <Text style={{fontSize: 90}}>{ nome }</Text>
                <Text>{ idade}</Text>
                <Text>{ altura }</Text>

                <Image
                    source={{uri:'https://blog.cristolibertador.com/2023/wp-content/uploads/2023/03/Toy-Story-4-O-complexo-do-Garfinho..jpg'}}
                    style={{ width: 500, height: 500 }}
                />

                <Image
                source={require('../img/gnomo.jpeg')}
                    style={{ width: 100, height:100 }}
                />

            </View>
        );    
    }
}

export default Aula03;

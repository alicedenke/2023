import React, {Component} from "react";
import {View, Text, Image} from 'react-native';

class Atividade01 extends Component {
    render (){

          let msg ="É preciso praticar para aprende! " ;
        return( 
             <View>
                <Text style={{fontSize: 90}}>{ msg }</Text>
                
                <Image
                    source={{uri:'https://blog.cristolibertador.com/2023/wp-content/uploads/2023/03/Toy-Story-4-O-complexo-do-Garfinho..jpg'}}
                    style={{ width: 500, height: 500 }}
                />

                <Image
                source={require('../img/toystory.png')}
                    style={{ width: 100, height:100 }}
                />

            </View>
        );    
    }
}

export default Aula00;
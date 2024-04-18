//Estrutura Padrão//
import { React, Component } from "react"
import { View, Text, Image} from 'react-native';

class atividade05 extends Component {
    render(){
        return (
            <View style={{ flex: 1, backgroundColor: '#222'}}>
              <View style={{ height: 100, backgroundColor: '#222'}}></View>
             <View style={{ flex: 1, backgroundColor: 'green'}}></View> 
             <View style={{ flex: 1, backgroundColor: 'yellow'}}></View>
              <View style={{ height: 100, backgroundColor: '#222'}}></View>

                
            </View>
        )
    }
}

export default atividade05;

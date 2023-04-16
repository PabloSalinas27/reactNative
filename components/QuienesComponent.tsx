import React, { Component }  from 'react';
import { Text, View, ScrollView } from 'react-native';
import { Card , CardProps} from 'react-native-elements';
//para la parte dea actividades
import  QuienesSomos from './QuienesSomosComponent'
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamListActividades } from '../types';

//para la historia
const Historia = () => {
    const cardProps: CardProps = {
      containerStyle: { margin: 0 },
    };
  
    return (
      <Card {...cardProps}>
        <Card.Title>Sobre nosotros</Card.Title>
        <Text style={{ margin: 20 }}>
          El nacimiento del club de montaña Gaztaroa se remonta a la
          primavera de 1976 cuando jóvenes aficionados a la montaña y
          pertenecientes a un club juvenil decidieron crear la sección
          montañera de dicho club. Fueron unos comienzos duros debido sobre
          todo a la situación política de entonces. Gracias al esfuerzo
          económico de sus socios y socias se logró alquilar una bajera.
          Gaztaroa ya tenía su sede social.{'\n\n'}
          Desde aquí queremos hacer llegar nuestro agradecimiento a todos
          los montañeros y montañeras que alguna vez habéis pasado por el
          club aportando vuestro granito de arena.{'\n\n'}
          Gracias!{'\n'}
        </Text>
      </Card>
    );
  };

///para las actividades
type QuienesProps = {
    navigation: StackNavigationProp<RootStackParamListActividades, 'Actividades'>;
  }


class Quienes  extends Component <QuienesProps> {
    

  render() {

    
    return (
        <ScrollView>
        <Historia />
        <QuienesSomos navigation={this.props.navigation} />
        
    </ScrollView>
      
     
    );
  }
}

export default Quienes;

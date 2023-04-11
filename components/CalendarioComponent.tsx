import React, { Component } from 'react';
import { ListItem, Avatar } from '@rneui/themed';
import { SafeAreaView, FlatList } from 'react-native';
import { EXCURSIONES } from './comun/excursiones';
import { StackNavigationProp  } from '@react-navigation/stack';
import { RootStackParamList } from '../types';


type CalendarioProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Calendario'>;
};

type CalendarioState = {
  excursiones: Excursion[];
};

type Excursion = {
  id: number;
  nombre: string;
  descripcion: string;
};

class Calendario extends Component<CalendarioProps, CalendarioState> {
  constructor(props: CalendarioProps) {
    super(props);
    this.state = {
      excursiones: EXCURSIONES,
    };
  }

  render() {
    const { navigation } = this.props;

    const renderCalendarioItem = ({ item, index }: { item: Excursion; index: number }) => {
      return (
        <ListItem
          key={index}
          onPress={() => navigation.navigate('DetalleExcursion', { excursionId: item.id })}
          bottomDivider
        >
          <Avatar source={require('./imagenes/40Años.png')} />
          <ListItem.Content>
            <ListItem.Title>{item.nombre}</ListItem.Title>
            <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    };

    return (
      <SafeAreaView>
        <FlatList data={this.state.excursiones} renderItem={renderCalendarioItem} keyExtractor={(item) => item.id.toString()} />
      </SafeAreaView>
    );
  }
}

export default Calendario;

import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import { Card, CardProps } from "react-native-elements";
//para la parte dea actividades
import { StackNavigationProp } from "@react-navigation/stack";
import { ACTIVIDADES } from "./comun/actividades";
import { ListItem, Avatar } from "@rneui/themed";
import { SafeAreaView, FlatList } from "react-native";
import { baseUrl } from "./comun/comun";

type Actividad = {
  id: number;
  nombre: string;
  imagen: string;
  destacado: boolean;
  descripcion: string;
};

type ActividadesProps = {
  navigation: StackNavigationProp<any, "Actividades">;
};

type ActividadesState = {
  actividades: Actividad[];
};

class QuienesSomos extends Component<ActividadesProps, ActividadesState> {
  constructor(props: ActividadesProps) {
    super(props);
    this.state = {
      actividades: ACTIVIDADES,
    };
  }
  render() {
    const cardProps: CardProps = {
      containerStyle: { margin: 0 },
    };
    const { navigation } = this.props;
    const renderActividadesItem = ({
      item,
      index,
    }: {
      item: Actividad;
      index: number;
    }) => {
      return (
        <ListItem key={index} bottomDivider>
          <Avatar source={{uri: baseUrl + item.imagen}} />
          <ListItem.Content>
            <ListItem.Title>{item.nombre}</ListItem.Title>
            <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      );
    };

    return (
      <Card {...cardProps}>
        <Card.Title>Actividades</Card.Title>
        <SafeAreaView>
          <FlatList
            data={this.state.actividades}
            renderItem={renderActividadesItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </SafeAreaView>
      </Card>
    );
  }
}

export default QuienesSomos;

import React, { Component } from "react";
import { Card, CardProps } from "react-native-elements";
//para la parte dea actividades
import { StackNavigationProp } from "@react-navigation/stack";
import { ListItem, Avatar } from "@rneui/themed";
import { SafeAreaView, FlatList } from "react-native";
import { baseUrl } from "./comun/comun";
import { useAppSelector } from "../redux/hooks";

export type Actividad = {
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

export default function QuienesSomos({ navigation }: ActividadesProps) {
  const cardProps: CardProps = {
    containerStyle: { margin: 0 },
  };
  const actividades = useAppSelector((state) => state.actividades.actividades);
  const renderActividadesItem = ({
    item,
    index,
  }: {
    item: Actividad;
    index: number;
  }) => {
    return (
      <ListItem key={index} bottomDivider>
        <Avatar source={{ uri: baseUrl + item.imagen }} />
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
          data={actividades}
          renderItem={renderActividadesItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
        />
      </SafeAreaView>
    </Card>
  );
}

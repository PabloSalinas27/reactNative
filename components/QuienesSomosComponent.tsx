import React, { Component } from "react";
import { Card, CardProps } from "react-native-elements";
//para la parte dea actividades
import { StackNavigationProp } from "@react-navigation/stack";
import { ListItem, Avatar } from "@rneui/themed";
import { SafeAreaView, FlatList } from "react-native";
import { baseUrl } from "./comun/comun";
import { useAppSelector } from "../redux/hooks";
import {IndicadorActividad } from "./IndicadorActividadComponent"
import { View, Text, ScrollView } from "react-native";
import Quienes from "./QuienesComponent"

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
  const actividades = useAppSelector((state) => state.actividades);
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
  
  if (actividades.isLoading){
    return(
      <ScrollView>
          <Card {...cardProps}>
            <Card.Title>"Actividades y recursos"</Card.Title>
            <Card.Divider/>
            <IndicadorActividad />
          </Card>
      </ScrollView>
    )
    
  }
  else if (actividades.errMess){
    return(
      <View>
        <Text>{actividades.errMess}</Text>
      </View>
    );

  }
  else{
    return (
      <Card {...cardProps}>
        <Card.Title>Actividades</Card.Title>
        <SafeAreaView>
          <FlatList
            data={actividades.actividades}
            renderItem={renderActividadesItem}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
          />
        </SafeAreaView>
      </Card>
    );

  }
  
}

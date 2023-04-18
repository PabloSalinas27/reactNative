import React from "react";
import { Text, ScrollView, View } from "react-native";
import { Card } from "@rneui/themed";
import { EXCURSIONES } from "./comun/excursiones";
import { CABECERAS } from "./comun/cabeceras";
import { ACTIVIDADES } from "./comun/actividades";
import { baseUrl } from "./comun/comun";

interface Item {
    id: number;
    nombre: string;
    imagen: string;
    destacado: boolean;
    descripcion: string;
}

function RenderItem({ item }: { item: Item }) {
  if (item) {
    return (
      <Card>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Divider />
        <Card.Image source={{uri: baseUrl + item.imagen}}></Card.Image>
        <Text style={{ margin: 20 }}>{item.descripcion}</Text>
      </Card>
    );
  } else {
    return <View />;
  }
}

export default function Home() {
  return (
    <ScrollView>
      <RenderItem
        item={CABECERAS.filter((cabecera) => cabecera.destacado)[0]}
      />
      <RenderItem
        item={EXCURSIONES.filter((excursion) => excursion.destacado)[0]}
      />
      <RenderItem
        item={ACTIVIDADES.filter((actividad) => actividad.destacado)[0]}
      />
    </ScrollView>
  );
}

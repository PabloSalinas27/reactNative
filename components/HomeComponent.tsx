import React from "react";
import { Text, ScrollView, View } from "react-native";
import { Card } from "@rneui/themed";
import { baseUrl } from "./comun/comun";
import { useAppSelector } from "../redux/hooks";

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
        <Card.Image source={{ uri: baseUrl + item.imagen }}></Card.Image>
        <Text style={{ margin: 20 }}>{item.descripcion}</Text>
      </Card>
    );
  } else {
    return <View />;
  }
}

export default function Home() {
  const cabeceras = useAppSelector((state) => state.cabeceras.cabeceras);
  const excursiones = useAppSelector((state) => state.excursiones.excursiones);
  const actividades = useAppSelector((state) => state.actividades.actividades);
  return (
    <ScrollView>
      <RenderItem
        item={cabeceras.filter((cabecera) => cabecera.destacado)[0]}
      />
      <RenderItem
        item={excursiones.filter((excursion) => excursion.destacado)[0]}
      />
      <RenderItem
        item={actividades.filter((actividad) => actividad.destacado)[0]}
      />
    </ScrollView>
  );
}

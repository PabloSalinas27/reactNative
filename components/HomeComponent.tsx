import { Text, ScrollView, View } from "react-native";
import { Card } from "@rneui/themed";
import { baseUrl } from "./comun/comun";
import { useAppSelector } from "../redux/hooks";
import {IndicadorActividad } from "./IndicadorActividadComponent"

interface Item {
  id: number;
  nombre: string;
  imagen: string;
  destacado: boolean;
  descripcion: string;
}

function RenderItem({ item, isLoading, errMess }: { item: Item, isLoading?: boolean, errMess?: string }) {
  if (item) {
    if (isLoading) {
      return(
        <IndicadorActividad />
      );
    }
    else if (errMess) {
      console.log("hay error")
      return(
        <View>
          <Text>{errMess}</Text>
        </View>
      );
    }
    
    else { 
      return (
        <Card>
          <Card.Title>{item.nombre}</Card.Title>
          <Card.Divider />
          <Card.Image source={{ uri: baseUrl + item.imagen }}></Card.Image>
          <Text style={{ margin: 20 }}>{item.descripcion}</Text>
        </Card>
      );
    } 
  }else {
    return <IndicadorActividad />;
  }
}

export default function Home() {
  
  const cabeceras = useAppSelector((state) => state.cabeceras);
  const excursiones = useAppSelector((state) => state.excursiones);
  const actividades = useAppSelector((state) => state.actividades);

  
  return (
    <ScrollView>
      <RenderItem
        item={cabeceras.cabeceras.filter((cabecera) => cabecera.destacado)[0]}
        isLoading = {cabeceras.isLoading}
        errMess = {cabeceras.errMess} 
      />
      
      <RenderItem item={excursiones.excursiones.filter((excursion) => excursion.destacado)[0]}
        isLoading = {excursiones.isLoading}
        errMess = {excursiones.errMess} 
      />

      <RenderItem
        item={actividades.actividades.filter((actividad) => actividad.destacado)[0]}
        isLoading = {actividades.isLoading}
        errMess = {actividades.errMess} 
      />
    </ScrollView>
  );
}

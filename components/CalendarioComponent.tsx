import React from "react";
import { ListItem, Avatar } from "@rneui/themed";
import { SafeAreaView, FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { baseUrl } from "./comun/comun";
import { useAppSelector } from "../redux/hooks";

type CalendarioProps = {
  navigation: StackNavigationProp<RootStackParamList, "Calendario">;
};

type Excursion = {
  id: number;
  nombre: string;
  imagen: string;
  destacado: boolean;
  descripcion: string;
};

export default function Calendario({ navigation }: CalendarioProps) {
  const excursiones = useAppSelector((state) => state.excursiones.excursiones);
  const renderCalendarioItem = ({
    item,
    index,
  }: {
    item: Excursion;
    index: number;
  }) => {
    return (
      <ListItem
        key={index}
        onPress={() =>
          navigation.navigate("DetalleExcursion", { excursionId: item.id })
        }
        bottomDivider
      >
        <Avatar source={{ uri: baseUrl + item.imagen }} />
        <ListItem.Content>
          <ListItem.Title>{item.nombre}</ListItem.Title>
          <ListItem.Subtitle>
            {baseUrl + item.imagen + item.descripcion}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };
  return (
    <SafeAreaView>
      <FlatList
        data={excursiones}
        renderItem={renderCalendarioItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

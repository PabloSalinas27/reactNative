import React from "react";
import { ListItem, Avatar } from "@rneui/themed";
import { SafeAreaView, FlatList } from "react-native";
import { EXCURSIONES } from "./excursiones";

type Props = {
    excursiones: typeof EXCURSIONES
};
export default function Calendario({excursiones}: Props) {
  const renderCalendarioItem = ({ item, index }) => {
    return (
      <ListItem key={index} bottomDivider>
        <Avatar source={require("./imagenes/40Años.png")} />
        <ListItem.Content>
          <ListItem.Title>{item.nombre}</ListItem.Title>
          <ListItem.Subtitle>{item.descripcion}</ListItem.Subtitle>
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

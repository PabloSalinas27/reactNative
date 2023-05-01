import { ListItem, Avatar } from "@rneui/themed";
import { SafeAreaView, FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { baseUrl } from "./comun/comun";
import { useAppSelector } from "../redux/hooks";
import { Text, View } from "react-native";
import {IndicadorActividad } from "./IndicadorActividadComponent"

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
  const excursiones = useAppSelector((state) => state.excursiones);
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
  if (excursiones){
      if(excursiones.isLoading){
        return(
          <IndicadorActividad />
        );
      }
      else if (excursiones.errMess){
        return(
          <View>
            <Text>{excursiones.errMess}</Text>
          </View>
        );

      }
      else{
        return (
          <SafeAreaView>
            <FlatList
              data={excursiones.excursiones}
              renderItem={renderCalendarioItem}
              keyExtractor={(item) => item.id.toString()}
            />
          </SafeAreaView>
        );

      }

  }else{

  }
  
}

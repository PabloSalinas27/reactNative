import Constants from "expo-constants";
import Calendario from "./CalendarioComponent";
import DetalleExcursion from "./DetalleExcursionComponent";
import { View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//practica 5
import Home from "./HomeComponent";
import { createDrawerNavigator } from "@react-navigation/drawer";

//practica 6
import Contacto from "./ContactoComponent";
import Quienes from "./QuienesComponent";
//practica 7
import { StyleSheet, Image, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Icon } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { colorGaztaroaClaro, colorGaztaroaOscuro } from "./comun/comun";
import { useAppDispatch } from "../redux/hooks";
import {
  fetchActividades,
  fetchCabeceras,
  fetchComentarios,
  fetchExcursiones,
} from "../redux/ActionCreators";
import { useEffect } from "react";

const Stack = createNativeStackNavigator(); //practica 4
const Drawer = createDrawerNavigator(); //practica 5
const styles = StyleSheet.create({
  //practica 7
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: colorGaztaroaOscuro,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60,
  },
});

function CustomDrawerContent(props) {
  //practica 7
  return (
    <DrawerContentScrollView {...props}>
      <SafeAreaView style={styles.container} edges={["top"]}>
        <View style={styles.drawerHeader}>
          <View style={{ flex: 1 }}>
            <Image
              source={require("./imagenes/logo.png")}
              style={styles.drawerImage}
            />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={styles.drawerHeaderText}> Gaztaroa</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

function CalendarioNavegador() {
  return (
    <Stack.Navigator
      initialRouteName="Calendario"
      //headerMode="float"
      screenOptions={{
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <Stack.Screen
        name="Calendario"
        component={Calendario}
        options={{
          title: "Calendario Gaztaroa",
        }}
      />
      <Stack.Screen
        name="DetalleExcursion"
        component={DetalleExcursion}
        options={{
          title: "Detalle Excursión",
        }}
      />
    </Stack.Navigator>
  );
}

////////////función practica 5
function HomeNavegador() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        //headerMode: 'screen',
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <Stack.Screen
        name="Etxea"
        component={Home}
        options={{
          title: "Campo Base",
        }}
      />
    </Stack.Navigator>
  );
}

////practica 6
function ContactoNavegador() {
  return (
    <Stack.Navigator
      initialRouteName="Contacto"
      screenOptions={{
        //headerMode: 'screen',
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <Stack.Screen
        name="Etxea"
        component={Contacto}
        options={{
          title: "Contacto",
        }}
      />
    </Stack.Navigator>
  );
}

function QuienesNavegador() {
  return (
    <Stack.Navigator
      initialRouteName="Contacto"
      screenOptions={{
        //headerMode: 'screen',
        headerTintColor: "#fff",
        headerStyle: { backgroundColor: colorGaztaroaOscuro },
        headerTitleStyle: { color: "#fff" },
      }}
    >
      <Stack.Screen
        name="Etxea"
        component={Quienes}
        options={{
          title: "Quienes somos",
        }}
      />
    </Stack.Navigator>
  );
}
function DrawerNavegador() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: colorGaztaroaClaro,
        },
      }}
    >
      <Drawer.Screen
        name="Campo base"
        component={HomeNavegador}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="home" type="font-awesome" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Quienes somos"
        component={QuienesNavegador}
        options={{
          drawerIcon: ({ color }) => (
            <Icon
              name="info-circle"
              type="font-awesome"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Calendario " // El espacio es para que no se queje de que hay dos con el mismo nombre
        component={CalendarioNavegador}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="calendar" type="font-awesome" size={24} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Contacto"
        component={ContactoNavegador}
        options={{
          drawerIcon: ({ color }) => (
            <Icon
              name="address-card"
              type="font-awesome"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function CampoBase() {
  useEffect(() => {
    useAppDispatch(fetchExcursiones);
    useAppDispatch(fetchCabeceras);
    useAppDispatch(fetchActividades);
    useAppDispatch(fetchComentarios);
  }, [useAppDispatch]);

  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <DrawerNavegador />
      </View>
    </NavigationContainer>
  );
}

import { useEffect, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Modal,
  StyleSheet,
  Pressable,
  TextInput,
} from "react-native";
import { Card, CardProps } from "react-native-elements";
import { Rating } from "react-native-ratings";
import { Icon } from "@rneui/themed";
import { baseUrl } from "./comun/comun";
import { useAppSelector } from "../redux/hooks";
import {
  postFavorito,
  postComentario,
} from "../redux/ActionCreators";
import { useAppDispatch } from "../redux/hooks";

export type Excursion = {
  id: number;
  nombre: string;
  imagen: string;
  destacado: boolean;
  descripcion: string;
};

export type Comentario = {
  //practica7
  id: number;
  excursionId: number;
  valoracion: number;
  comentario: string;
  autor: string;
  dia: string;
};

type RenderExcursionProps = {
  excursion: Excursion;
  favorita: boolean;
  onPress: () => void;
};

function RenderComentario(props) {
  const comentarios = props.comentarios;
  const cardProps: CardProps = {
    containerStyle: { margin: 0 },
  };

  return (
    <Card {...cardProps}>
      <Card.Title>Comentarios</Card.Title>
      <Card.Divider />
      {comentarios.map((comentario) => (
        <Text style={{ margin: 20 }} key={comentario.id}>
          {comentario.comentario} {"\n"} -- {comentario.autor},{comentario.dia}
          {"\n\n"}
        </Text>
      ))}
    </Card>
  );
}
function RenderExcursion({
  excursion,
  favorita,
  onPress,
}: RenderExcursionProps) {
  const cardProps: CardProps = {
    containerStyle: { margin: 0 },
  };
  const [modal, setModal] = useState(false);
  const [rating, setRating] = useState(3);
  const [autor, setAutor] = useState("");
  const [comentario, setComentario] = useState("");
  const { comentarios } = useAppSelector((state) => state.comentarios);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Rating
              showRating={true}
              fractions={0}
              startingValue={3}
              ratingTextColor="teal"
              onFinishRating={setRating}
            />
            <TextInput
              value={autor}
              onChangeText={setAutor}
              placeholder="Autor"
              style={{ padding: 10,margin: 10, marginTop: 40, borderWidth: 1, borderColor: "gray" , minWidth: 250, maxWidth: 250}}
            />
            <TextInput
              value={comentario}
              onChangeText={setComentario}
              placeholder=" Comentario"
              style={{ padding: 10, margin: 10, borderWidth: 1, borderColor: "gray" , minWidth: 250, maxWidth: 250}}
            />
            <Pressable
              style={[styles.button, { margin: 10, backgroundColor: "green", minWidth: 100}]}
              onPress={() => {
                setModal(false);
                useAppDispatch(
                  postComentario({
                    excursionId: excursion.id,
                    valoracion: rating,
                    autor: autor ? autor : "Anónimo",
                    comentario: comentario ? comentario : "Sin comentario",
                  })
                );
                setModal(false);
                setAutor("");
                setComentario("");
                setRating(3);
              }}
            >
              <Text style={styles.textStyle}>Enviar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, { margin: 10, backgroundColor: "tomato", minWidth: 100 }]}
              onPress={() => {
                setModal(false);
                setAutor("");
                setComentario("");
                setRating(3);
              }}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Card {...cardProps}>
        <Card.Title>{excursion.nombre}</Card.Title>
        <Card.Image source={{ uri: baseUrl + excursion.imagen }}></Card.Image>
        <Text style={{ margin: 20 }}>{excursion.descripcion}</Text>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Icon
            raised
            reverse
            name={favorita ? "heart" : "heart-o"}
            type="font-awesome"
            color="#f50"
            onPress={() =>
              favorita
                ? console.log(
                    "La excursión ya se encuentra entre las favoritas"
                  )
                : onPress()
            }
          />
          <Icon
            raised
            reverse
            name="pencil"
            type="font-awesome"
            color="blue"
            onPress={() => setModal(true)}
          />
        </View>
      </Card>
    </View>
  );
}

type DetalleExcursionProps = {
  route: {
    params: {
      excursionId: number;
    };
  };
};

export default function DetalleExcursion(props: DetalleExcursionProps) {
  const excursiones = useAppSelector((state) => state.excursiones.excursiones);
  const comentarios = useAppSelector((state) => state.comentarios.comentarios);
  const favoritos = useAppSelector((state) => state.favoritos.favoritos);
  const { excursionId } = props.route.params;

  return (
    <ScrollView>
      <RenderExcursion
        excursion={excursiones[excursionId]}
        favorita={favoritos.some((el) => el === excursionId)}
        onPress={() => {
          useAppDispatch(postFavorito(excursionId));
        }}
      />

      <RenderComentario
        comentarios={comentarios.filter(
          (comentario) => comentario.excursionId === excursionId
        )}
      />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

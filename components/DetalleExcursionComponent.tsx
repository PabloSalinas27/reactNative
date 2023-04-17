import React, { Component }  from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import { Card , CardProps} from 'react-native-elements';
import { EXCURSIONES } from './comun/excursiones';
import { COMENTARIOS } from './comun/comentarios';
import { Icon } from '@rneui/themed';


interface Excursion {
    id: number;
    nombre: string;
    imagen: string;
    destacado: boolean;
    descripcion: string;
}

interface Comentario { //practica7
  id: number;
  excursionId : number;
  valoracion : number;
  comentario: string;
  autor: string;
  dia: string;
}



interface RenderExcursionProps {
  excursion: Excursion | null;
  favorita: boolean;
  onPress: () => void;
}


function RenderComentario(props) {
  const comentarios = props.comentarios;
  const cardProps: CardProps = {
    containerStyle: { margin: 0 },
  };
  
  return (
  <Card{...cardProps}>
    <Card.Title>Comentarios</Card.Title>
    <Card.Divider/>
    {comentarios.map((comentario) => (
      <Text style={{ margin: 20 }} key={comentario.id}>
        {comentario.comentario} {'\n'} -- {comentario.autor},{comentario.dia}
        {'\n\n'}
      </Text>
    ))}
    </Card>
  );
 }
function RenderExcursion(props: RenderExcursionProps) {
  const { excursion } = props;
  const cardProps: CardProps = {
    containerStyle: { margin: 0 },
  };
  if (excursion !== null) {
    return (
      <View>
        <Card {...cardProps}>
            <Card.Title>{excursion.nombre}</Card.Title>
            <Card.Image source={require('./imagenes/40Años.png')}></Card.Image>
            <Text style={{ margin: 20 }}>{excursion.descripcion}</Text>
        
        </Card>
        <Icon
          raised
          reverse
          name={ props.favorita ? 'heart' : 'heart-o'}
          type='font-awesome'
          color='#f50'
           onPress={() => props.favorita ? console.log('La excursión ya se encuentra entre las favoritas') : props.onPress()}
        />
       </View> 
    );
  } else {
    return <View />;
  }
}

interface DetalleExcursionProps {
  route: {
    params: {
      excursionId: number;
    };
  };
}

interface DetalleState {
  excursiones: Excursion[];
  comentarios: Comentario[];
  favoritos: number[];
  
}



class DetalleExcursion extends Component<   DetalleExcursionProps,  DetalleState > {
  constructor(props: DetalleExcursionProps) {
    super(props);
    this.state = {
      excursiones: EXCURSIONES,
      comentarios: COMENTARIOS,
      favoritos:[]
      

    };
  }
  marcarFavorito(excursionId: number): void {
    this.setState({favoritos: this.state.favoritos.concat(excursionId)});
  }
   
 

  render() {
    const { excursionId } = this.props.route.params;
    return (
      <ScrollView>
        <RenderExcursion
          excursion = {this.state.excursiones[+excursionId]}
          favorita = {this.state.favoritos.some(el => el === excursionId)}
          onPress={() => this.marcarFavorito(excursionId)}
        />
       

        <RenderComentario
          comentarios={this.state.comentarios.filter((comentario) => comentario.excursionId === excursionId)}
        />
      </ScrollView>
    );
  }
}

export default DetalleExcursion;

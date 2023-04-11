import React, { Component }  from 'react';
import { Text, View } from 'react-native';
import { Card , CardProps} from 'react-native-elements';
import { EXCURSIONES } from './comun/excursiones';


interface Excursion {
    id: number;
    nombre: string;
    imagen: string;
    destacado: boolean;
    descripcion: string;
}

interface RenderExcursionProps {
  excursion: Excursion | null;
}

interface CustomCardProps extends CardProps {
}

function RenderExcursion(props: RenderExcursionProps) {
  const { excursion } = props;
  const cardProps: CustomCardProps = {
    containerStyle: { margin: 0 },  
    };
  if (excursion !== null) {
    return (
        
        <Card {...cardProps}>
            <Card.Title>{excursion.nombre}</Card.Title>
            <Card.Image source={require('./imagenes/40Años.png')}></Card.Image>
            <Text style={{ margin: 20 }}>{excursion.descripcion}</Text>
        
        </Card>
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

interface DetalleExcursionState {
  excursiones: Excursion[];
}

class DetalleExcursion extends Component<   DetalleExcursionProps,  DetalleExcursionState > {
  constructor(props: DetalleExcursionProps) {
    super(props);
    this.state = {
      excursiones: EXCURSIONES,
    };
  }

  render() {
    const { excursionId } = this.props.route.params;
    return (
      <RenderExcursion
        excursion={this.state.excursiones[excursionId]}
      />
    );
  }
}

export default DetalleExcursion;

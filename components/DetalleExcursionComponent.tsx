import React from 'react';
import { Text, View } from 'react-native';
import { Card , CardProps} from 'react-native-elements';



interface Excursion {
    id: number;
    nombre: string;
    imagen: string;
    destacado: boolean;
    descripcion: string;
}

interface DetalleExcursionProps {
    excursion: Excursion | null;
}

interface CustomCardProps extends CardProps {
    //title?: string;
    //image?: { uri: string },
}

function RenderExcursion(props: DetalleExcursionProps) {
    const { excursion } = props;
    
    if (excursion != null) {
        const cardProps: CustomCardProps = {
            containerStyle: { margin: 0 },
            //title: excursion.nombre,
            //image:{ uri: './imagenes/40Años.png'}
                
              
        };
        return(
            <Card {...cardProps}>
                <Card.Title>{excursion.nombre}</Card.Title>
                <Card.Image source={require('./imagenes/40Años.png')}></Card.Image>
                <Text style={{ margin: 20 }}>{excursion.descripcion}</Text>
                
            </Card>
        );
    }
    else {
        return(<View></View>);
    }
}

function DetalleExcursion(props) {
    return(<RenderExcursion excursion={props.excursion} />);
}
export default DetalleExcursion;
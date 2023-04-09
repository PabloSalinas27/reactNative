import React, { Component } from 'react';
import Calendario from './CalendarioComponent';
import { EXCURSIONES } from './excursiones';
import DetalleExcursion from './DetalleExcursionComponent';
import { View } from 'react-native';

interface Excursion {
    id: number;
    nombre: string;
    imagen: string;
    destacado: boolean;
    descripcion: string;
  }
interface CampobaseState {
    excursiones: Excursion[];
    seleccionExcursion: number | null;
}

class Campobase extends Component<{}, CampobaseState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            excursiones: EXCURSIONES,
            seleccionExcursion: null
        };
    }

    onSeleccionExcursion = (excursionId: number) => {
        this.setState({ seleccionExcursion: excursionId });
    }

    render() {
        const excursionSeleccionada = this.state.excursiones.find((excursion) => excursion.id === this.state.seleccionExcursion);

        return (
            <View>
                {excursionSeleccionada && <DetalleExcursion excursion={excursionSeleccionada} />}
                <Calendario excursiones={this.state.excursiones} onPress={this.onSeleccionExcursion} />
            </View>
        );
    }
}

export default Campobase;
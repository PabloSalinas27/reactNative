import { useState } from "react";
import { EXCURSIONES } from "./excursiones";
import Calendario from "./CalendarioComponent";

export default function Campobase() { 
    const [excursiones, setExcursiones] = useState(EXCURSIONES);
    return (
        <Calendario excursiones={EXCURSIONES}/>
    );
    }
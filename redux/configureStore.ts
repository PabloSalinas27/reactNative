import { configureStore } from "@reduxjs/toolkit";
import { excursiones } from "./excursiones";
import { comentarios } from "./comentarios";
import { cabeceras } from "./cabeceras";
import { actividades } from "./actividades";
import {favoritos} from "./favoritos"

export const store = configureStore({
  reducer: {
    excursiones: excursiones,
    comentarios: comentarios,
    cabeceras: cabeceras,
    actividades: actividades,
    favoritos: favoritos,
  },
});


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
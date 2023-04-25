import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { excursiones } from "./excursiones";
import { comentarios } from "./comentarios";
import { cabeceras } from "./cabeceras";
import { actividades } from "./actividades";

export const store = configureStore({
  reducer: {
    excursiones: excursiones,
    comentarios: comentarios,
    cabeceras: cabeceras,
    actividades: actividades,
  },
  middleware: [thunk],
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;

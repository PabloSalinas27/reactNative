import { createAction, createReducer } from "@reduxjs/toolkit";
import { Comentario } from "../components/DetalleExcursionComponent";
import { StateBase } from "./ActionTypes";

export const addComentarios = createAction<Comentario[]>("ADD_COMENTARIOS");
export const addComentario = createAction<Omit<Comentario, "id">>("ADD_COMENTARIO");
export const comentariosFailed = createAction<string>("COMENTARIO_FAILED");

const initialState = {
  ...StateBase,
  comentarios: [] as Comentario[],
};

export const comentarios = createReducer(initialState, (builder) => {
  builder
    .addCase(addComentarios, (state, action) => {
      return { ...state, errMess: null, comentarios: action.payload };
    })
    .addCase(comentariosFailed, (state, action) => {
      state.errMess = action.payload 
    })
    .addCase(addComentario, (state, action) => {
      state.comentarios.push({...action.payload, id: Math.max(...state.comentarios.map((c) => c.id)) + 1})
    });
});

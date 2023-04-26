import { createAction, createReducer } from "@reduxjs/toolkit";
import { Comentario } from "../components/DetalleExcursionComponent";
import { StateBase } from "./ActionTypes";

export const addComentarios = createAction<Comentario[]>("ADD_COMENTARIOS");
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
      return { ...state, errMess: action.payload };
    });
});

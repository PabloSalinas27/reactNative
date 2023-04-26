import { createAction, createReducer } from "@reduxjs/toolkit";
import { Cabecera } from "../components/comun/cabeceras";
import { StateBase } from "./ActionTypes";

export const cabecerasLoading = createAction<Cabecera[]>("CABECERA_LOADING");
export const addCabeceras = createAction<Cabecera[]>("ADD_CABECERA");
export const cabecerasFailed = createAction<string>("CABECERA_FAILED");

const initialState = {
  ...StateBase,
  cabeceras: [] as Cabecera[],
};

export const cabeceras = createReducer(initialState, (builder) => {
  builder
    .addCase(addCabeceras, (state, action) => {
      return {
        ...state,
        isLoading: false,
        errMess: null,
        cabeceras: action.payload,
      };
    })
    .addCase(cabecerasLoading, (state) => {
      return { ...state, isLoading: true, errMess: null, cabeceras: [] };
    })
    .addCase(cabecerasFailed, (state, action) => {
      return { ...state, isLoading: false, errMess: action.payload };
    });
});

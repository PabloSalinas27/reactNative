import { createAction, createReducer } from "@reduxjs/toolkit";
import { Excursion } from "../components/DetalleExcursionComponent";
import { StateBase } from "./ActionTypes";

export const excursionesLoading = createAction("EXCURSIONES_LOADING");
export const addExcursiones = createAction<Excursion[]>("ADD_EXCURSIONES");
export const excursionesFailed = createAction<string>("EXCURSIONES_FAILED");

//Esto...
const initialState = {
  ...StateBase,
  excursiones: [] as Excursion[],
};

export const excursiones = createReducer(initialState, (builder) => {
  builder
    .addCase(addExcursiones, (state, action) => {
      return {
        ...state,
        isLoading: false,
        errMess: null,
        excursiones: action.payload,
      };
    })
    .addCase(excursionesLoading, (state) => {
      return { ...state, isLoading: true, errMess: null, excursiones: [] };
    })
    .addCase(excursionesFailed, (state, action) => {
      return { ...state, isLoading: false, errMess: action.payload };
    });
});

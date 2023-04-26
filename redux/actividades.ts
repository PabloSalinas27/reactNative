import { createAction, createReducer } from "@reduxjs/toolkit";
import { Actividad } from "../components/QuienesSomosComponent";
import { StateBase } from "./ActionTypes";

const initialState = {
  ...StateBase,
  actividades: [] as Actividad[],
};

export const actividadesLoading = createAction<Actividad[]>(
  "ACTIVIDADES_LOADING"
);
export const addActividades = createAction<Actividad[]>("ADD_ACTIVIDADES");
export const actividadesFailed = createAction<string>("ACTIVIDADES_FAILED");

export const actividades = createReducer(initialState, (builder) => {
  builder
    .addCase(addActividades, (state, action) => {
      return {
        ...state,
        isLoading: false,
        errMess: null,
        actividades: action.payload,
      };
    })
    .addCase(actividadesLoading, (state) => {
      return { ...state, isLoading: true, errMess: null, actividades: [] };
    })
    .addCase(actividadesFailed, (state, action) => {
      return { ...state, isLoading: false, errMess: action.payload };
    });
});

// export const actividades = (
//   state = { isLoading: true, errMess: null, actividades: [] },
//   action
// ) => {
//   switch (action.type) {
//     case ActionTypes.ADD_ACTIVIDADES:
//       return {
//         ...state,
//         isLoading: false,
//         errMess: null,
//         actividades: action.payload,
//       };

//     case ActionTypes.ACTIVIDADES_LOADING:
//       return { ...state, isLoading: true, errMess: null, actividades: [] };

//     case ActionTypes.ACTIVIDADES_FAILED:
//       return { ...state, isLoading: false, errMess: action.payload };

//     default:
//       return state;
//   }
// };

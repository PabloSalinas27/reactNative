import { createAction, createReducer } from "@reduxjs/toolkit";

import { StateBase } from "./ActionTypes";


export const addfavorito = createAction<number>("ADD_FAVORITO");
export const postfavorito = createAction<number>("POST_FAVORITO");

const initialState = {
    favoritos: [] as number[],
  };

  export const favoritos = createReducer(initialState, (builder) => {
    builder
      .addCase(addfavorito, (state, action) => {
 
        return {
          ...state,
          favoritos:  [...state.favoritos, action.payload],
        };
      })
      
  });
  
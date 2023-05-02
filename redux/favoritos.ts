import { createAction, createReducer } from "@reduxjs/toolkit";

import { StateBase } from "./ActionTypes";


export const addFavorito = createAction<number>("ADD_FAVORITO");
export const postfavorito = createAction<number>("POST_FAVORITO");

const initialState = {
    favoritos: [] as number[],
  };

  export const favoritos = createReducer(initialState, (builder) => {
    builder
      .addCase(addFavorito, (state, action) => {
 
        return {
          ...state,
          favoritos:  [...state.favoritos, action.payload],
        };
      })
      
  });
  
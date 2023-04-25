import { Comentario } from '../components/DetalleExcursionComponent';
import * as ActionTypes from './ActionTypes';

type State = { comentarios: Comentario[]; errMess: string | null; };

export const comentarios = (state: State = { errMess: null, comentarios:[]}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMENTARIOS:
      return {...state, errMess: null, comentarios: action.payload};

    case ActionTypes.COMENTARIOS_FAILED:
      return {...state, errMess: action.payload};

    default:
      return state;
  }
};
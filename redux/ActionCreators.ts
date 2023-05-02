import { baseUrl } from "../components/comun/comun";
import { AppDispatch } from "./configureStore";
import {
  addComentarios,
  addComentario,
  comentariosFailed,
} from "./comentarios";
import {
  addExcursiones,
  excursionesFailed,
  excursionesLoading,
} from "./excursiones";
import { addCabeceras, cabecerasFailed, cabecerasLoading } from "./cabeceras";
import {
  actividadesFailed,
  actividadesLoading,
  addActividades,
} from "./actividades";

import { addFavorito } from "./favoritos";
import { Comentario } from "../components/DetalleExcursionComponent";

type ApiError = Error & { response?: Response };

export const fetchComentarios = (dispatch: AppDispatch) => {
  return fetch(baseUrl + "comentarios")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error: ApiError = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((comentarios) => dispatch(addComentarios(comentarios)))
    .catch((error) => dispatch(comentariosFailed(error.message)));
};

export const fetchExcursiones = (dispatch: AppDispatch) => {
  dispatch(excursionesLoading());

  return fetch(baseUrl + "excursiones")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error: ApiError = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((excursiones) => dispatch(addExcursiones(excursiones)))
    .catch((error) => dispatch(excursionesFailed(error.message)));
};

export const fetchCabeceras = (dispatch: AppDispatch, getstate) => {
  dispatch(cabecerasLoading());

  return fetch(baseUrl + "cabeceras")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error: ApiError = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((cabeceras) => dispatch(addCabeceras(cabeceras)))
    .catch((error) => dispatch(cabecerasFailed(error.message)));
};

export const fetchActividades = (dispatch: AppDispatch) => {
  dispatch(actividadesLoading());

  return fetch(baseUrl + "actividades")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error: ApiError = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((actividades) => dispatch(addActividades(actividades)))
    .catch((error) => dispatch(actividadesFailed(error.message)));
};

export const postFavorito = (excursionId) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(addFavorito(excursionId));
  }, 2000);
};
export const postComentario =
  (comentario: Omit<Comentario, "dia" | "id">) => (dispatch: AppDispatch) => {
    setTimeout(() => {
      dispatch(addComentario({ ...comentario, dia: new Date().toISOString() })
      );
    }, 2000);
  };

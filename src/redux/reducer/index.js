import { GET_CATS, FILTER_CATS_BY_SEX, ORDER_CATS } from "../actions/type";

const initialState = {
  cats: [],
  allCats: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATS:
      return {
        ...state,
        cats: action.payload,
        allCats: action.payload,
      };
    case FILTER_CATS_BY_SEX:
      const allCats = state.allCats;
      const sexFiltered =
        action.payload === "All"
          ? allCats
          : allCats.filter((el) => el.sexo === action.payload);
      return {
        ...state,
        cats: sexFiltered,
      };
    case ORDER_CATS:
      const ordered = state.cats;
      action.payload === "Asc" &&
        ordered.sort((a, b) => {
          return a.nombre.localeCompare(b.nombre);
        });
      action.payload === "Desc" &&
        ordered.sort((a, b) => {
          return b.nombre.localeCompare(a.nombre);
        });
      action.payload === "Mayor" &&
        ordered.sort((a, b) => {
          return b.edad - a.edad;
        });
      action.payload === "Menor" &&
        ordered.sort((a, b) => {
          return a.edad - b.edad;
        });
      return {
        ...state,
        cats: ordered,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;

const initialState = {
  cats: [],
  allCats: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CATS":
      return {
        ...state,
        cats: action.payload,
        allCats: action.payload,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;

import axios from "axios";
import { GET_CATS } from "./type";

export function getCats() {
  return async function (distpach) {
    try {
      const cats = await axios.get("https://cats-love-back.herokuapp.com/cats/");
      return distpach({
        type: GET_CATS,
        payload: cats.data,
      });
    } catch (error) {
      return error;
    }
  };
}

export function postCat(payload) {
  return async function (dispatch) {
    const newCat = await axios.post("https://cats-love-back.herokuapp.com/cats/", payload);
    return newCat;
  };
}

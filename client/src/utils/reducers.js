import { useReducer } from "react";
import {
  UPDATE_USER,
  UPDATE_PROJECT,
  UPDATE_CLIENT,
  UPDATE_BRIDGE
} from "./actions";

export const reducer = (state, action) => {

  switch (action.type) {
    case UPDATE_USER:
      console.log({ state, action })
      return {
        ...state,
        user: { ...action.payload },
      };
    case UPDATE_PROJECT:
      return {
        ...state,
        project: { ...action.payload },
      };
    case UPDATE_CLIENT:
      return {
        ...state,
        client: { ...action.payload },
      };
    case UPDATE_BRIDGE:
      return {
        ...state,
        bridge: { ...action.payload },
      };
    default:
      return state;
  }
};

export function useProjectReducer(initialState) {
  return useReducer(reducer, initialState)
}

import { useReducer } from "react";
import {
  UPDATE_USER,
  UPDATE_PROJECT,
  UPDATE_CLIENT,
  UPDATE_BRIDGE,
  UPDATE_LOCATION
} from "./actions";

export const reducer = (state, action) => {

  switch (action.type) {
    case UPDATE_USER:

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
    case UPDATE_LOCATION:
      return {
        ...state,
        location: { ...action.payload },
      };
    default:
      return state;
  }
};

export function useProjectReducer(initialState) {
  return useReducer(reducer, initialState)
}

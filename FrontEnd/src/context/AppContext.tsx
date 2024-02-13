import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  PropsWithChildren,
} from "react";

import { IAction, IAppState, ITransaction } from "../models/context";
import useFetch from "../hooks/useFetch";

// constant categories
export const ACTIONS = {
  ADD_TRANSACTION: "ADD_TRANSACTION",
  REMOVE_TRANSACTION: "REMOVE_TRANSACTION",
  CLOSE_MODAL: "CLOSE_MODAL",
};

// The Reducer
export const AppReducer = (state: IAppState, action: IAction) => {
  switch (action.type) {
    case ACTIONS.CLOSE_MODAL: {
      return { ...state, isModalOpened: false };
    }
    default:
      return state;
  }
};

// Initial State
// const date = new Date();
const initialState: IAppState = {
  // transactions: [
  //   {
  //     id: 0,
  //     date: date,
  //     amount: 2000,
  //     vendor: "Elevation",
  //     category: "Salary",
  //   },
  //   {
  //     id: 1,
  //     date: new Date(date.setDate(date.getDate() - 1)),
  //     amount: -7,
  //     vendor: "Runescape",
  //     category: "Entertainment",
  //   },
  //   {
  //     id: 2,
  //     date: new Date(date.setDate(date.getDate() - 2)),
  //     amount: -20,
  //     vendor: "Subway",
  //     category: "Food",
  //   },
  //   {
  //     id: 3,
  //     date: new Date(date.setDate(date.getDate() - 3)),
  //     amount: -98,
  //     vendor: "La Baguetterie",
  //     category: "Food",
  //   },
  // ],
  balance: 2500,
  isModalOpened: false,
};

// Context
export const AppContext = createContext(initialState);
export const useAppContext = () => useContext(AppContext);

// The Provider
export function AppProvider(props: PropsWithChildren) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // const [apiData, serverError, isLoding] = useFetch(
  //   "http://localhost:3000/v1/transactions"
  // );

  const contextValue = {
    // transactions: apiData,
    // serverError,
    // isLoding,
    ...state,
    dispatch,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}

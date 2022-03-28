import React, { createContext, useReducer } from "react";
import UserReducer from "../reducer/UserReducer";

export const UserContext = createContext();

const initialState = {
  start: "",
  end: "",
  dy: "",
  numOfDay: "",
  value: "apartment",
};

export default function UserContextProvider(props) {
  const [state, dispatch] = useReducer(UserReducer, initialState, () => {
    const cur = localStorage.getItem("data");
    return cur ? JSON.parse(cur) : initialState;
  });
  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

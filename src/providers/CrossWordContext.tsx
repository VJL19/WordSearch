import { reducer } from "../context/mainContext";
import { useReducer } from "react";
import { initialState } from "../context/mainContext";
import { MainContext } from "../context/mainContext";
import React from "react";
const ContextProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { userAns, revealAns, answerList } = state;
  return (
    <MainContext.Provider value={{ revealAns, userAns, dispatch, answerList }}>
      {children}
    </MainContext.Provider>
  );
};

export default ContextProvider;

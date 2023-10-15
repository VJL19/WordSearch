import { MainContext, reducer } from "../context/mainContext";
import { useReducer } from "react";
const ContextProvider = ({ children }: React.PropsWithChildren) => {

    const [state, dispatch] = useReducer(reducer, {
      userAns: '',
      revealAns: [],
      answerList: ["Broadcast", "Data", "Network", "Switched", "Transfer", "Technique"]
    })
    const {userAns, revealAns, answerList} = state;
    return (
      <MainContext.Provider value={{revealAns, userAns, dispatch, answerList}}>
          {children}
      </MainContext.Provider>
    )
  }

export default ContextProvider
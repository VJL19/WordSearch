import { createContext } from 'react'

// type TRevealAns = {
//   revealAns: string
//   toLowerCase: () => string
// }

export const enum REDUCER_ACTION_TYPE  {
  SET_ANS,
  SET_REVEALANS,
  SET_ANSLIST,
  CLEAR_ANS,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE,
  payload: string
}

type WordSearchState = {
  userAns: string,
  revealAns: string[],
  dispatch: () => void,
  answerList: string[]
}
export const initialState = {
    userAns: '',
    revealAns: [],
    dispatch: () => {},
    answerList: ["Broadcast", "Data", "Network", "Switched", "Transfer", "Technique"]
}
// interface AnswerList {
//   answerList: string,
//   toLowerCase: () => string;
// }
  
interface IMainContext {
    revealAns: string[]
    userAns: string
    dispatch: React.Dispatch<ReducerAction>
    answerList: string[]
} 

function reducer(state: WordSearchState , action: ReducerAction) {
  const {payload, type} = action;
  switch(type){
    case REDUCER_ACTION_TYPE.SET_ANS: {
      return {
        ...state,
        userAns: payload,
      }
    }
    case REDUCER_ACTION_TYPE.SET_REVEALANS: {
      return {
        ...state,
        revealAns: [...state.revealAns, payload]
      }
    }
    case REDUCER_ACTION_TYPE.SET_ANSLIST: {
      return {
        ...state,
        answerList: state.answerList.filter((e: string) => e.toLowerCase() !== payload.toLowerCase())
      }
    }
    case REDUCER_ACTION_TYPE.CLEAR_ANS: {
      return {
        ...state,
        userAns: ''
      }
    }
    default: {
      throw new Error("INVALID TYPE!")
    }
  }
}

const MainContext = createContext<IMainContext>(initialState);



export {MainContext, reducer}; 

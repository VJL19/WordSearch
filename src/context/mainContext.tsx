import { createContext } from 'react'

type TRevealAns = {
  revealAns: string
  toLowerCase: () => string
}
const initialState = {
    userAns: '',
    revealAns: [],
    dispatch: () => {},
    answerList: [],
}
type AnswerList = string[];
  
interface IMainContext {
    revealAns: TRevealAns[]
    userAns: string
    dispatch: (val: object) => void;
    answerList: AnswerList[]
} 

function reducer(state, action) {
  const {payload, type} = action;
  switch(type){
    case "SET_ANS": {
      return {
        ...state,
        userAns: payload,
      }
    }
    case "SET_REVEALANS": {
      return {
        ...state,
        revealAns: [...state.revealAns, payload]
      }
    }
    case "SET_ANSLIST": {
      return {
        ...state,
        answerList: state.answerList.filter((e) => e.toLowerCase() !== payload.toLowerCase())
      }
    }
    case "CLEAR_ANS": {
      return {
        ...state,
        userAns: ''
      }
    }
    default: {
      throw new Error("INVALID TYPE");
    }
  }
}

const MainContext = createContext<IMainContext>(initialState);



export {MainContext, reducer}; 

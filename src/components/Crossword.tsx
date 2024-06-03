import React, { useState } from "react";
import "../App.css";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import "../styles/Crossword.css";
import { REDUCER_ACTION_TYPE } from "../context/mainContext";

type InputEvent = React.ChangeEvent<HTMLInputElement>;

const Chessboard = () => {
  
  const { userAns, revealAns, answerList, dispatch } = useContext(MainContext);
  // const [color, setColor] = useState<string>("white")
  const [printCrossWord, setPrintCrossWord] = useState([
    ["R", "A", "E", "T", "R", "A", "N", "S", "F", "E", "R"],
    ["E", "S", "S", "U", "A", "B", "U", "E", "Y", "O", "L"],
    ["H", "W", "L", "L", "Q", "R", "A", "L", "A", "L", "Q"],
    ["K", "I", "O", "R", "U", "I", "A", "L", "R", "H", "E"],
    ["R", "T", "H", "E", "A", "V", "N", "O", "L", "A", "P"],
    ["O", "C", "D", "D", "N", "O", "S", "H", "L", "E", "H"],
    ["W", "H", "E", "A", "E", "L", "L", "O", "C", "I", "E"],
    ["T", "E", "W", "E", "T", "R", "H", "E", "A", "E", "L"],
    ["E", "D", "L", "L", "O", "A", "M", "C", "Q", "R", "T"],
    ["N", "A", "B", "R", "O", "A", "D", "C", "A", "S", "T"],
  ]);

  console.log(printCrossWord[8][10] + printCrossWord[7][9]  + printCrossWord[6][8]  + printCrossWord[5][7]  
    + printCrossWord[4][6] + printCrossWord[3][5] + printCrossWord[2][4] + printCrossWord[1][3] + printCrossWord[0][2])
    const highlight = () => {
      const copy = [...printCrossWord];
      
      //NETWORK
      if(printCrossWord[9][0] + printCrossWord[8][0] + printCrossWord[7][0]
        + printCrossWord[6][0] + printCrossWord[5][0] + printCrossWord[4][0] + printCrossWord[3][0]
        === userAns.toUpperCase()){
          for (let i = 9; i >= 3; i--) {
            copy[i][0] = "*";
          }
        }
        //TRANSFER 
        else if(printCrossWord[0][3] + printCrossWord[0][4] + printCrossWord[0][5] + printCrossWord[0][6]
          + printCrossWord[0][7] + printCrossWord[0][8] + printCrossWord[0][9] + printCrossWord[0][10] === userAns.toUpperCase()){
          for (let i = 3; i <= 10; i++) {
            copy[0][i] = "*";
          }
        } 
        //DATA
        else if (printCrossWord[5][2] + printCrossWord[6][3] + printCrossWord[7][4] + printCrossWord[8][5]
          === userAns.toUpperCase()){
            for (let i = 0; i < 4; i++) {
              copy[5+i][2+i] = "*";
            }
          } 
          //SWITCHED
          else if(printCrossWord[1][1] + printCrossWord[2][1] + printCrossWord[3][1] + printCrossWord[4][1]
            + printCrossWord[5][1] + printCrossWord[6][1] + printCrossWord[7][1] + printCrossWord[8][1] === userAns.toUpperCase()){
              for (let i = 1; i <= 8; i++) {
                copy[i][1] = "*";
              } 
            } 
            //BROADCAST
            else if (printCrossWord[9][2] + printCrossWord[9][3] + printCrossWord[9][4] + printCrossWord[9][5] + printCrossWord[9][6] 
              + printCrossWord[9][7] + printCrossWord[9][8] + printCrossWord[9][9] + printCrossWord[9][10] === userAns.toUpperCase()){
                for (let i = 2; i <= 10; i++) {
                  copy[9][i] = "*";
                } 
              }
              //TECHNIQUE
            else if(printCrossWord[8][10] + printCrossWord[7][9]  + printCrossWord[6][8]  + printCrossWord[5][7]  
              + printCrossWord[4][6] + printCrossWord[3][5] + printCrossWord[2][4] + printCrossWord[1][3] + printCrossWord[0][2] === userAns.toUpperCase()){
                
                for (let i = 0; i < 9; i++) {
                  copy[8-i][10-i] = "*";
                } 
              }
        setPrintCrossWord(copy);
  }

  console.log(revealAns.length === 0);

  //   let answerList = [
  //     printCrossWord[0][0] +
  //       printCrossWord[0][1] +
  //       printCrossWord[0][2] +
  //       printCrossWord[0][3] +
  //       printCrossWord[0][4] +
  //       printCrossWord[0][5] +
  //       printCrossWord[0][6] +
  //       printCrossWord[0][7],
  //   ];

  //   console.log(answerList);
  const handleChange = (e: InputEvent) => {
    dispatch({ type: REDUCER_ACTION_TYPE.SET_ANS, payload: e.target.value });
  };

  const checkAnswer = (): void => {
    type Found = boolean;
    const found: Found = answerList.some(
      (e) => e.toLowerCase() === userAns.toLowerCase()
    );

    if (found) {
      alert("congrats");
      dispatch({ type: REDUCER_ACTION_TYPE.SET_REVEALANS, payload: userAns });
      dispatch({ type: REDUCER_ACTION_TYPE.SET_ANSLIST, payload: userAns });
    } else {
      alert("better luck next time.");
    }
  };
  const submitAnswer = (): void => {
    type Found = boolean;
    const found: Found = revealAns.some(
      (e) => e.toLowerCase() === userAns.toLowerCase()
    );

    if (found) {
      alert("Answer already exist/done.");
    } else {
      checkAnswer();
      highlight();
    }
    dispatch({ type: REDUCER_ACTION_TYPE.CLEAR_ANS, payload: userAns });
  };
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <table>
          {printCrossWord.map((row, j) => {
            return (
              <React.Fragment key={j}>
                <tr>
                  {row.map((cell, j) => {
                    return (
                      <td key={j}>
                        <span style={{color: cell === "*" ? "red" : "white", 
                                    fontSize: cell === "*"? '3rem' : '1.8rem'}}>{cell}</span>
                      </td>
                    );
                  })}
                </tr>
              </React.Fragment>
            );
          })}
        </table>
        {revealAns.length === 0 ? (
          ""
        ) : (
          <div>
            <h1>ANSWER LIST </h1>
            {revealAns.map((ans) => {
              return (
                <>
                  <li>{ans}</li>
                </>
              );
            })}
          </div>
        )}
      </div>
      <div className="bottomItems">
        <input
          type="text"
          placeholder="Enter your answer"
          onChange={handleChange}
          value={userAns}
          className="txtAnswer"
        />
        <button className="btnSubmit" type="button" onClick={submitAnswer}>
          Submit
        </button>
      </div>
    </React.Fragment>
  );
};

export default Chessboard;

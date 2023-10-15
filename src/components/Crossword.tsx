import React from "react";
import "../App.css";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import "../styles/Crossword.css";

const Chessboard = () => {
  const { userAns, revealAns, answerList, dispatch } = useContext(MainContext);
  const printCrossWord = [
    ["R", "A", "E", "T", "R", "A", "N", "S", "F", "E", "R"],
    ["E", "S", "S", "U", "A", "B", "U", "E", "Y", "O", "L"],
    ["H", "W", "L", "L", "Q", "R", "A", "L", "A", "L", "Q"],
    ["K", "I", "O", "R", "U", "I", "A", "L", "R", "H", "E"],
    ["R", "T", "H", "E", "A", "V", "N", "O", "L", "A", "P"],
    ["O", "C", "D", "D", "N", "O", "S", "H", "L", "E", "H"],
    ["W", "H", "E", "A", "E", "L", "L", "O", "C", "I", "E"],
    ["T", "E", "W", "E", "T", "R", "H", "E", "A", "E", "L"],
    ["E", "D", "B", "R", "O", "A", "D", "C", "A", "S", "T"],
    ["N", "E", "L", "L", "O", "R", "M", "C", "Q", "R", "O"],
  ];

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
  const handleChange = (event: React) => {
    dispatch({ type: "SET_ANS", payload: event.target.value });
  };

  const checkAnswer = (): void => {
    type Found = boolean;
    const found: Found = answerList.some(
      (e) => e.toLowerCase() === userAns.toLowerCase()
    );

    if (found) {
      alert("congrats");
      dispatch({ type: "SET_REVEALANS", payload: userAns });
      dispatch({ type: "SET_ANSLIST", payload: userAns });
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
    }
    dispatch({ type: "CLEAR_ANS", userAns });
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
                        <span className="element">{cell}</span>
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
          onChange={() => handleChange(event)}
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

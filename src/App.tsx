import React from "react";
import { useEffect } from "react";
import "./App.css";
import Crossword from "./components/Crossword";
import EndOfGame from "./components/EndOfGame";
import { useContext } from "react";
import { MainContext } from "./context/mainContext";
function App() {
  const { answerList } = useContext(MainContext);
    
  
  useEffect(() => {
    
  }, [])
  // function getSelectionText() {
  //   if (window.getSelection) {
  //     text = window.getSelection()?.toString();
  //   } else if (document.selection && document.selection.type != "Control") {
  //     text = document.selection.createRange().text;
  //   }
  //   return text;
  // }

  // answerList.find((e) => {
  //   if (e === highlightedText) {
  //     document.getElementById("element").style.padding = `${150}px`;
  //   }
  // });
  // document.onmouseup =
  //   document.onkeyup =
  //   document.onselectionchange =
  //     function () {
  //       getSelectionText();
  //       setHighlightedText(text.replace(/\t+/g, ""));
  //       let found = answerList.some((e) => e === highlightedText.toLowerCase());

  //       if (found) {
  //         setMessage("Congratulations, you did it");
  //       } else {
  //         setMessage("Not found");
  //       }
  //     };

  return (
    <React.Fragment>
        <div>
          <h1 style={{textAlign: 'center'}}>ICE BREAKER KAYO NG JOWA MO</h1>
          {/* <p id="sel">{highlightedText}</p> */}
          {/* <h1>{message}</h1> */}
          {answerList.length == 0 ? <EndOfGame/>: <Crossword/>}
        </div>
    </React.Fragment>
  );
}

export default App;

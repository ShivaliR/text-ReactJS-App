import React, { useState } from "react";
var pastValue = "";
var redoVal = "";
export default function TextForm(props) {
  let totalWordCount = 0;
  let pastState = [],
    i = 0;
  const convertToUpperClick = () => {
    pastState[i] = text;
    i++;
    pastValue = pastState[i - 1];
    setText(text.toUpperCase());
  };
  function handleFocus(event) {
    setText("");
  }
  const doType = (event) => {
    let inputValue = event.target.value;
    setText(inputValue);
  };
  const convertToLowerCase = () => {
    pastState[i] = text;
    i++;
    pastValue = pastState[i - 1];
    setText(text.toLowerCase());
  };
  const performUndo = () => {
    redoVal=text;
    setText(pastValue);
  };
  const performRedo = () => {
    console.log(redoVal)
    setText(redoVal);
    // doClear();
  };
  const doClear = () => {
    pastValue = text;
    setText("Start typing, or copy and paste your document here...");
  };
  const [text, setText] = useState(
    "Start typing, or copy and paste your document here..."
  );
  function countWords(text) {
    if (text === "") {
      totalWordCount = 0;
    } else {
      totalWordCount = text.split(" ").length;
    }
    return totalWordCount;
  }
 
  return (
    <>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="textArea"
          rows="10"
          value={text}
          onChange={doType}
          onFocus={handleFocus}
        ></textarea>
      </div>

      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Case
      </button>
      <ul
        className="dropdown-menu"
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <a className="dropdown-item" onClick={convertToUpperClick}>
            UPPERCASE
          </a>
        </li>
        <li>
          <a className="dropdown-item" onClick={convertToLowerCase}>
            lowercase
          </a>
        </li>
      </ul>

      <button className="btn btn-success mx-1" onClick={doClear}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path
            fillRule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </button>
      <div className="btn btn-secondary mx-1" onClick={performUndo}>
        Undo
      </div>
      <div className="btn btn-secondary mx-1" onClick={performRedo}>
        Redo
      </div>
      <div className="container my-5" id="summaryPart" >
      <h3>Text summary</h3>
      <p>
        {countWords(text)} words and {text.length} characters
      </p>
      <p>{0.008 * countWords(text)} minutes to read </p>
      <p>Preview: {text}</p></div>
      
    </>
  );
}

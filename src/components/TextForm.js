import React, { useState } from "react";
import { Link } from "react-router-dom";
var undoVal="",redoVal = "";
export default function TextForm(props) {
  const convertToUpperCase = () => {
    undoVal=text;
    let newText = text.toUpperCase();
    setText(newText);
  };

  const convertToLowerCase = () => {
    undoVal=text;
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearText = () => {
    undoVal=text;
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const convertToSentenceCase = () => {
    undoVal=text;
    const initial = text.charAt(0).toUpperCase();
    setText(initial + text.slice(1).toLowerCase());
  };
  const convertToTitleCase = () => {
    undoVal=text;
    const arr = text.split(" ");
    let titleCase = "";
    arr.forEach((element) => {
      element = element.charAt(0).toUpperCase() + element.slice(1);
      titleCase = titleCase + " " + element;
    });
    setText(titleCase.trim());
  };
  const copyText = () => {
    var selectText = document.getElementById("myBox");
    selectText.select();
    selectText.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(selectText.value);
  };
  const handleExtraSpaces = () => {
    undoVal=text;
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const performRedo = () => {
    setText(redoVal);
  }
  const performUndo = () => {
    redoVal=undoVal;
    setText(undoVal);
  }
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2 className="mb-4">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="container-sm">
          <div className="dropdown">
            <button
              disabled={text.length === 0}
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Case
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link
                  to="#"
                  className="dropdown-item"
                  onClick={convertToUpperCase}
                >
                  UPPERCASE
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="dropdown-item"
                  onClick={convertToLowerCase}
                >
                  lowercase
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="dropdown-item"
                  onClick={convertToSentenceCase}
                >
                  Sentence case
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="dropdown-item"
                  onClick={convertToTitleCase}
                >
                  Title Case
                </Link>
              </li>
              {/* <li><Link className="dropdown-item" to="#">Something else here</Link></li> */}
            </ul>
            <button
              disabled={text.length === 0}
              className="btn btn-secondary mx-1 my-1"
              onClick={performUndo}
            >
              Undo
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-secondary mx-1 my-1"
              onClick={performRedo}
            >
              Redo
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-secondary mx-1 my-1"
              onClick={clearText}
            >
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
            <button
              disabled={text.length === 0}
              className="btn btn-secondary mx-1 my-1"
              onClick={copyText}
            >  
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
  <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
  <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
</svg>
         
            </button>
            <button
              disabled={text.length === 0 || text.indexOf("  ")===-1}
              className="btn btn-secondary mx-1 my-1"
              onClick={handleExtraSpaces}
            >
              Remove Extra Spaces
            </button>
          </div>
        </div>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h3>Your text summary</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}

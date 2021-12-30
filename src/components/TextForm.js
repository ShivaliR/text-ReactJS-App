import React, { useState } from "react";
// import { a } from "react-router-dom";
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
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={convertToUpperCase}
                >
                  UPPERCASE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={convertToLowerCase}
                >
                  lowercase
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={convertToSentenceCase}
                >
                  Sentence case
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dropdown-item"
                  onClick={convertToTitleCase}
                >
                  Title Case
                </a>
              </li>
              {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
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
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </button>
            <button
              disabled={text.length === 0}
              className="btn btn-secondary mx-1 my-1"
              onClick={copyText}
            >
              Copy Text
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

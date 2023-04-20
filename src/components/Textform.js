import React, { useState } from "react";

export default function Textform(props) {
 

  const [text, setText] = useState("");
  const toup = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const tosm = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <div>
      <div className=" container mb-3" >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleChange}
          
        ></textarea>
        <button className="btn btn-outline-success" onClick={toup}>
          Convert to UpperCase
        </button>
        <button className="btn btn-outline-success" onClick={tosm}>
          Convert to LowerCase
        </button>
        
        <h1>Your text summary</h1>
        <p>
          {text.length} words {text.split(" ").length} characters
        </p>
        <h1 className="containere my-4">Preview</h1>
        <p>{text}</p>
        <p></p>
      </div>
    </div>
  );
}

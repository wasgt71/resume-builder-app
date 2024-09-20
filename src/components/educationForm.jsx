import React, { useState } from "react";
//import '../styles/education.css';

function Heading(props) {
  return <h3>{props.text}</h3>;
}

function InputValue(props) {
  const [inputValue, setInputValue] = useState("");
  const id = props.id;
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <input
      type="text"
      id={props.id}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}

function Education() {
  const [showHeading, setShowHeading] = useState(false);

  const addValue = () => {
    setShowHeading(true);
  };

  return (
    <>
      <div id="yes">
        <form>
          <legend>School Name</legend>
          <InputValue id="school"></InputValue>
          <legend>Title of Study</legend>
          <InputValue id="study"></InputValue>
          <legend>Date of Study</legend>
          <InputValue id="date"></InputValue>
          <button type="button" onClick={addValue}>
            Add Info
          </button>
        </form>
        {showHeading && (
          <Heading text={document.getElementById("school").value} />
        )}
        {showHeading && (
          <Heading text={document.getElementById("study").value} />
        )}
        {showHeading && (
          <Heading text={document.getElementById("date").value} />
        )}
      </div>
    </>
  );
}

export default Education;
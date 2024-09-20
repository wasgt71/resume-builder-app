import React, { useState } from "react";
//import '../styles/practical.css';

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

function Experience() {
  const [showHeading, setShowHeading] = useState(false);

  const addValue = () => {
    setShowHeading(true);
  };

  return (
    <>
      <div id="div">
        <form>
          <legend>Company Name</legend>
          <InputValue id="company"></InputValue>
          <legend>Position Title</legend>
          <InputValue id="position"></InputValue>
          <legend>Main Responsibilities</legend>
          <InputValue id="main"></InputValue>
          <legend>Date From</legend>
          <InputValue id="from"></InputValue>
          <legend>Date To</legend>
          <InputValue id="to"></InputValue>
          <button type="button" onClick={addValue}>
            Add Info
          </button>
        </form>
        {showHeading && (
          <Heading text={document.getElementById("company").value} />
        )}
        {showHeading && (
          <Heading text={document.getElementById("position").value} />
        )}
        {showHeading && (
          <Heading text={document.getElementById("main").value} />
        )}
        {showHeading && (
          <Heading text={document.getElementById("from").value} />
        )}
        {showHeading && <Heading text={document.getElementById("to").value} />}
      </div>
    </>
  );
}

export default Experience;

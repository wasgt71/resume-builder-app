import React, { useState } from "react";
import '../styles/contact.css';

function Heading(props) {
  return <h3>{props.text}</h3>;
}

function InputValue(props) {
  const [inputValue, setInputValue] = useState("");
  const id = props.id;
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const Reset = () => {
  const [inputValue, resetInputValue] = useState(inputValue);
  }

  return (
    <input
      type="text"
      id={props.id}
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}

function Contact() {
  const [showHeading, setShowHeading] = useState(false);

  const addValue = () => {
    setShowHeading(true);
  };

  return (
    <>
      <div id="div">
        <form>
          <legend>First Name</legend>
          <InputValue id="first"></InputValue>
          <legend>Last Name</legend>
          <InputValue id="last"></InputValue>
          <legend>Phone Number</legend>
          <InputValue id="phone"></InputValue>
          <legend>Email</legend>
          <InputValue id="email"></InputValue>
          <button type="button" onClick={addValue}>
            Add Info
          </button>
        </form>
        </div>
        <div id="output">
        {showHeading && (
          <Heading text={document.getElementById("first").value} />
        )}
        {showHeading && (
          <Heading text={document.getElementById("last").value} />
        )}
        {showHeading && (
          <Heading text={document.getElementById("phone").value} />
        )}
        {showHeading && (
          <Heading text={document.getElementById("email").value} />
        )}
      </div>
    </>
  );
}

export default Contact;

import React, { useState } from "react";
import "../styles/education.css";

function Heading(props) {
  return <h5>{props.text}</h5>;
}

function SubmitButton({ onClick }) {
  return (
    <>
      <button id="submit-education" type="button" onClick={onClick}>
        Submit
      </button>
    </>
  );
}

function EditButton({ onClick }) {
  return (
    <>
      <button id="education-info" type="button" onClick={onClick}>
        Education
      </button>
    </>
  );
}

function InputValue({ id, value, onChange, placeholder }) {
  return (
    <input
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></input>
  );
}

function Education() {
  const [formData, setFormData] = useState({
    school: "FSU University",
    place: "Orlando, Florida",
    study: "Computer Science",
    date: "2019-2024",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    console.log(formData);
  };

  const [editText, submitText] = useState(false);

  const submitChange = () => {
    submitText(true);
    setLock(false);
    setVisible(true);
  };

  const [unlocked, setLock] = useState(false);
  const editFields = () => {
    setLock(true);
    setVisible(false);
  };

  const [editVisible, setVisible] = useState(true);

  return (
    <>
      <div id="yes">
        <form>
          {unlocked && (
            <InputValue
              id="school"
              value={formData.school}
              onChange={handleChange}
              placeholder="School Of Study"
            ></InputValue>
          )}

{unlocked && (
            <InputValue
              id="place"
              value={formData.place}
              onChange={handleChange}
              placeholder="Place Of Study"
            ></InputValue>
          )}

          {unlocked && (
            <InputValue
              id="study"
              value={formData.study}
              onChange={handleChange}
              placeholder="Title Of Study"
            ></InputValue>
          )}

          {unlocked && (
            <InputValue
              id="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="Date Of Study"
            ></InputValue>
          )}

          {unlocked && <SubmitButton onClick={submitChange}></SubmitButton>}

          {editVisible && <EditButton onClick={editFields}></EditButton>}
        </form>
        </div>
        <h3 id="h3">Education</h3>
        <div id="headings">
        <h5>School:</h5>
        
        <h5>Location:</h5>
        
        <h5>Title:</h5>
        
        <h5>Date:</h5>
        </div>
        <div id="edu-output">
        {editText && <Heading text={`${formData.school}`}></Heading>}
        {editText && <Heading text={`${formData.place}`}></Heading>}
        {editText && <Heading text={`${formData.study}`}></Heading>}
        {editText && <Heading text={`${formData.date}`}></Heading>}
      </div>
    </>
  );
}

export default Education;

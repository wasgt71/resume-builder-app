import React, { useState } from "react";
import "../styles/education.css";

function Heading(props) {
  return <h3>{props.text}</h3>;
}

function SubmitButton({ onClick }) {
  return (
    <>
      <button type="button" onClick={onClick}>
        Submit
      </button>
    </>
  );
}

function EditButton({ onClick }) {
  return (
    <>
      <button type="button" onClick={onClick}>
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
    school: "",
    study: "",
    date: "",
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
        {editText && <Heading text={`${formData.school}`}></Heading>}
        {editText && <Heading text={`${formData.study}`}></Heading>}
        {editText && <Heading text={`${formData.date}`}></Heading>}
      </div>
    </>
  );
}

export default Education;

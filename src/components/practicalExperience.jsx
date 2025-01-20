import React, { useState } from "react";
import "../styles/practical.css";

function Heading(props) {
  return <h5>{props.text}</h5>;
}
function SubmitButton({ onClick }) {
  return (
    <>
      <button id="submit-practical" type="button" onClick={onClick}>
        Submit
      </button>
    </>
  );
}

function EditButton({ onClick }) {
  return (
    <>
      <button id="practical-info" type="button" onClick={onClick}>
        Experience
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

function Experience() {
  const [formData, setFormData] = useState({
    companyname: "Tesla",
    positiontitle: "SoftWare Engineer",
    responsibilitys: "Design Software",
    datestartend: "2019 - 2024",
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
      <div id="pracexp">
        <form>
          {unlocked && (
            <InputValue
              id="companyname"
              value={formData.companyname}
              onChange={handleChange}
              placeholder="Company Name"
            ></InputValue>
          )}

          {unlocked && (
            <InputValue
              id="positiontitle"
              value={formData.positiontitle}
              onChange={handleChange}
              placeholder="Position Title"
            ></InputValue>
          )}

          {unlocked && (
            <InputValue
              id="responsibilitys"
              value={formData.responsibilitys}
              onChange={handleChange}
              placeholder="Main Resposibilities"
            ></InputValue>
          )}

          {unlocked && (
            <InputValue
              id="datestartend"
              value={formData.datestartend}
              onChange={handleChange}
              placeholder="Date From - Date To"
            ></InputValue>
          )}

          {unlocked && <SubmitButton onClick={submitChange}></SubmitButton>}

          {editVisible && <EditButton onClick={editFields}></EditButton>}
        </form>
      </div>
      <h3 id="exp-h3">Experience</h3>
      <div id="exp-div">
        <h5>Company:</h5>
        <h5>Position:</h5>
        <h5>Responsibilities:</h5>
        <h5>Date:</h5>
      </div>
      <div id="practical-output">
        {editText && <Heading text={`${formData.companyname}`}></Heading>}
        {editText && <Heading text={`${formData.positiontitle}`}></Heading>}
        {editText && <Heading text={`${formData.responsibilitys}`}></Heading>}
        {editText && <Heading text={`${formData.datestartend}`}></Heading>}
      </div>
    </>
  );
}

export default Experience;

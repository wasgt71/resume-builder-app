import React, { useState } from "react";
import '../styles/education.css';

function Heading(props) {
  return <h3>{props.text}</h3>;
}

function InputValue({id, value , onChange}) {

  

  return (
    
    <input id={id} value={value} onChange={onChange}></input>
    
  );
}


function Education() {
  
const [formData, setFormData] = useState({
SchoolName: "",
TitleOfStudy: "",
DateOfStudy: "",
})


const handleChange = (e) => {
const { id, value } = e.target;
setFormData((prevData) => ({
...prevData,
[id]: value
}));
};



  return (
    <>
      <div id="yes">
        <form>
          <legend>School Name</legend>
          <InputValue id="school" onChange={handleChange}></InputValue>
          <legend>Title of Study</legend>
          <InputValue id="study"></InputValue>
          <legend>Date of Study</legend>
          <InputValue id="date"></InputValue>
        </form>
      <Heading text={`${formData.school}`}></Heading>
      </div>
    </>
  );
}

export default Education;
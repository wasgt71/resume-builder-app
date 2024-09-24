import React, { useState } from "react";
import '../styles/education.css';

function Heading(props) {
  return <h3>{props.text}</h3>;
}

function SubmitButton({onClick}) {


return(
<>
<button type="button" onClick={onClick}>Submit</button>

</>

)

}

function InputValue({id, value, onChange}) {

  

  return (
    
    <input id={id} value={value} onChange={onChange}></input>
    
  );
}


function Education() {
  
const [formData, setFormData] = useState({
school: "",
TitleOfStudy: "",
DateOfStudy: "",
})


const handleChange = (e) => {
const { id, value } = e.target;
setFormData((prevData) => ({
  ...prevData,
  [id]: value
  }));

  console.log(formData);
};

const [editText, submitText] = useState(false)

const submitChange = () => {
submitText(true)
setLock(false);
}

const [unlocked, setLock] = useState(false)
const editFields = () => {
setLock(true);
}

  return (
    <>
    
      <div id="yes">
       <form>
       
          
      {unlocked && (
          <InputValue id="school" value={formData.school} onChange={handleChange}></InputValue>
       )}
          
          {unlocked && (
          <InputValue id="study"></InputValue>
          )}
          
          {unlocked && (
          <InputValue id="date"></InputValue>
          )}

          {unlocked && (
          <SubmitButton onClick={submitChange}>Submit</SubmitButton>
          )}
          
          <button type="button" onClick={editFields}>Education</button>
          
          
       
        </form>
      {editText && (
      <Heading text={`${formData.school}`}></Heading>
      )}
  
     
      </div>
    </>
  );
}

export default Education;
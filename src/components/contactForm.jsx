import React, { useState, useEffect } from "react";
import '../styles/contact.css';


function Heading(props) {
  return <h3>{props.text}</h3>;
}

function SubmitButton({ onClick }) {
  return (
    <>
      <button id="submit-contact" type="button" onClick={onClick}>
        Submit
      </button>
    </>
  );
}

function EditButton({ onClick }) {
  return (
    <>
      <button id="personal-info" type="button" onClick={onClick}>
        Personal-Info
      </button>
    </>
  );
}


function InputValue({id, value, onChange, placeholder}) {
 


return(

<>

<input id={id} value={value} onChange={onChange} placeholder={placeholder}></input>


</>



)
}



function Contact() {
const [formData, setFormData] = useState({
  first: "",
  last: "",
  phone: "",
  email: ""
});
 



const [submittedData, setSubmittedData] = useState(null);

const handleChange = (e) => {
const { id, value } = e.target;
setFormData((prevData) => ({
...prevData,
[id]: value
}))
};

const submitChange = () => {
  
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
      <div id="div">
        <form>
         {unlocked && (
          <InputValue id="first" value={formData.first} onChange={handleChange} placeholder="First Name"></InputValue>
         )}
         {unlocked && (
          <InputValue id="last" value={formData.last} onChange={handleChange} placeholder="Last Name"></InputValue>
         )}
         {unlocked && (
          <InputValue id="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number"></InputValue>
         )}
         {unlocked && (
          <InputValue id="email" value={formData.email} onChange={handleChange} placeholder="Email"></InputValue>
         )}
          {unlocked && (
          <SubmitButton onClick={submitChange}></SubmitButton>
        )}
        {editVisible && (
          <EditButton onClick={editFields}></EditButton>
        )}
       
        

        </form>
        </div>
        <div id="output">

        
            <Heading text={`${formData.first}`} />
            <Heading text={`${formData.last}`} />
            <Heading text={`${formData.phone}`} />
            <Heading text={`${formData.email}`} />
          
        

         
        
      </div>
    </>
  );

}

export default Contact;

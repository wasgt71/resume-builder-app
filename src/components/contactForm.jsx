import React, { useState, useEffect } from "react";
import '../styles/contact.css';





function Heading(props) {
  return <h3>{props.text}</h3>;
}



function InputValue({id, value, onChange}) {
 


return(

<>

<input id={id} value={value} onChange={onChange}></input>


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

const handleSubmit = () => {
  setSubmittedData(formData);
  // Optionally reset form data
console.log(formData);
};
  



   //const addValue = () => {
   // setShowHeading(true);

  //};

  //const resetValue = () => {
  //  setShowHeading();
    
  //}
    
  
  return (
    <>
      <div id="div">
        <form>
          <legend>First Name</legend>
          <InputValue id="first" value={formData.first} onChange={handleChange}></InputValue>
          <legend>Last Name</legend>
          <InputValue id="last" value={formData.last} onChange={handleChange}></InputValue>
          <legend>Phone Number</legend>
          <InputValue id="phone" value={formData.phone} onChange={handleChange}></InputValue>
          <legend>Email</legend>
          <InputValue id="email" value={formData.email} onChange={handleChange}></InputValue>
          <button type="button" onClick={handleSubmit}>Submit
          </button>

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

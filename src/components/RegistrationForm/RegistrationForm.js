import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { firestore } from "../../config";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [form, setForm] = useState([]);

  const [numberOfParticipants, setParticipants] = useState (0)

  const params = useParams();
  const { selectedEvent } = useSelector ((state) => state.displayData)
  const submitHandler = () => {
    firestore
      .collection(params.id)
      .doc()
      .set(form)
      .then(() => console.log("Success"))
      .catch((err) => console.log(err.message));
  };

  const setParticipantNumber = (event) => {
    console.log(event.target.value);
    setParticipants(parseInt(event.target.value))
    console.log(numberOfParticipants);
    const temporary = Array(parseInt(event.target.value)).fill ({
      name: "",
      email: "",
      year: "",
      college: "",
      contactNumber: 0
    })
    console.log(temporary);
    setForm(temporary)
  }

  return (
    <div style={{ marginTop: "100px", color: "white" }}>
      <h3 className="register-title">REGISTRATION FORM</h3>
      <div>
        <select onChange={setParticipantNumber} value={numberOfParticipants} className="form-input">
          <option>SELECT NUMBER OF PARTICIPANTS</option>
          <option value={1}> 1 </option>
          <option value={2}> 2 </option>
          <option value={3}> 3 </option>
          <option value={4}> 4 </option>
          <option value={5}> 5 </option>
        </select>
        {form.map((eachParticipant, index) => {
          return (
            <div key={eachParticipant} className="register-form">
              <h3>PARTICIPANT {`    ${index+1}`}</h3>
              <input onClick={( ) => {}} value={eachParticipant.name} placeholder="Name" className="form-input" />
              <input onClick={( ) => {}} value={eachParticipant.name} placeholder="Email" className="form-input" />
              <input onClick={( ) => {}} value={eachParticipant.name} placeholder="Contact Number" className="form-input" />
              <input onClick={( ) => {}} value={eachParticipant.name} placeholder="College" className="form-input" />
              <input onClick={( ) => {}} value={eachParticipant.name} placeholder="Year" className="form-input" />
            </div>
          )
        })}
        
        <button onClick={submitHandler} className="form-btn">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;

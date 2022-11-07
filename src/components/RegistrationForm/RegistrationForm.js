import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { firestore } from "../../config";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState(0)
  const [college, setCollege] = useState ("")
  const [year, setYear] = useState ("")
  const [email, setEmail] = useState ("")

  const [numberOfParticipants, setParticipants] = useState (0)
  const [currentParticipant, setCurrentParticipant] = useState(0)
  const [currentEvent, setCurrentEvent] = useState ({})
  const [allParticipants, setAllParticipantsData] = useState ([])

  const params = useParams();

  useEffect (() => {
    setCurrentEvent(JSON.parse(localStorage.getItem("event")));
  }, [])
  const submitHandler = () => {
    firestore
      .collection(params.id)
      .doc()
      .set({allParticipants})
      .then(() => alert("Success"))
      .catch((err) => console.log(err.message));
  };

  const setParticipantNumber = (event) => {
    setParticipants(parseInt(event.target.value))
    const temporary = Array(parseInt(event.target.value)).fill ({
      name: "",
      email: "",
      year: "",
      college: "",
      contactNumber: 0
    })
    setAllParticipantsData(temporary)
  }

  const onChange = (event) => {
    const {value, name} = event.target
    if (name === "name")
      setName(value)
    else if (name === "email")
      setEmail(value)
    else if (name === "contactNumber")
      setContactNumber(value)
    else if (name === "year")
      setYear(value)
    else
      setCollege (value)
  }

  const onSaveHandler = () => {
    let temporary = allParticipants
    setCurrentParticipant(currentParticipant + 1)
    let object = {
      name: name,
      year: year,
      email: email,
      college: college,
      contactNumber: contactNumber
    }
    temporary[currentParticipant] = object
    setAllParticipantsData(temporary)
    setName(allParticipants[currentParticipant + 1].name)
    setCollege(allParticipants[currentParticipant + 1].college)
    setContactNumber(allParticipants[currentParticipant + 1].contactNumber)
    setYear(allParticipants[currentParticipant + 1].year)
    setEmail(allParticipants[currentParticipant + 1].email)
  }

  const onBackHandler = () => {
    let temporary = allParticipants[currentParticipant - 1]
    setName(temporary.name)
    setCollege(temporary.college)
    setEmail(temporary.email)
    setContactNumber(temporary.contactNumber)
    setYear(temporary.year)
    setCurrentParticipant(currentParticipant - 1 )
  }
 
  return (
    <div style={{ marginTop: "100px", color: "white" }}>
      <h3 className="register-title">REGISTRATION FORM</h3>
      <div>
        <select onChange={setParticipantNumber} value={numberOfParticipants} className="form-input">
          <option>SELECT NUMBER OF PARTICIPANTS</option>
          {currentEvent.MINPARTICIPANTS <= "1" && currentEvent.MAXPARTICIPANTS >= "1" && <option value={1}> 1 </option>}
          {currentEvent.MINPARTICIPANTS <= "2" && currentEvent.MAXPARTICIPANTS >= "2" && <option value={2}> 2 </option>}
          {currentEvent.MINPARTICIPANTS <= "3" && currentEvent.MAXPARTICIPANTS >= "3" && <option value={3}> 3 </option>}
          {currentEvent.MINPARTICIPANTS <= "4" && currentEvent.MAXPARTICIPANTS >= "4" && <option value={4}> 4 </option>}
          {currentEvent.MINPARTICIPANTS <= "5" && currentEvent.MAXPARTICIPANTS >= "5" && <option value={5}> 5 </option>}
        </select>
        {numberOfParticipants !== 0 && <div className="register-form">
            <h3>PARTICIPANT {currentParticipant + 1}</h3>
            <input required onChange={onChange} value={name} name="name" placeholder="Name" className="form-input" type="text" />
            <input required onChange={onChange} name="email" value={email} placeholder="Email" className="form-input" type="email" />
            <input required onChange={onChange} name="contactNumber" value={contactNumber} placeholder="Contact Number" className="form-input" />
            <input required onChange={onChange} name="college" value={college} placeholder="College" className="form-input" type="text" />
            <input required onChange={onChange} name="year" value={year} placeholder="Year" className="form-input" />
          </div>}
        {currentParticipant > 0 && <button onClick={onBackHandler} className="form-btn">
          BACK
        </button>}
        {(currentParticipant + 1) === numberOfParticipants ? 
        <button onClick={submitHandler} className="form-btn">
          SUBMIT
        </button> : <div> 
          {(numberOfParticipants !== 0) && 
          <button onClick={onSaveHandler} className="form-btn">
            NEXT
          </button>
          }
        </div>
        }
      </div>
    </div>
  );
};

export default RegistrationForm;

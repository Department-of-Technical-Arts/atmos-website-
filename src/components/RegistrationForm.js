import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { firestore } from "../config"


const RegistrationForm = () => {
    const [form, setForm] = useState  ({
        name: "",
        email: "",
        contactNumber: 0,
        college: "",
        year: 0
    })
    const params = useParams()
    const submitHandler = () => {
        firestore.collection(params.id).doc().set({
            form
        }).then(() => console.log("Success")).catch(err => console.log(err.message))
    }
    return (
        <div style={{marginTop: "100px", color:"white"}}>
            <h3>
                REGISTRATION FORM
            </h3>
            <input placeholder="name" />
            <input placeholder="email" />
            <input placeholder="contact Number" />
            <input placeholder="college" />
            <input placeholder="year" />
            <button onClick={submitHandler} >SUBMIT</button>
        </div>
    )
}

export default RegistrationForm
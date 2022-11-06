import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../config";
import Papa from "papaparse";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactNumber: 0,
    college: "",
    year: 0,
  });

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQDM_B5Mbm4oE1Xn9e_lCYAS5eIWJi-Q-lCbsNsAcLPI-vxasaFAI0NeJQNfU8Mlvx2dXKZpvt99yS_/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (results) => {
          setCompetitionNames(results.data);
          console.log(results.data);
        },
      }
    );
  });
  const params = useParams();
  const submitHandler = () => {
    firestore
      .collection(params.id)
      .doc()
      .set({
        form,
      })
      .then(() => console.log("Success"))
      .catch((err) => console.log(err.message));
  };
  return (
    <div style={{ marginTop: "100px", color: "white" }}>
      <h3 className="register-title">REGISTRATION FORM</h3>
      <div className="register-form">
        <input placeholder="name" className="form-input" />
        <input placeholder="email" className="form-input" />
        <input placeholder="contact Number" className="form-input" />
        <input placeholder="college" className="form-input" />
        <input placeholder="year" className="form-input" />
        <button onClick={submitHandler} className="form-btn">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;

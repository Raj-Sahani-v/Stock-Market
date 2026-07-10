import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

export const Signup = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [term, setTerm] = useState(false);
  const [error, setError] = useState("");
  // const [data , setData] = useState("")



  const handleSubmit = (event) => {
    if (password === conformPassword) {
    
      if (term) {
        const data = {
          phone:phone,
          
          password,
          conformPassword,
          term:term,
        };
        try {
          axios.post("http://localhost:7000/signup",data).then(()=>{console.log("data is send backend")})
        } catch (error) {
          console.log(error)
        }
         console.log("formData :", data);
          

      }
    }else{console.log("hacker")}

    event.preventDefault();
    setConformPassword("")
    setPassword("")
    setPhone("")
    setTerm("")
  };

  return (
    <div className="container mt-5 text-center ">
      <div className="row  ">
        <div className="col  border p-2 ">
          <form class="row g-3 d-grid " style={{ placeItems: "center" }}>
            <div class="col-md-4 d-flex ">
              <label for="validationServerUsername" class="form-label me-auto">
                Phone no./email
              </label>
              <div
                className="input-group has-validation  "
                style={{ width: "50vw" }}
              >
                <span className="input-group-text" id="inputGroupPrepend3">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <input
                  type="text"
                  className="form-control is-valid"
                  id="validationServerUsername"
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  required
                />
                <div
                  id="validationServerUsernameFeedback"
                  className="valid-feedback"
                >
                  Please choose a phone.
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ">
              <label for="validationServerUsername" class="form-label me-auto">
                Password
              </label>
              <div
                className="input-group has-validation"
                style={{ width: "50vw" }}
              >
                <span className="input-group-text" id="inputGroupPrepend3">
                  @
                </span>
                <input
                  type="password"
                  class="form-control is-invalid"
                  id="validationServerUsername"
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div
                  id="validationServerUsernameFeedback"
                  class="invalid-feedback"
                >
                  Not match.
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex">
              <label for="validationServerUsername" class="form-label me-auto">
                Conform-password
              </label>
              <br />
              <div class="input-group has-validation" style={{ width: "50vw" }}>
                <span class="input-group-text" id="inputGroupPrepend3">
                  @
                </span>
                <input
                  type="password"
                  className="form-control is-invalid"
                  id="validationServerUsername"
                  aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                  name="conformPassword"
                  value={conformPassword}
                  onChange={(e) => setConformPassword(e.target.value)}
                  required
                />
                <div
                  id="validationServerUsernameFeedback"
                  className="invalid-feedback"
                >
                  Not match.
                </div>
              </div>
            </div>

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input is-invalid"
                  type="checkbox"
                  checked = {term}
                  onChange={(e) => {
                    setTerm(e.target.checked);
                  }}
                  id="invalidCheck3"
                  aria-describedby="invalidCheck3Feedback"
                  required
                />
                <label className="form-check-label" for="invalidCheck3">
                  Agree to terms and conditions
                </label>
                <div id="invalidCheck3Feedback" className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn btn-primary"
                type="submit"
                onClick={handleSubmit}
              >
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

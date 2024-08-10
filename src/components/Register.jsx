import React from "react";
import { useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {


  const [sign, setSign] = useState({
    username :"",
    password :"",
    confirmPassword: '',
  });
 const navigate=useNavigate();

  const handleChange = (e) => {
    setSign({ ...sign, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      const response = await axios.post("http://localhost:5000/register", sign);
      console.log("Response from server:", response.data);
      // Redirection vers la page /profil après la connexion   
      navigate("/login");
    } catch (error) {
      console.error("Error sending data:", error);

  console.error("Error details:", error.response);
}
}  
  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <header className="mb-5">
              <h3 className="mt-0 white-text">Sign-up Form</h3>
              <p className="grey-text mb-4">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <p className="grey-text">
                Vestibulum neque neque, porttitor quis lacinia eu, iaculis id
                dui. Mauris quis velit lectus.
              </p>
            </header>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <form onSubmit={handleSubmit} className="tm-signup-form">
              <div className="input-field">
                <input
                  placeholder="Username"
                  id="username"
                  name="username"
                  type="text"
                  className="validate"
                  onChange={handleChange}
                
                  
                />
              </div>
              <div className="input-field">
                <input
                  placeholder="Password"
                  id="password"
                  name="password"
                  type="password"
                  className="validate"
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <input
                  placeholder="Re-type Password"
                  id="password2"
                  name="password2"
                  type="password"
                  className="validate"
                  onChange={handleChange}
                />
              </div>
              <div className="text-right mt-4">
                <button 
                  type="submit"
                  className="waves-effect btn-large btn-large-white px-4 tm-border-radius-0"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <footer className="row tm-mt-big mb-3">
          <div className="col-xl-12">
            <p className="text-center grey-text text-lighten-2 tm-footer-text-small">
              Copyright © 2024 Riad reda fethi
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Register;


import React, { useState, useEffect } from "react";
import axios from "axios";


const Users = () => {

    const [formData, setFormData] = useState({
      // title: "",
      first_name: "",
      last_name: "",
      zipcode: "",
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post("http://localhost:5000/users", formData);
        console.log("Response from server:", response.data);
      
      } catch (error) {
        console.error("Error sending data:", error);
      }
    };
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      
    }, []);
  

  

  return (
    <div className="register">
      <div className="container">
        <div className="row tm-register-row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 tm-register-col-l">
          <form onSubmit={handleSubmit}>
              <div className="mb-2">
                  <label className="mr-4">
                   <input 
                    className="with-gap"
                    name="title"
                    type="radio"
                    defaultValue="mr"
                  /> 
                  <span>Mr.</span>
                </label> 
                <label className="mr-4">
                  <input
                    className="with-gap"
                    name="title"
                    type="radio"
                    defaultValue="ms"
                  />
                  <span>Ms.</span>
                </label>
                <label>
                  <input
                    className="with-gap"
                    name="title"
                    type="radio"
                    defaultValue="mrs"
                    onChange={handleChange}
                  />
                  <span>Mrs.</span>
                </label>
              </div>
              <div className="input-field">
                <input
                  placeholder="First Name"
                  id="first_name"
                  name="first_name"
                  type="text"
                  className="validate"
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <input
                  placeholder="Last Name"
                  id="last_name"
                  name="last_name"
                  type="text"
                  className="validate"
                  onChange={handleChange}
                />
              </div>
              {/* <div className="input-field">
                <input
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="text"
                  className="validate"
                  onChange={handleChange}
                /> */}
              {/* </div> */}
              <div className="row">
                
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 pr-0 tm-pl-xs-0">
                  <div className="input-field">
                    <input
                      placeholder="Zip Code"
                      id="zipcode"
                      name="zipcode"
                      type="text"
                      className="validate"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="text-right mt-4">
                <button
                  type="submit"
                  className="waves-effect btn-large btn-large-white px-4 black-text"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 tm-register-col-r">
            <header className="mb-5">
              <h3 className="mt-0 text-white">Remplissez votre bio</h3>
              <p className="grey-text">
                Aenean tincidunt, enim nec blandit lobortis, ante enim ultrices
                eros, et laoreet augue libero id nunc. Proin semper feugiat
                ultrices.
              </p>
              <p className="grey-text">
                Aenean a efficitur magna, sed dignissim odio. Praesent pretium
                lectus ac nunc ultrices, ac volutpat orci viverra.
              </p>
            </header>
          </div>
        </div>
        <footer className="row tm-mt-big mb-3">
          <div className="col-xl-12">
            <p className="text-center grey-text text-lighten-2 tm-footer-text-small">
              Copyright © 2024 RIAD reda fethi
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
            
};

export default Users;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useNavigate} from "react-router-dom";
import {useCookies} from 'react-cookie';


const Login = () => {
  const [auth, setAuth] = useState({
    username: "",
    password: "",
  });

  const [,setCookies] = useCookies(["access_token"]);
  const navigate=useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);


  const handleChange = (e) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/login", auth);
      setCookies("access_token",response.data.token)

      window.localStorage.setItem("userID", response.data.adminID);
      window.localStorage.setItem("username", auth.username); 
   
      setSuccessMessage("Connexion réussie !");
      console.log("Réponse du serveur:", response.data);
  
      // Réinitialisation du formulaire   
      setAuth({
        username: "",
        password: "",
      });
  
      // Redirection vers la page /profil après la connexion   
      navigate("/profil");
    } catch (error) {
      setError("Erreur lors de la connexion. Vérifiez vos informations.");
      console.error("Erreur lors de l'envoi de la data:", error);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {}, []);

  return (
    <div className="login">
      <div className="container">
        <div className="row tm-register-row tm-mb-35">
          <h1>Bienvenue dans le blog du foot italien</h1>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 tm-login-l">
            <form onSubmit={handleSubmit} className="tm-bg-black p-5 h-100">
              <div className="input-field">
                <input
                  placeholder="Username"
                  id="username"
                  name="username"
                  type="text"
                  className="validate"
                  onChange={handleChange}
                  value={auth.username}
                />
              </div>
              <div className="input-field mb-5">
                <input
                  placeholder="Password"
                  id="password"
                  name="password"
                  type="password"
                  className="validate"
                  onChange={handleChange}
                  value={auth.password}
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              {successMessage && <p className="success-message">{successMessage}</p>}
              <div className="tm-flex-lr">
                <Link to="#" className="white-text small">
                  Mot de passe oublié ?
                </Link>
                <button
                  type="submit"
                  className="waves-effect btn-large btn-large-white px-4 black-text rounded-0"
                  disabled={loading}
                >
                  {loading ? "Chargement..." : "Login"}
                </button>
              </div>
            </form>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 tm-login-r">
            <header className="font-weight-light tm-bg-black p-5 h-100">
              <h3 className="mt-0 text-white font-weight-light">Your Login</h3>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <p className="mb-0">
                Vestibulum neque neque, porttitor quis lacinia eu, iaculis id
                dui. Mauris quis velit lectus.
              </p>
            </header>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 ml-auto mr-0 text-center">
            <Link
              to="/register"
              className="waves-effect btn-large btn-large-white px-4 black-text rounded-0"
            >
              Creer votre compte
            </Link>
          </div>
        </div>
        <footer className="row tm-mt-big mb-3">
          <div className="col-xl-12 text-center"></div>
        </footer>
      </div>
    </div>
  );
};

export default Login;

import React from "react";

// Importation des composants
import Navbar from "../components/Navbar/Navbar";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";

const Login = () => {
  return (
    <div className="page_login">
      <header>
        <Navbar />
      </header>
      <Form />
      <Footer />
    </div>
  );
};

export default Login;

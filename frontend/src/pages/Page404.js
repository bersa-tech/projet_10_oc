import React from "react";

// Importation des composants
import Error404 from "../components/Error404/Error404";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Page404 = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Error404 />
      <Footer />
    </div>
  );
};

export default Page404;

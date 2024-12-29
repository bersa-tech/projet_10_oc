import React from "react";

// Importation des composants
import Navbar from "../components/Navbar/Navbar";
import HeaderAccount from "../components/HeaderAccount/HeaderAccount";
import Account from "../components/Account/Account";
import Footer from "../components/Footer/Footer";

const User = () => {
  return (
    <div className="page_account">
      <header>
        <Navbar />
      </header>
      <main className="main bg-dark">
        <HeaderAccount />
        <Account
          accountType="Checking"
          accountNumber="x8349"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          accountType="Savings"
          accountNumber="x6712"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          accountType="Credit Card"
          accountNumber="x8349"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </div>
  );
};

export default User;

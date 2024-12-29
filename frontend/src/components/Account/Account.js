import React from "react";
import "./account.css";

const Account = ({ accountType, accountNumber, amount, description }) => {
  return (
    <div>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">
            Argent Bank {accountType} ({accountNumber})
          </h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </div>
  );
};

export default Account;
// utilisation de props ici pour les variables 'accountType', 'accountNumber', 'amount', 'description'

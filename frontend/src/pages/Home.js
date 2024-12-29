import React from "react";
// Importation des composants
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Feature from "../components/Feature/Feature";
import Footer from "../components/Footer/Footer";
// Importation des images
import iconChat from "../assets/icon-chat.webp";
import iconMoney from "../assets/icon-money.webp";
import iconSecurity from "../assets/icon-security.webp";

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Banner />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature
            title="You are our #1 priority"
            content="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            imageSrc={iconChat}
            altText="Chat icon"
          />
          <Feature
            title="More savings means higher rates"
            content="The more you save with us, the higher your interest rate will be!"
            imageSrc={iconMoney}
            altText="Money icon"
          />
          <Feature
            title="Security you can trust"
            content="We use top of the line encryption to make sure your data and money is always safe."
            imageSrc={iconSecurity}
            altText="Security icon"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

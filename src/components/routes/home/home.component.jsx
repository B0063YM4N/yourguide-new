import React from "react";
import "./home.styles.scss";
import Navigation from "../../navigation/navigation.component";
import CardDirectory from "../../cards-directory/cards-directory.component";
import { Destinations } from "../../destinations/destinations-component";
import { AboutUs } from "../../about-us/about-us.component";
import { ContactUs } from "../../contact-us/contact-us.component";
import { Activities } from "../../activities/activities.component";

export const Home = () => {
  return (
    <div>
      <div className="header">
        <Navigation />

        <div className="header-title-container">
          <div className="header-title-container">
            <h1 className="header-title">YOUR GUIDE IN</h1>
            <h1 className="georgia">GEORGIA</h1>
            <p className="header-p">
              Discover the Best Travel Destinations and Create <br />
              Unforgettable Experiences
            </p>
          </div>
        </div>
      </div>

      <AboutUs />
      <CardDirectory />
      <Activities/>
      <Destinations />
      
      <ContactUs/>

    </div>
  );
};

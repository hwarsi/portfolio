import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Resume from "./Component /HomePage /Resume";
import Skills from "./Component /HomePage /Skills";
import SkillChart from "./Component /HomePage /SkillChart";
import Weather from "./Component /HomePage /Weather";
import ContactForm from "./Component /HomePage /ContactForm";
import Education from "./Component /HomePage /Education";
import Introduction from "./Component /HomePage /Introduction";
import About from "./Component /HomePage /About";

ReactDOM.render(
  <div>
    <Introduction />
    <About />
    <Resume />
    <SkillChart />
    <Skills />
    <Weather />
    <ContactForm />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//import App from "./App";

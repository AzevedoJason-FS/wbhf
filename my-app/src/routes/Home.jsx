import { React } from "react";
import Header from "../components/Header";
import News from "../components/News";
import Weather from "../components/Weather";
import Programming from "../components/Programming";

// const _ = require("lodash");

// // const myString = "Moto killed after Hitting bUS WAS FLEEING LAW ";
// // const slug = _.kebabCase(myString);

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="main">
          <div style={{width: '68%'}}>
          <div className="sponsor-block">
            <img src="/global-images/WBHF-banner.jpeg" alt="bank"/>
          </div>
         <News />
          </div>
          <div className="right-column">
            <Weather />
            <h2 className="title" style={{marginTop:'1rem'}}>Programming</h2>
            <Programming />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

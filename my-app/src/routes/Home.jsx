import { React } from "react";
import Header from "../components/Header";
import News from "../components/News";
import Weather from "../components/Weather";
import Programming from "../components/Programming";

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
            <div style={{margin: '0 0 20px 0'}}>
            <iframe src="https://tunein.com/embed/player/s27449/" style={{width:'100%', height:'100px'}} scrolling="no" frameborder="no"></iframe>
            </div>
            <Weather />
            <h2 className="title" style={{margin: '20px 0'}}>Programming</h2>
            <Programming />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import { React } from "react";
import Header from "../components/Header";
import News from "../components/News";
import Programming from "../components/Programming";

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="main">
          <div style={{ width: "68%", marginTop: "4rem" }}>
            <div className="sponsor-block">
              <img src="/global-images/WBHF-banner.jpeg" alt="bank" />
            </div>
            <News />
          </div>
          <div className="right-column">
            <div style={{ position: "sticky", top: "1rem", paddingLeft: '10px' }}>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '20px', paddingBottom: '10px', borderBottom: '1px solid #e4e4e4'}}>
                <span className="dot"></span>
                <h2 className="title">Programming</h2>
              </div>
              <Programming />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

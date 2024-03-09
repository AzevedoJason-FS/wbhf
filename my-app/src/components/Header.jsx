import { Link } from "react-router-dom";
import Weather from "./Weather";

const Header = () => {
  const date = new Date();
  return (
    <header>
      <div className="header_1">
      <p style={{ textAlign: "start", width: '203px' }}>EST 1946</p>
        <img src="/global-images/wbhf-logo.svg" alt="WBHF Logo" style={{ width: '264px'}} />
        <p style={{ textAlign: "end", }}>
            {new Date(date).toLocaleDateString("en-us", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
          </p>
      </div>
      <nav>
        <div style={{ maxWidth: "1400px", width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", boxSizing: 'border-box' }}>
          <div style={{width: '112px'}}></div>
          <div className="nav-link-container">
            <Link to={`/`} className="nav-link">
              News
            </Link>
            <Link to={`/`} className="nav-link">
              Station
            </Link>
            <Link to={`/`} className="nav-link">
              Programming
            </Link>
            <Link to={`/`} className="nav-link">
              Contact
            </Link>
          </div>
          <Weather />
        </div>
      </nav>
    </header>
  );
};

export default Header;

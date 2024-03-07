import { Link } from "react-router-dom";

const Header = () => {
  const date = new Date();
  return (
    <header>
      <div className="header_1" style={{ borderBottom: "1px solid #303030" }}>
        <h2 style={{ textTransform: "uppercase", fontSize: "16px", margin: "2px 0" }}>Reliable news from bartow county</h2>
        <img src="/global-images/wbhf-logo.svg" alt="WBHF Logo" style={{ marginBottom: "2px" }} />
        <h2 style={{ textTransform: "uppercase", fontSize: "16px", margin: "2px 0", display: "flex", width: "303px", justifyContent: "flex-end" }}>
          Bartow's #1 news radio station
        </h2>
      </div>
      <div className="header_1" style={{ borderTop: "2px solid #303030", marginTop: "2px" }}>
        <p style={{ width: "303px", textAlign: "start" }}>EST 1946</p>
        <p style={{ width: "360px", textAlign: "center" }}>BARTOW, GA</p>
        <p style={{ width: "300px", textAlign: "end" }}>
          {new Date(date).toLocaleDateString("en-us", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
        </p>
      </div>
      <nav>
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
      </nav>
    </header>
  );
};

export default Header;

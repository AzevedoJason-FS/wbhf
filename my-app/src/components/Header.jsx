import { Link } from "react-router-dom";

const Header = () => {
  const date = new Date();
  return (
    <header>
      <div className="header_1">
        
        <img src="/global-images/wbhf-logo.svg" alt="WBHF Logo" style={{ marginBottom: "2px" }} />

      </div>
      <nav>
        <div style={{maxWidth: '1400px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'}}>
        <p style={{ textAlign: "start", color: 'white', width: '175px' }}>EST 1946</p>
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
        <p style={{ textAlign: "end", color: 'white' }}>
          {new Date(date).toLocaleDateString("en-us", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
        </p>
        </div>
   
      </nav>
    </header>
  );
};

export default Header;

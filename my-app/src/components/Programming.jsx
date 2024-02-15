import * as React from "react";

const Programming = () => {
  const currentDay = new Date().getDay();
  const date = new Date();

  return (
    <div className="programming-widget">
      <p className="sub-title">{new Date(date).toLocaleDateString("en-us", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</p>

      {currentDay === 1 || 2 || 4 ? (
        <>
          <div className="programming-box">
            <div className="programming-date">
              <p>6 AM - 8 AM</p>
            </div>
            <div className="programming-event">
              <p>WBHF Local News</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>9 AM - 12 PM</p>
            </div>
            <div className="programming-event">
              <p>Lite Adult Contemporary Music</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>12 PM</p>
            </div>
            <div className="programming-event">
              <p>WBHF Local News</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>3 PM - 5 PM</p>
            </div>
            <div className="programming-event">
              <p>Lite Adult Contemporary Music</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>5 PM</p>
            </div>
            <div className="programming-event">
              <p>WBHF Local News</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>6:30 PM - 6 AM</p>
            </div>
            <div className="programming-event">
              <p>Lite Adult Contemporary Music</p>
            </div>
          </div>
        </>
      ) : currentDay === 3 ? (
        <>
          <div className="programming-box">
            <div className="programming-date">
              <p>6 AM - 8 AM</p>
            </div>
            <div className="programming-event">
              <p>WBHF Local News</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>9 AM - 12 PM</p>
            </div>
            <div className="programming-event">
              <p>Lite Adult Contemporary Music</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>12 PM</p>
            </div>
            <div className="programming-event">
              <p>WBHF Local News</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>3 PM - 5 PM</p>
            </div>
            <div className="programming-event">
              <p>Lite Adult Contemporary Music</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>5 PM</p>
            </div>
            <div className="programming-event">
              <p>WBHF Local News</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>6:30 PM - 6 AM</p>
            </div>
            <div className="programming-event">
              <p>Lite Adult Contemporary Music</p>
            </div>
          </div>
        </>
      ) : currentDay === 5 ? (
        <>
          <div className="programming-box">
            <div className="programming-date">
              <p>6 AM - 8 AM</p>
            </div>
            <div className="programming-event">
              <p>WBHF Local News</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>9 AM - 12 PM</p>
            </div>
            <div className="programming-event">
              <p>Lite Adult Contemporary Music</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>12 PM</p>
            </div>
            <div className="programming-event">
              <p>WBHF Local News</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>3 PM - 5 PM</p>
            </div>
            <div className="programming-event">
              <p>Lite Adult Contemporary Music</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>5 PM</p>
            </div>
            <div className="programming-event">
              <p>WBHF Local News</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>6:30 PM - 6 AM</p>
            </div>
            <div className="programming-event">
              <p>Lite Adult Contemporary Music</p>
            </div>
          </div>
        </>
      ) : currentDay === 6 ? (
        <>
          <div className="programming-box">
            <div className="programming-date">
              <p>6 AM - 8 AM</p>
            </div>
            <div className="programming-event">
              <p>WBHF Local News</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>9 AM - 12 PM</p>
            </div>
            <div className="programming-event">
              <p>Lite Adult Contemporary Music</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>12 PM</p>
            </div>
            <div className="programming-event">
              <p>WBHF Local News</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>3 PM - 5 PM</p>
            </div>
            <div className="programming-event">
              <p>Lite Adult Contemporary Music</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>5 PM</p>
            </div>
            <div className="programming-event">
              <p>WBHF Local News</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>6:30 PM - 6 AM</p>
            </div>
            <div className="programming-event">
              <p>Lite Adult Contemporary Music</p>
            </div>
          </div>
        </>
      ) : currentDay === 0 ? (
        <>
          <div className="programming-box">
            <div className="programming-date">
              <p>6 AM - 8 AM</p>
            </div>
            <div className="programming-event">
              <p>WBHF Local News</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>9 AM - 12 PM</p>
            </div>
            <div className="programming-event">
              <p>Lite Adult Contemporary Music</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>12 PM</p>
            </div>
            <div className="programming-event">
              <p>WBHF Local News</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>3 PM - 5 PM</p>
            </div>
            <div className="programming-event">
              <p>Lite Adult Contemporary Music</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>5 PM</p>
            </div>
            <div className="programming-event">
              <p>WBHF Local News</p>
            </div>
          </div>
          <div className="programming-box">
            <div className="programming-date">
              <p>6:30 PM - 6 AM</p>
            </div>
            <div className="programming-event">
              <p>Lite Adult Contemporary Music</p>
            </div>
          </div>
        </>
      ) : (
        <p>Unable to load future programming</p>
      )}
      <h2 className="sub-title" style={{ margin: "1rem 0 1rem 0" }}>
        Headlines at the bottom of the hour 24/7
      </h2>
      <h3 style={{textDecoration: 'underline'}}>Cartersville City Council</h3>
      <p><b>Meeting live broadcast:</b> First and Third Thursdays of the month at 7 PM.</p>
      <p><b>Rebroadcast:</b> Friday mornings at 9:30 AM.</p>
    </div>
  );
};

export default Programming;

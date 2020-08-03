import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal";
import GreetingContainer from "../greeting/greeting_container";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  spots() {
    const spots = this.props.spots;
    let spotsArray = Object.values(spots);
    spotsArray = spotsArray.map((spot, idx) => {
      return (
        <div key={idx} className="individual-spot">
          <h3 className="spot-date-time">
            {/* {spot.check_in} - {spot.check_out} */}
          </h3>
          <h3 className="spot-description">{spot.spot_name}</h3>
          <Link to={`spots/${spot.id}/`}>
            <img src={spot.photoUrl} alt="" />
          </Link>
        </div>
      );
    });

    return spotsArray;
  }

  render() {
    const left = window.left;
    const mid = window.mid;
    const right = window.right;

    return (
      <div className="home-container">
        <div>
          <aside className="aside-1">
            <a className="aside-2">
              Find a location near you for a quick test to learn if you have
              COVID-19.
            </a>
          </aside>
        </div>
        <Modal />
        <header id="background">
          <Link to="/" className="header-link"></Link>
          <GreetingContainer />
          <div className="middle-section">
            <section>
              <br />
              <div className="introducing">AerBnB</div>
              <br />
              <h1 className="olympian">
                Go out and begin
                <br />
                your journey -<br />
                one destination at a time.
              </h1>
              <br />
              <div className="medalist">
                Let finding a place to sleep be the least <br />
                of your worries.
              </div>
              <Link to="/spots">
                <button className="learnmore">Explore</button>
              </Link>
            </section>
          </div>
        </header>

        <div className="home-3-squares">
          <div className="home-square">
            <img className="home-img" src={left} />
            <span className="top">Unique Stays</span>
            <div className="parent">
              <span className="bottom">
                Spaces that are more than just a place to sleep.
              </span>
            </div>
          </div>

          <div className="home-square">
            <img className="home-img" src={mid} />
            <span className="top">Online Experiences</span>
            <div className="parent">
              <span className="bottom">
                Unique activities we can do together, led by a world of hosts.
              </span>
            </div>
          </div>

          <div className="home-square">
            <img className="home-img" src={right} />
            <span className="top">Entire Homes</span>
            <div className="parent">
              <span className="bottom">
                Comfortable private places, with room for friends or family.
              </span>
            </div>
          </div>
        </div>

        <div className="hero">
          <div className="hero-left">
            <h1>
              {" "}
              Host a hero: help house frontline responders around the world{" "}
            </h1>
            <Link to="/spots">
              <button className="hero-button">Get involved</button>
            </Link>
          </div>
          <div className="hero-right">
            <p>
              With frontline stays, AerBnB is partnering with our hosts to
              connect 100,000 healthcare providers, relief workers, and first
              responders with places to stay that allow them to be close to
              their patients - and safely distanced from their own families.
            </p>
          </div>
        </div>
        <div>{this.spots()}</div>
      </div>
    );
  }
}

export default Home;

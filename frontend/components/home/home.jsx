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

    const scranton = window.scranton;
    const oceancity = window.oceancity;
    const newport = window.newport;
    const lakeplacid = window.lakeplacid;
    const kingston = window.kingston;
    const woodstock = window.woodstock;
    const easthampton = window.easthampton;
    const hudson = window.hudson;

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
                Get out and begin
                <br />
                your journey -<br />
                One destination at a time.
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

        <div className="online-experience">
          <h2>Online Experiences</h2>
          <div className="online-experience-row">
            <p>
              Meet people all over the world while trying something new.
              <br />
              Join live, interactive video sessions led by one-of-a-kind hosts
              <br />
              —all without leaving home.
            </p>
            <Link to="/spots">
              <button className="online-experience-button">Explore All</button>
            </Link>
          </div>

          <div className="exp-container">
            <div className="exp-left">
              <div className="exp-left1">
                <img src="" alt="" />
              </div>
              <span className="exp-description"></span>
            </div>
            <div className="exp-right"></div>
          </div>
        </div>

        <div className="hero">
          <div className="hero-left">
            <h1>
              Host a hero: help house frontline responders around the world
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
        <h3 className="escape-text">Your next escape</h3>
        <div className="escape">
          <div className="escape-1">
            <div className="escape-place">
              <div className="escape-place-left">
                <img src={scranton} />
              </div>
              <div className="escape-place-right">
                <div className="escape-place-name">
                  <h5>Scranton</h5>
                  <p>
                    <span>$700</span>/night avg.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="escape-2">
            <div className="escape-place">
              <div className="escape-place-left">
                <img src={newport} />
              </div>
              <div className="escape-place-right">
                <div className="escape-place-name">
                  <h5>Newport</h5>
                  <p>
                    <span>$120</span>/night avg.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="escape-3">
            <div className="escape-place">
              <div className="escape-place-left">
                <img src={kingston} />
              </div>
              <div className="escape-place-right">
                <div className="escape-place-name">
                  <h5>Kingston</h5>
                  <p>
                    <span>$200</span>/night avg.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="escape-4">
            <div className="escape-place">
              <div className="escape-place-left">
                <img src={easthampton} />
              </div>
              <div className="escape-place-right">
                <div className="escape-place-name">
                  <h5>East Hampton</h5>
                  <p>
                    <span>$920</span>/night avg.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="escape-5">
            <div className="escape-place">
              <div className="escape-place-left">
                <img src={oceancity} />
              </div>
              <div className="escape-place-right">
                <div className="escape-place-name">
                  <h5>Ocean City</h5>
                  <p>
                    <span>$330</span>/night avg.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="escape-6">
            <div className="escape-place">
              <div className="escape-place-left">
                <img src={lakeplacid} />
              </div>
              <div className="escape-place-right">
                <div className="escape-place-name">
                  <h5>Lake Placid</h5>
                  <p>
                    <span>$410</span>/night avg.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="escape-7">
            <div className="escape-place">
              <div className="escape-place-left">
                <img src={woodstock} />
              </div>
              <div className="escape-place-right">
                <div className="escape-place-name">
                  <h5>Woodstock</h5>
                  <p>
                    <span>$175</span>/night avg.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="escape-8">
            <div className="escape-place">
              <div className="escape-place-left">
                <img src={hudson} />
              </div>
              <div className="escape-place-right">
                <div className="escape-place-name">
                  <h5>Hudson</h5>
                  <p>
                    <span>$210</span>/night avg.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="home-footer"></footer>
        {/* <div>{this.spots()}</div> */}
      </div>
    );
  }
}

export default Home;

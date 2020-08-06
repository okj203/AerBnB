import React from "react";
import SingleSpotMap from "../../map/single_spot_map";

class Spot extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {

    // }
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render() {
    let randomRating = [5.0, 4.67, 4.3, 4.88, 3.7, 4.8, 4.9, 3.8, 4.6, 4.75][
      Math.floor(Math.random() * 10)
    ];
    const { spot } = this.props;
    // const {
    //   spot_name,
    //   description,
    //   address,
    //   price,
    //   lat,
    //   lng,
    //   city,
    // } = this.props.spot;
    return spot ? (
      <div className="spot-show-container">
        <div className="spot-show-name">
          <h2>{spot.spot_name}</h2>
        </div>
        <div className="spot-show-rating">
          <div className="star">
            <i className="fas fa-star"></i>
            {randomRating}
          </div>
        </div>
        <div className="spot-show-desc">
          <h2>Spot description</h2>
          <p>{spot.description}</p>
        </div>

        <div className="spot-show-info">
          <h2>Sleeping arrangement</h2>
          <div className="spot-show-info-container">
            <div className="spot-bedroom">
              <i className="fas fa-bed"></i>
              <br />
              <span>Bedroom 1</span>
              <br />
              <p>1 king bed</p>
            </div>
            <div className="spot-common">
              <i className="fas fa-couch"></i>
              <br />
              <span>Common spaces</span>
              <p>1 couch</p>
            </div>
          </div>
        </div>
        <div className="spot-show-amenities">
          <h2>Amenities</h2>
          <div className="amenities-1">
            <div>
              <i className="fas fa-wifi"></i>Wifi
            </div>
            <div>
              <i className="fas fa-car"></i>Free parking
            </div>
            <div>
              <i className="fas fa-amazon"></i>Amazon TV
            </div>
            <div>
              <i className="fas fa-burn"></i>Heating
            </div>
            <div>
              <i className="fas fa-fire-extinguisher"></i>Fire extinguisher
            </div>
          </div>
          <div className="amenities-2">
            <div>
              <i className="fas fa-kitchen"></i>Kitchen
            </div>
            <div>
              <i className="fas fa-swimming-pool"></i>Pool
            </div>
            <div>
              <i className="fas fa-fan"></i>Air conditioning
            </div>
            <div>
              <i className="fas fa-bell"></i>Smoke alarm
            </div>
            <div>
              <i className="fas fa-cocktail"></i>Bar
            </div>
          </div>
        </div>
        <div className="show-map">
          <h2>Location</h2>
          <SingleSpotMap />
        </div>
      </div>
    ) : null;
  }
}

export default Spot;

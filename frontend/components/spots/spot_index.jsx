import React from "react";
import SpotIndexItem from "./spot_index_item";
import Map from "../map/spot_map";

class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  spotsIndex() {
    const spots = this.props.spots.map((spot) => (
      <SpotIndexItem spot={spot} key={spot.id} />
    ));
    return spots;
  }

  render() {
    return (
      <div className="spots-div">
        <div className="spots-right">
          <div className="google-map">
            <Map spots={this.props.spots} />
          </div>
        </div>
        <div className="spots-left">
          <ul className="spots-list">{this.spotsIndex()}</ul>
        </div>
      </div>
    );
  }
}

export default SpotIndex;

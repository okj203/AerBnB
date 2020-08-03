import React from "react";

class Spot extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  render() {
    return <div>{this.props.spot.description}</div>;
  }
}
export default Spot;

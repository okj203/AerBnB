import React from "react";

class SpotIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // debugger;
    this.props.history.push(`/spots/${this.props.spot.id}`);
  }

  showSpot() {
    // debugger;
    let { spot_name, price } = this.props.spot;
    return (
      <div>
        <div className="spot-name" onClick={this.handleClick}>
          <h3>{spot_name}</h3>
        </div>
        <div className="spot-info">
          <div className="spot-basic-info">
            2 guests • 1 bedroom • 2 beds • 1 bath
          </div>
          <div className="spot-basic-amenities">
            Wifi • Air conditioning • Kitchen • Washer
          </div>
        </div>
        <div className="spot-price">
          <span>${price}</span>/night
        </div>
      </div>
    );
  }

  render() {
    // debugger;
    return <div>{this.showSpot()}</div>;
  }
}

export default SpotIndexItem;

import React from "react";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    return <div></div>;
  }
}

export default ReviewForm;

import React from "react";

export default class Props extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

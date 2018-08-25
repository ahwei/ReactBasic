import React from "react";

export default class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hello React By State"
    };
  }
  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

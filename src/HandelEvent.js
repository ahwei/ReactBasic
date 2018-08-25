import React from "react";

export default class HandelEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Handel Event"
    };
    this.handelChange = this.handelChange.bind(this);
  }
  handelChange(evt) {
    const changeValue = evt.target.value;
    this.setState({ name: changeValue });
  }
  render() {
    const { name } = this.state;
    return (
      <div>
        <input value={name} onChange={this.handelChange} />
        <h1>Hello!!! {name} ~</h1>
      </div>
    );
  }
}

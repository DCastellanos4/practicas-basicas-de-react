import React, { Component } from "react";

export default class HijoNumeros extends Component {

  sumaPadre = () => {
    this.props.suma(this.props.num);
  };
  render() {
    return (
      <div>
        <button onClick={this.sumaPadre}>Sumar {this.props.num}</button>
      </div>
    );
  }
}

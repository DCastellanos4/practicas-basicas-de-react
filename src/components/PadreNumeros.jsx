import React, { Component } from "react";
import HijoNumeros from "./HijoNumeros";
export default class PadreNumeros extends Component {
  state = {
    suma: 0,
    list: [4, 5, 7, 19],
  };
  suma = (numSum) => {
    this.setState({
      suma: parseInt(this.state.suma) + parseInt(numSum),
    });
  };
  aleatorios = () => {
    var list = this.state.list;
    for (let i = 0; i <= 2; i++) {
      console.log(i);
      var num = parseInt(Math.random() * 120) + 1;
      //AÑADIMOS EL NUMERO A LA LISTA CON HTML
      list.push(num);
      this.setState({ list: this.state.list });
    }
    return list;
  };
  meteNum = () => {
    var num = parseInt(Math.random() * 120) + 1;
    this.state.list.push(num);
    this.setState({
      list: this.state.list,
    });
  };
  render() {
    return (
      <div>
        <h1>Lista de numeros aleatorios</h1>
        <h2>La suma es: {parseInt(this.state.suma)}</h2>
        {this.state.list.map((num, index) => {
          return (
            <li key={index}>
              {num}
              <HijoNumeros num={num} key={index} suma={this.suma} />
            </li>
          );
        })}
        <button onClick={this.meteNum}>Añade nums</button>
      </div>
    );
  }
}

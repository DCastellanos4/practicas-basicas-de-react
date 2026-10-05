import { Component } from "react";
import HijoDeporte from "./HijoDeporte";
class PadreDeporte extends Component {
  deportes = ["Voley", "Futbol", "Ping-Pong", "Padel"];
  state = {
    deportFav: "",
  };
  elegirFav = (deportSeleccionado) => {
    this.setState({
      deportFav: deportSeleccionado,
    });
  };
  render() {
    return (
      <div>
        <h1>Deporte favorito del padre</h1>
        <h2 style={{ color: "red" }}>{this.state.deportFav}</h2>
        {this.deportes.map((sport, index) => {
          return (
            <HijoDeporte
              deporte={sport}
              key={index}
              elegirFav={this.elegirFav}
            />
          );
        })}
      </div>
    );
  }
}
export default PadreDeporte;

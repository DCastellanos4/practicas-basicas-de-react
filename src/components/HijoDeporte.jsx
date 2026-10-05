import { Component } from "react";
class HijoDeporte extends Component {
  state = {
    mensaje: "",
  };
  seleccionarFav = () => {
    //CUANDO DESEEMOS, LLAMAMOS AL PADRE MEDIANTE SU METODO EN PROPS
    this.props.elegirFav(this.props.deporte);
  };
  render() {
    return (
      <div>
        <h2 style={{ color: "red" }}>Deporte: {this.props.deporte}</h2>
        <h2>{this.state.mensaje}</h2>
        <button onClick={this.seleccionarFav}>Hacer favorito</button>
      </div>
    );
  }
}
export default HijoDeporte;

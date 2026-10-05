const { Component } = require("react");
class Contador extends Component {
  //La declaracion de variables ya no utiliza JS
  //ES decir const, var, let
  numero = 0;
  incrementarNum = () => {
    //Para acceder a cualquier elemento de la clase se utiliza la palabra this
    this.numero += 1;
    this.valor += 1;
    console.log(this.numero);
  };
  decrementarNum = () => {
    this.numero -= 1;
    this.valor += 1;
    console.log(this.numero);
  };
  //La sintaxis de la llamada a los metodos ha cambiado en render()
  //puedo llamar a onclick sin lambda y sin parentesis

  // LAS VARIABLES STATE SE DECLARAN EN UN OBJTO DE LA CLASE
  state = {
    valor: parseInt(this.props.cont),
  };
  incrementarValor = () => {
    //PARA MODIFICAR EL VALOR DE CUALQUIER ELEMENTO DEL
    //STATE S UTILIZA setState y NOS PERMITE MODIFICAR UNA O VARIAS VARIABLES A LA VEZ
    this.setState({
      valor: this.state.valor + 1,
    });
  };
  decrementarValor = () => {
    this.setState({
      valor: this.state.valor - 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Contador JSX: {this.props.cont}</h1>
        <h2>{this.state.valor}</h2>
        <button onClick={this.incrementarValor}>+</button>
        <button onClick={this.decrementarValor}>-</button>
      </div>
    );
  }
}
export default Contador;

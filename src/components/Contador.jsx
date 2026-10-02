const { Component } = require("react");
class Contador extends Component {
  //La declaracion de variables ya no utiliza JS
  //ES decir const, var, let
  numero = 0;
  incrementarNum = () => {
    //Para acceder a cualquier elemento de la clase se utiliza la palabra this
    this.numero += 1;
    console.log(this.numero);
  };
  decrementarNum = () => {
    this.numero -= 1;
    console.log(this.numero);
  };
  //La sintaxis de la llamada a los metodos ha cambiado en render()
  //puedo llamar a onclick sin lambda y sin parentesis
  render() {
    return (
      <div>
        <h1>Contador JSX</h1>
        <h2>{this.numero}</h2>
        <button onClick={this.incrementarNum}>+</button>
        <button onClick={this.decrementarNum}>-</button>
      </div>
    );
  }
}
export default Contador;

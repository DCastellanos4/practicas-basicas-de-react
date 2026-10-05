import { Component } from "react";

class DibujaNombres extends Component {
  state = {
    nombre: ["Diana", "Antonio", "Adrian", "Lucia"],
  };

  generaNombre = () => {
    //PODEMOS UTILIZAR DIRECTAMENTE EL METODO DE ARRAY PUSH
    //SI ES UN OBJETO SIMPLE (STRING,INT) NO PODEMOS ASIGNAR
    this.state.nombre.push("NUEVO NOMBRE");
    //SI NO REASIGNAMOS EL VALOR MEDIANTE setState, NO LO VEREMOS
    this.setState({
      nombres: this.state.nombre,
    });
  };
  render() {
    return (
      <div>
        <h1>Dibujos complejos render</h1>
        <button onClick={this.generaNombre}>Genera nombre</button>
        {
          //ESTO ES CODIGO JSX DE REACT EN EL RENDER
          this.state.nombre.map((nombre, index) => {
            return (
              <h4 style={{ color: "blue" }} key={index}>
                {nombre}
              </h4>
            );
          })
        }
      </div>
    );
  }
}
export default DibujaNombres;

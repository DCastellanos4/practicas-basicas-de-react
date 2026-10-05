import React, { Component } from "react";

export default class Comic extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.comic.titulo}</h4>
        <img
          src={this.props.comic.imagen}
          style={{ width: "60px", height: "80px" }}
          alt={this.props.comic.descripcion}
        ></img>
        <br></br>
        <button
          onClick={() => {
            this.props.seleccionarComic(this.props.comic);
          }}
        >
          ❤️
        </button>
        <button
          onClick={() => {
            this.props.deleteComic(this.props.indice);
          }}
        >
          Eliminar
        </button>
      </div>
    );
  }
}

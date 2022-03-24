import React, { Component } from "react";

export class EventosES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log(this);
    this.setState({ contador: this.state.contador + 1 });
  }
  restar(e) {
    console.log(this);
    this.setState({ contador: this.state.contador - 1 });
  }

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de clase ES6</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}

// Properties Initializer
export class EventosES7 extends Component {
  state = {
    contador: 0,
  };

  //Arrow functions
  sumar = (e) => {
    console.log(this);
    this.setState({ contador: this.state.contador + 1 });
  };
  restar = (e) => {
    console.log(this);
    this.setState({ contador: this.state.contador - 1 });
  };

  render() {
    return (
      <div>
        <h2>Eventos en Componentes de clase ES7</h2>
        <h3>{this.state.contador}</h3>
        <nav>
          <button onClick={this.sumar}>+</button>
          <button onClick={this.restar}>-</button>
        </nav>
      </div>
    );
  }
}

function Boton(props) {
  return <button onClick={props.myOnClick}>Botón hecho componente</button>;
}

export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(e);
    console.log(e.nativeEvent);
    console.log(e.target);
    console.log(e.nativeEvent.target);
    console.log(mensaje);
  };

  render() {
    return (
      <div>
        <h2>Más sobre Eventos</h2>
        <button
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
        >
          Saludar
        </button>
        {/* Evento Personalizado */}
        {/* <Boton
          onClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
        /> */}
        <Boton
          myOnClick={(e) =>
            this.handleClick(e, "Hola pasando parámetro desde un evento")
          }
        />
      </div>
    );
  }
}

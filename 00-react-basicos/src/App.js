import logo from "./logo.svg";
import "./App.css";
import Componentes from "./components/Componentes";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";
import RenderizadoCondicional from "./components/RenderizadoCondicional";
import RenderizadoElementos from "./components/RenderizadoElementos";
import Eventos from "./components/Eventos";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <hr />
          <section>
            <Componentes msg="Hola soy un mensaje enviado de App" />
            <hr />
            <Propiedades
              cadena="Esto es una cadena de TEXTO"
              numero={20}
              booleano={false}
              arreglo={[1, 2, 3]}
              objeto={{ nombre: "Gian", correo: "gpaucar@gmail.com" }}
              funcion={(num) => num * num}
              elementoReact={<i>Esto es un elemento React</i>}
              componenteReact={
                <Componentes msg="Soy un componente pasado como PROPS" />
              }
            />
            <hr />
            <Estado/>
            <hr />
            <RenderizadoCondicional/>
            <hr />
            <RenderizadoElementos />
            <hr />
            <Eventos />
          </section>
        </section>
      </header>
    </div>
  );
}

export default App;

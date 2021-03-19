import React from 'react';
import './App.css';
import Validacion from './components/ValidationComponent/Validacion';
import CharComponent from './components/CharComponent/CharComponent';
//import Salida from './components/Salida/Salida';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entrada: "",
      otherState: 'some other value',
      myArray: [],
    }
  }

  getValor = (event) => {
    //console.log("sss")
    this.setState(
      {
        entrada: event.target.value
      })
    this.dividete(event.target.value)

  }
  actualiza = () => {
    
  }

  dividete = (palabra) => {
    //let arrayDeCadenas= [...this.state.myArray];
    var arrayDeCadenas = palabra.split("");
    //console.log(palabra);
    this.setState({ myArray: arrayDeCadenas });
  }
  borraletra = (id) => {
    let copiaArray = [...this.state.myArray];
     
    copiaArray.splice(id, 1);
    let stringArray=copiaArray.join('');
    //personas[id].nombre = 'Borrado';
    this.setState({ myArray: copiaArray ,
      entrada:stringArray
    });
    //console.log("hola bro")
  }
  render() {
    let listaString = null;
    listaString = (
      <div>
        {this.state.myArray.map((elemento, id) => {
          return <CharComponent
            key={id}
            letra={elemento}
            borrando={() => this.borraletra(id)} />
        })}
      </div>
    )
    return (
      <div className="App">
        <h1>Introduzca un string</h1>
        <p>Si es tan amable</p>
        Entrada:<input type="text" onChange={this.getValor} value={this.state.entrada} />
        <Validacion longitudString={this.state.entrada.length} />
        {listaString}



      </div>
    );

  }
}

export default App;

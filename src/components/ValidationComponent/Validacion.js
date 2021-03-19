import React from 'react';

class Validacion extends React.Component {

  render() {
    let texto = null;
    if (this.props.longitudString < 5) {
      texto = (<p>Texto demasiado corto</p>)
      // this.cambiaEstado('texto demasiado corto')
      //this.state.mivalor=this.state.posiblesEstados[0].name;
    } else {
      texto = (<p>Texto demasiado largo</p>)
      // this.cambiaEstado('texto demasiado largo')
      //this.state.mivalor=this.state.posiblesEstados[1].name;
      // this.state.mivalor='texto demasiado largo';
    }

    return (
      <div>
        <p >Condiciones del texto: </p>
        {texto}
      </div >
    )
  }
};

export default Validacion;
import React from 'react';
import './CharComponent.css';

class CharComponent extends React.Component {
    render() {
        return (
            <div className="estiloCharComponent">
                
                <p onClick={this.props.borrando} >{this.props.letra}</p>
            </div >
        )
    }
};

export default CharComponent;
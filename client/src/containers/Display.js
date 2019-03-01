import React, { Component } from 'react';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }


  render() {
    return (
      <div>
        <p id="dunder">Dunderbot says...</p>
        <div className="display">
          {this.props.scene.map((elem) => <span display="line"><p className="char">{elem.char}:</p> <p className="line">{elem.line}</p></span>)}
        </div>
      </div>
    );
  }
}

export default Display;

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
      <div className="display">
        {this.props.scene.map((elem) => <span display="line"><p className="char">{elem.char}:</p> <p className="line">{elem.line}</p></span>)}
      </div>
    );
  }
}

export default Display;

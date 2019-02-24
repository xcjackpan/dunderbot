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
        {this.props.scene.map((elem) => <p>{elem.char}: {elem.line}</p>)}
      </div>
    );
  }
}

export default Display;

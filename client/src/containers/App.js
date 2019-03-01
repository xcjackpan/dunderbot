import React, { Component } from 'react';
import axios from 'axios';
import Display from './Display.js';
import '../assets/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      background: "",
      scene: [],
    }
  }

  generateScene = () => {
    axios.get("/scene").then(response => {
      let characters = response.data;
      let para = "";
      const len = characters.length;
      for(var i = 0; i < len - 1; i++) {
        para += (characters[i] + ',')
      }
      para += characters[len - 1];
      axios.get("/line?people=" + para).then(response => {
        let lines = response.data;
        let tmp = [];
        for (var i = 0; i < len; i++) {
          tmp.push({char: characters[i], line: lines[i]});
        }
        this.setState({scene: tmp});
      });
    });
  }

  render() {
    return (
      <div className="App">
        <button className="generate" onClick={this.generateScene}>Hit me!</button>
        <Display scene={this.state.scene} />
      </div>
    );
  }
}

export default App;

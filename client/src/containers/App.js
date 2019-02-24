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
    axios.get("http://localhost:8080/scene").then(response => {
      let characters = response.data;
      let para = "";
      const len = characters.length;
      for(var i = 0; i < len - 1; i++) {
        para += (characters[i] + ',')
      }
      para += characters[len - 1];
      axios.get("http://localhost:8080/line?people=" + para).then(response => {
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
        <Display scene={this.state.scene} />
        <button onClick={this.generateScene}>Generate</button>
      </div>
    );
  }
}

export default App;

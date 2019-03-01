const express = require('express')
const path = require('path');
const app = express()
const port = 8080
const generate = require('./data_processing/generate_lines.js')
const cors = require('cors')

app.use(cors())

app.get('/line', (req, res) => {
  const people = req.query.people.split(','); //Receives a list of characters separated by commas
  let len = people.length;
  let ret = [];
  for (let i = 0; i < len; i++) {
    ret.push(generate.generateLine(people[i]));
  }
  res.send(ret);
});

app.get('/scene', (req, res) => {
  res.send(generate.generateDialogue());
});

app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(port)
const express = require('express')
const app = express()
const port = 3000
const generate = require('./data_processing/generate_lines.js')

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/line', (req, res) => {
  const people = req.query.people.split(','); //Receives a list of characters separated by commas
  let len = people.length();
  let ret = [];
  for (let i = 0; i < len; i++) {
    ret.push(generate.generateLine(people[i]));
  }
  return ret;
});

app.get('/fun', (req, res) => res.send(generate.generateLine("creed")))

app.listen(port)
const express = require('express')
const app = express()
const port = 3000
let fs = require('fs')
let result = [];

let allowed = ["Michael", "Jim", "Pam", "Dwight", "Stanley", "Creed", "Kevin", "Phyllis", "Toby", "Erin", "Ryan", "Kelly", "Meredith", "Angela", "Oscar"];
let michael = [];
let jim = [];
let pam = [];
let dwight = [];
let stanley = [];
let creed = [];
let kevin = [];
let phyllis = [];
let toby = [];
let erin = [];
let ryan = [];
let kelly = [];
let meredith = [];
let angela = [];
let oscar = [];

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port);

fs.readFile('../speakingorder.csv', 'utf8', function(err, contents) {
  result = contents.split(/\r?\n/);
  //console.log(result);

  let len = result.length;

  for (var i = 1; i < len; i++) {
    let line1 = result[i - 1];
    let line2 = result[i];

    line1 = line1.split(',');
    line2 = line2.split(',');

    if (!allowed.includes(line1[1]) || !allowed.includes(line2[1])) {
      continue;
    }

    if (line1[0] === line2[0]) {
      switch(line1[1]) {
        case "Michael": michael.push(line2[1]);
          break;
        case "Jim": jim.push(line2[1]);
          break;
        case "Pam": pam.push(line2[1]);
          break;
        case "Dwight": dwight.push(line2[1]);
          break;
        case "Stanley": stanley.push(line2[1]);
          break;
        case "Creed": creed.push(line2[1]);
          break;
        case "Kevin": kevin.push(line2[1]);
          break;
        case "Phyllis": phyllis.push(line2[1]);
          break;
        case "Toby": toby.push(line2[1]);
          break;
        case "Erin": erin.push(line2[1]);
          break;
        case "Ryan": ryan.push(line2[1]);
          break;
        case "Kelly": kelly.push(line2[1]);
          break;
        case "Meredith": meredith.push(line2[1]);
          break;
        case "Angela": angela.push(line2[1]);
          break;
        case "Oscar": oscar.push(line2[1]);
          break;
      }
    }
  }

  jsonify("Michael");
  jsonify("Jim");
  jsonify("Pam");
  jsonify("Dwight");
  jsonify("Stanley");
  jsonify("Creed");
  jsonify("Kevin");
  jsonify("Phyllis");
  jsonify("Toby");
  jsonify("Erin");
  jsonify("Ryan");
  jsonify("Kelly");
  jsonify("Meredith");
  jsonify("Angela");
  jsonify("Oscar");
});

function jsonify(charname) {
  let tmpobj = {
    name: charname,
  }
  switch(charname) {
    case "Michael": tmpobj["next"] = michael;
      break;
    case "Jim": tmpobj["next"] = jim;
      break;
    case "Pam": tmpobj["next"] = pam;
      break;
    case "Dwight": tmpobj["next"] = dwight;
      break;
    case "Stanley": tmpobj["next"] = stanley;
      break;
    case "Creed": tmpobj["next"] = creed;
      break;
    case "Kevin": tmpobj["next"] = kevin;
      break;
    case "Phyllis": tmpobj["next"] = phyllis;
      break;
    case "Toby": tmpobj["next"] = toby;
      break;
    case "Erin": tmpobj["next"] = erin;
      break;
    case "Ryan": tmpobj["next"] = ryan;
      break;
    case "Kelly": tmpobj["next"] = kelly;
      break;
    case "Meredith": tmpobj["next"] = meredith;
      break;
    case "Angela": tmpobj["next"] = angela;
      break;
    case "Oscar": tmpobj["next"] = oscar;
      break;
  }
  let json = JSON.stringify(tmpobj);
  fs.writeFile('line_chains/' + charname + '.json', json, 'utf8', () => {});
}
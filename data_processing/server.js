const express = require('express')
const app = express()
const port = 3000
let fs = require('fs')
let result = [];

let allowed = ["Michael", "Jim", "Pam", "Dwight", "Stanley", "Creed", "Kevin", "Phyllis", "Toby", "Erin", "Ryan", "Kelly", "Meredith", "Angela", "Oscar"];
let scene_start = [];
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

let michael_lines = {'SENTENCE_START': []};
let jim_lines = {'SENTENCE_START': []};
let pam_lines = {'SENTENCE_START': []};
let dwight_lines = {'SENTENCE_START': []};
let stanley_lines = {'SENTENCE_START': []};
let creed_lines = {'SENTENCE_START': []};
let kevin_lines = {'SENTENCE_START': []};
let phyllis_lines = {'SENTENCE_START': []};
let toby_lines = {'SENTENCE_START': []};
let erin_lines = {'SENTENCE_START': []};
let ryan_lines = {'SENTENCE_START': []};
let kelly_lines = {'SENTENCE_START': []};
let meredith_lines = {'SENTENCE_START': []};
let angela_lines = {'SENTENCE_START': []};
let oscar_lines = {'SENTENCE_START': []};

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port);

//Builds Michael's lines chain
function buildcharchain(charfilename, linesobj) {
  fs.readFile('line_data/' + charfilename + '.csv', 'utf8', function(err,contents) {
    result = contents.split(/\r?\n/);

    let len = result.length;

    for (var i = 0; i < len; i++) {
      let sentences = result[i].split(/[\.|\?|\!]/);
      let numsentences = sentences.length;

      for (var n = 0; n < numsentences; n++) {
        let words = sentences[n].split(' ');
        let numwords = words.length;

        let push = words[0].replace(/[^0-9a-z\-\'\%]/gi, '');
        if (push != '' && push != '\'') {
          linesobj['SENTENCE_START'].push(push);
        }

        let flag = false;
        for (let j = 1; j < numwords; j++) {
        
          if (words[j - 1].indexOf('[') != -1 || words[j - 1].indexOf(']') != -1 || words[j].indexOf('[') != -1 || words[j].indexOf(']') != -1) {
            flag = !flag;
            continue;
          }

          if (flag) continue;
    
          let push = words[0].replace(/[^0-9a-z\-\'\%]/gi, '');

          if (linesobj.hasOwnProperty(words[j - 1]) && push != '' && push != '\'') {
            linesobj[words[j - 1]].push(words[j].replace(/[^0-9a-z\-\'\%]/gi, ''));
          } else if (push != '' && push != '\'') {
            linesobj[words[j - 1]] = [words[j].replace(/[^0-9a-z\-\'\%]/gi, '')];
          }
    
          if (j === numwords - 1) {
            if (linesobj.hasOwnProperty(words[j])) {
              linesobj[words[j]].push('.');
            } else {
              linesobj[words[j]] = ['.'];
            }
          }
        }

      }
    }

    let json = JSON.stringify(linesobj);
    fs.writeFile('line_chains/' + charfilename + '.json', json, 'utf8', () => {});
  });
};

buildcharchain('jim_lines', jim_lines);
buildcharchain('michael_lines', michael_lines);
buildcharchain('pam_lines', pam_lines);
buildcharchain('dwight_lines', dwight_lines);
buildcharchain('stanley_lines', stanley_lines);
buildcharchain('creed_lines', creed_lines);
buildcharchain('kevin_lines', kevin_lines);
buildcharchain('erin_lines', erin_lines);
buildcharchain('ryan_lines', ryan_lines);
buildcharchain('kelly_lines', kelly_lines);
buildcharchain('toby_lines', toby_lines);
buildcharchain('phyllis_lines', phyllis_lines);
buildcharchain('oscar_lines', oscar_lines);
buildcharchain('angela_lines', angela_lines);
buildcharchain('meredith_lines', meredith_lines);

//Read for speaking order
fs.readFile('line_data/speakingorder.csv', 'utf8', function(err, contents) {
  result = contents.split(/\r?\n/);
  let len = result.length;

  for (var i = 1; i < len; i++) {
    let line1 = result[i - 1];
    let line2 = result[i];

    line1 = line1.split(',');
    line2 = line2.split(',');

    if (!allowed.includes(line1[1]) || !allowed.includes(line2[1])) {
      continue;
    }

    if (line1[0] != line2[0]) { //Not the same scene, line2 holds the new scene
      scene_start.push(line2[1]);
    } else if (line1[0] === line2[0]) {
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

  let speaking_order = {
    "scene_start": scene_start,
    "Angela": angela,
    "Creed": creed,
    "Dwight": dwight,
    "Erin": erin,
    "Jim": jim,
    "Kelly": kelly,
    "Kevin": kevin,
    "Meredith": meredith,
    "Michael": michael,
    "Oscar": oscar,
    "Pam": pam,
    "Phyllis": phyllis,
    "Ryan": ryan,
    "Stanley": stanley,
    "Toby": toby
  }

  jsonify(speaking_order);
});

function jsonify(tmpobj) {
  let json = JSON.stringify(tmpobj);
  fs.writeFile('order_chains/order.json', json, 'utf8', () => {});
}
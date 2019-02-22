const angela = require('./line_chains/angela_lines.json')
const creed = require('./line_chains/creed_lines.json')
const dwight = require('./line_chains/dwight_lines.json')
const erin = require('./line_chains/erin_lines.json')
const jim = require('./line_chains/jim_lines.json')
const kelly = require('./line_chains/kelly_lines.json')
const kevin = require('./line_chains/kevin_lines.json')
const meredith = require('./line_chains/meredith_lines.json')
const michael = require('./line_chains/michael_lines.json')
const oscar = require('./line_chains/oscar_lines.json')
const pam = require('./line_chains/pam_lines.json')
const phyllis = require('./line_chains/phyllis_lines.json')
const ryan = require('./line_chains/ryan_lines.json')
const stanley = require('./line_chains/stanley_lines.json')
const toby = require('./line_chains/toby_lines.json')
const order = require('./order_chains/order.json')

function generateSentence(character) {
  let word = character.SENTENCE_START[Math.floor(Math.random() * character.SENTENCE_START.length)];
  let sentence = word;
  
  while (character[word]) {
    word = character[word][Math.floor(Math.random() * character[word].length)]
    sentence += word === '.' ? '.' : ` ${word}`
  }
  return `${sentence} `;
}

function generateLine(character) {
  const numSentences = Math.ceil(Math.random() * 10);
  let line = '';
  for (let i = 0; i < numSentences; i++) {
    line += generateSentence(character);
  }
  return line;
}

function generateDialogue(num) {
  let characters = [];
  let currchar = order.scene_start[Math.floor(Math.random() * order.scene_start.length)];
  characters.push(currchar);
  for (let i = 0; i < num; i++) {
    currchar = order.currchar[Math.floor(Math.random() * order.currchar.length)];
    characters.push(currchar);
  }
  return characters;
}
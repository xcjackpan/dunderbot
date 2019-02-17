#include <iostream>
#include <vector>
#include <string>
#include <fstream>
#include <sstream>
using namespace std;

enum CharacterNames {
  Michael = 1,
  Jim = 2,
  Pam = 3,
  Dwight = 4,
  Creed = 5,
  Kevin = 6,
  Stanley = 7,
  Phyllis = 8,
  Meredith = 9,
  Angela = 10,
  Oscar = 11,
  Toby = 12,
  Gabe = 13,
  Darryl = 14,
  Erin = 15,
  Kelly = 16,
  Ryan = 17
};

CharacterNames getcharname(string name) {
  if (name == "Michael") return Michael;
  if (name == "Jim") return Jim;
  if (name == "Pam") return Pam;
  if (name == "Dwight") return Dwight;
  if (name == "Creed") return Creed;
  if (name == "Kevin") return Kevin;
  if (name == "Stanley") return Stanley;
  if (name == "Phyllis") return Phyllis;
  if (name == "Meredith") return Meredith;
  if (name == "Angela") return Angela;
  if (name == "Oscar") return Oscar;
  if (name == "Toby") return Toby;
  if (name == "Gabe") return Gabe;
  if (name == "Darryl") return Darryl;
  if (name == "Erin") return Erin;
  if (name == "Kelly") return Kelly;
  if (name == "Ryan") return Ryan;
}

int main() {
  ifstream data("../speakingorder.csv");
  stringstream strstream;
  string line1;
  string line2;

  strstream << data.rdbuf();

  vector<string> michael = {};
  vector<string> jim = {};
  vector<string> pam = {};
  vector<string> dwight = {};
  vector<string> creed = {};
  vector<string> kevin = {};
  vector<string> stanley = {};
  vector<string> phyllis = {};
  vector<string> meredith = {};
  vector<string> angela = {};
  vector<string> oscar = {};
  vector<string> toby = {};
  vector<string> gabe = {};
  vector<string> darryl = {};
  vector<string> erin = {};
  vector<string> kelly = {};
  vector<string> ryan = {};

  while (true) {

    if (!getline(strstream, line1)) {
      break;
    }
    if (!getline(strstream, line2)) {
      break;
    }
    
    string::size_type pos1 = line1.find(',');
    string::size_type pos2 = line2.find(',');

    string sce1 = line1.substr(0, pos1);
    string sce2 = line2.substr(0, pos2);

    if (sce1 == sce2) {
      string char1 = line1.substr(pos1 + 1);
      string char2 = line2.substr(pos2 + 1);

      switch (getcharname(char1)) {
        case Michael: michael.emplace_back(char2);
            break;
        case Jim: jim.emplace_back(char2);
            break;
        case Pam: pam.emplace_back(char2);
            break;
        case Dwight: dwight.emplace_back(char2);
            break;
        case Creed: creed.emplace_back(char2);
            break;
        case Kevin: kevin.emplace_back(char2);
            break;
        case Stanley: stanley.emplace_back(char2);
            break;
        case Phyllis: phyllis.emplace_back(char2);
            break;
        case Angela: angela.emplace_back(char2);
            break;
        case Oscar: oscar.emplace_back(char2);
            break;
        case Toby: toby.emplace_back(char2);
            break;
        case Gabe: gabe.emplace_back(char2);
            break;
        case Darryl: darryl.emplace_back(char2);
            break;
        case Erin: erin.emplace_back(char2);
            break;
        case Kelly: kelly.emplace_back(char2);
            break;
        case Ryan: ryan.emplace_back(char2);
            break;
      }
    }
  }

  //Each character has an array of the characters who follow them in speaking order, preserving multiplicity
}
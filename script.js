var createCandidate = function(name, partyColor)
{
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;

  politician.announceCandidate = function()
  {
    console.log(this.name);
  };

  politician.announceCandidate();

  politician.tallyUpTotalVotes = function()
  {

    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++)
    {
      this.totalVotes = this.totalVotes + this.electionResults[i];

      // CODE BELOW: TO ADD UP EVERYTHING AND SEE IT!!!
      //console.log(this.totalVotes);
    }

  };

  return politician;
};


var jack = createCandidate ("Jack Pott", [132, 17, 11]);
var holly = createCandidate ("Holly Wood", [245, 141, 136]);

console.log("Candidate 1's name is " + jack.name + " and his party color is " + jack.partyColor + "!");
console.log("Candidate 2's name is " + holly.name + " and her party color is " + holly.partyColor + "!");

jack.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

holly.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

jack.electionResults[9] = 1;
jack.electionResults[4] = 17;
jack.electionResults [43] = 11;

holly.electionResults [9] = 28;
holly.electionResults [4] = 38;
holly.electionResults[43] = 27;

console.log(jack.electionResults);
console.log(holly.electionResults);


var setStateResults = function (state)
{
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];

  theStates[state].winner = null;

  if (jack.electionResults[state] > holly.electionResults[state])
  { theStates[state].winner = jack;
  }
  else if (jack.electionResults[state] < holly.electionResults[state])
  { theStates[state].winner = holly;
  }

  var stateWinner = theStates[state].winner;

  if (stateWinner !== null)
  {theStates[state].rgbColor = stateWinner.partyColor;
  }
  else
  {theStates[state].rgbColor = [11, 32, 57]
  }

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

  candidate1Name.innerText = jack.name;
  candidate2Name.innerText = holly.name;

  candidate1Results.innerText = jack.electionResults[state];
  candidate2Results.innerText = holly.electionResults[state];

  if (theStates[state].winner === null){
      winnersName.innerText = "DRAW";
  } else {
      winnersName.innerText = theStates[state].winner.name;
  }

};

jack.tallyUpTotalVotes();
holly.tallyUpTotalVotes();

console.log("Jack recieved " + jack.totalVotes + " total votes!");
console.log("Holly received " + holly.totalVotes + " total votes!");

var winner = null;

if (jack.totalVotes > holly.totalVotes)
{
  winner = jack.name;}
else if (holly.totalVotes > jack.totalVotes)
{
  winner = holly.name;}
else
{
  winner = "TIE!";}

console.log("THE WINNER OF THE ELECTION IS.... " + winner + "!!!");


var countryTable = document.getElementById('countryResults');

countryTable.children[0].children[0].children[0].innerText = jack.name;
countryTable.children[0].children[0].children[1].innerText = jack.totalVotes;
countryTable.children[0].children[0].children[2].innerText = holly.name;
countryTable.children[0].children[0].children[3].innerText = holly.totalVotes;
countryTable.children[0].children[0].children[5].innerText = winner;

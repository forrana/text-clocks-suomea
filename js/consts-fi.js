const TIME_FORMAT = { hour: 'numeric', minute: 'numeric', hour12: true };
const TIME_DELTA = 2;

const timeElement = document.querySelector("#time");

const minutesWordsMatrix = new Map([
  [ 20, "kaksikymmenta" ],
  [ 5, "viisi" ],
  [ 10, "kymmenen" ],
  [ 15, "vartti" ],
  [ 30, "puoli" ],
  [ 99, "melkein" ],
])

const boundingsWordsMatrix = new Map([
  [ "past", "yli" ],
  [ "to", "vaille" ],
])

const hoursWordsMatrix = new Map([
  [ 1, "yksi" ],
  [ 2, "kaksi" ],
  [ 3, "kolme" ],
  [ 4, "neljä" ],
  [ 5, "viisi" ],
  [ 6, "kuusi" ],
  [ 7, "seitsemän" ],
  [ 8, "kahdeksan" ],
  [ 9, "yhdeksän" ],
  [ 10, "kymmenen" ],
  [ 11, "yksitoista" ],
  [ 12, "kaksitoista" ],
  [ "oclock", "tasan" ],
  ])

export { TIME_FORMAT, TIME_DELTA, hoursWordsMatrix, boundingsWordsMatrix, minutesWordsMatrix, timeElement }

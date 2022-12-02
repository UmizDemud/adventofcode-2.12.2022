var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream('input.txt')
});

const dict = {
	'X': 1,
	'Y': 2,
	'Z': 3,
	'A': 1,
	'B': 2,
	'C': 3,
}

function rps(p, o) {
  if (p === 1 && o === 3
    || p === 2 && o === 1
    || p === 3 && o === 2) {
      return 6
  } else if (p === 1 && o === 2
    || p === 2 && o === 3
    || p === 3 && o === 1) {
      return 0;
  } else {
    return 3;
  }

}

let total = 0;

myInterface.on('line', function (line) {
  [opponent, player] = line.split(' ');
  total += rps(dict[player], dict[opponent]);
  total += dict[player];
}).on('close', () => {
  console.log(total)
});

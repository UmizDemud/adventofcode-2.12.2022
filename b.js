var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream('input.txt')
});

const dict = {
	'X': 0,
	'Y': 3,
	'Z': 6,
	'A': 1,
	'B': 2,
	'C': 3,
}

function rps(r, o) {
  if (r === 6 && o === 3
    || r === 3 && o === 1
    || r === 0 && o === 2) {
      return 1
  } else if (r === 6 && o === 2
    || r === 3 && o === 3
    || r === 0 && o === 1) {
      return 3;
  } else {
    return 2;
  }

}

let total = 0;

myInterface.on('line', function (line) {
  [opponent, result] = line.split(' ');
  total += rps(dict[result], dict[opponent]);
  total += dict[result]
}).on('close', () => {
  console.log(total)
});

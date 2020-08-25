var roles = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
var names = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
var i =0;
var randomNumber = 0;
var removed;
var useTwitch = document.querySelector('#names');

randomize();

function randomize() {
  if (names.length !== roles.length) {
    useTwitch.innerHTML = "Aantal rollen zijn ongelijk aan het aantal namen."
    return;
  }
  for (var i = 0; i < names.length; i++) {
    randomNumber = randomIntInc(roles.length);
    console.log(names[i] + " = " + roles[randomNumber]);
    fillNameTable(i);
    removed = roles.splice(randomNumber, 1);
  }
}

function randomIntInc(high, low) {
  var returnio = Math.floor(Math.random() * high);
  return returnio;
}

function fillNameTable(i) {
  row = useTwitch.insertRow(-1);
  cell = row.insertCell(0);
  cell2 = row.insertCell(1);
  cell.innerHTML = names[i];
  cell2.innerHTML = roles[randomNumber];
}

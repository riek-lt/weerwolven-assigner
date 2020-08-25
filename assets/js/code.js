// var roles = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
var roles = [];
// var names = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p'];
var names = [];
var i = 0;
var randomNumber = roleNumber = 0;
var removed;
var useTwitch = document.querySelector('#names');
var roleAmount = document.querySelector('#roleAmount');
var nameArea = document.getElementById("nameArea");



function assignRoles() {
  document.getElementById("nameFill").style.display = "none";
  document.getElementById("roleFill").style.display = "none";
  document.getElementById("goKnop").style.display = "none";
  addPlainsToRoles();
  randomize();
}

function randomize() {
  if (names.length !== roles.length) {
    useTwitch.innerHTML = "Aantal rollen zijn ongelijk aan het aantal namen."
    return;
  }
  useTwitch.style.display = "inline";
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

function updateNameNumber() {
  names = nameArea.value.replace(/\r\n/g, "\n").split("\n");
  nameAmount.innerHTML = "Er zijn nu <b>" + names.length + "</b> spelers in het spel.";
  console.log(names);
}

function updateRoleNumber() {
  roleNumber = getSelectedCheckboxValues('color').length;
  roleNumber = roleNumber + parseInt(document.getElementById("regWolf").value);
  roleNumber = roleNumber + parseInt(document.getElementById("regBurg").value);
  roleAmount.innerHTML = "Er zijn nu <b>" + roleNumber + "</b> rollen in het spel.";
  console.log(getSelectedCheckboxValues('color'));
}

function addPlainsToRoles() {
  roles = getSelectedCheckboxValues('color');
  for (var i = 0; i < parseInt(document.getElementById("regWolf").value); i++) {
    roles.push("Wolf");
  }
  for (var i = 0; i < parseInt(document.getElementById("regBurg").value); i++) {
    roles.push("Burger");
  }
}

function getSelectedCheckboxValues(name) {
  const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
  let roleValues = [];
  checkboxes.forEach((checkbox) => {
    roleValues.push(checkbox.value);
  });
  return roleValues;
}

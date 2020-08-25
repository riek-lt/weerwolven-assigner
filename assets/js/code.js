var numbers = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];
var names = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
var i = 0;
var number = 0;
var removed;
var useTwitch = document.querySelector('#names');

randomize();
function randomize() {
  for (var i = 0; i < names.length; i++) {
    number = randomIntInc(numbers.length);
    console.log(names[i] + " = " + numbers[number]);
    useTwitch.innerHTML += names[i] + " = " + numbers[number] + "<br>";
    removed = numbers.splice(number, 1);
  }
}

function randomIntInc(high, low) {
  var returnio = Math.floor(Math.random() * high);
  return returnio;
}

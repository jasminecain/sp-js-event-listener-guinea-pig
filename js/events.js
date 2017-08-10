var outputText = document.getElementById("output-target");
var h1tag = document.getElementById('page-title');
//Header mouse events
function h1MouseOver(event) {
  outputText.innerHTML = 'You moved your mouse over the header.';
}

function h1MouseOut(event) {
  outputText.innerHTML = 'You left me!!';
}

h1tag.addEventListener('mouseover', h1MouseOver);
h1tag.addEventListener('mouseout', h1MouseOut);

// Section mouse events
var artclSection = document.getElementsByClassName('article-section');

function articleClick(MouseEvent) {
  var elementText = MouseEvent.target.innerHTML;
  outputText.innerHTML = 'You click on the ' + elementText + 'section';
}
// to add an array listener to array of DOM elements is a for loop over ElementsByClassName
for (var i = 0; i < artclSection.length; i++) {
  artclSection.item(i).addEventListener('click', articleClick);
}

//Output element mirrors input field
var mirrorText = document.getElementById("keypress-input");

mirrorText.addEventListener("keyup", function (event) {
  console.log("event", event);
  outputText.innerHTML = event.target.value;
});

//Text animation
var guineaPig = document.getElementById('guinea-pig');
var colorMeBlue = document.getElementById('add-color');
var hulkifyMe = document.getElementById('make-large');
var captureMe = document.getElementById('add-border')
var roundMeUp = document.getElementById('add-rounding');

document.getElementById('add-color')
  colorMeBlue.addEventListener('click', function() {
  guineaPig.classList.toggle('blue');
  });

document.getElementById('make-large')
  hulkifyMe.addEventListener('click', function() {
  guineaPig.classList.toggle('enlarge');
  });

document.getElementById('add-border')
  captureMe.addEventListener('click', function() {
  guineaPig.classList.toggle('borderitup');
  });

document.getElementById('add-rounding')
  roundMeUp.addEventListener('click', function() {
  guineaPig.classList.toggle('rounded');
  });

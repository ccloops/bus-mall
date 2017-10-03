'use strict';

Pics.all = [];
Pics.lastDisplayed = [];
Pics.totalClicksCounter = 25;
Pics.section = document.getElementById('images');
Pics.resultsList = document.getElementById('results');


function Pics(name, filepath, altText) {
  this.name = name;
  this.filepath = filepath;
  this.altText = altText;
  this.views = 0;
  this.clicks = 0;
  Pics.all.push(this);

}

// make new image instances
new Pics('bag', 'img/bag.jpg', 'bag');
new Pics('banana', 'img/banana.jpg', 'banana');
new Pics('bathroom', 'img/bathroom.jpg', 'bathroom');
new Pics('boots', 'img/bag.jpg', 'boots');
new Pics('breakfast', 'img/breakfast.jpg', 'breakfast');
new Pics('bubblegum', 'img/bubblegum.jpg', 'bubblegum');
new Pics('chair', 'img/chair.jpg', 'chair');
new Pics('cthulhu', 'img/cthulhu.jpg', 'cthulhu');
new Pics('dog-duck', 'img/dog-duck.jpg', 'dog-duck');
new Pics('dragon', 'img/dragon.jpg', 'dragon');
new Pics('pen', 'img/pen.jpg', 'pen');
new Pics('pet-sweep', 'img/pet-sweep.jpg', 'pet-sweep');
new Pics('scissors', 'img/scissors.jpg', 'scissors');
new Pics('shark', 'img/shark.jpg', 'shark');
new Pics('sweep', 'img/sweep.png', 'sweep');
new Pics('tauntaun', 'img/tauntaun.jpg', 'tauntaun');
new Pics('unicorn', 'img/unicorn.jpg', 'unicorn');
new Pics('usb', 'img/usb.gif', 'usb');
new Pics('water-can', 'img/water-can.jpg', 'water-can');
new Pics('wine-glass', 'img/wine-glass.jpg', 'wine-glass');

//refer to images from HTML
var firstEl = document.getElementById('first');
var secondEl = document.getElementById('second');
var thirdEl = document.getElementById('third');

function randomImage() {
  var randomFirst = Math.floor(Math.random() * Pics.all.length);
  var randomSecond = Math.floor(Math.random() * Pics.all.length);
  var randomThird = Math.floor(Math.random() * Pics.all.length);

  while(Pics.lastDisplayed.includes(randomSecond) || Pics.lastDisplayed.includes(randomFirst) || Pics.lastDisplayed.includes(randomThird) || randomFirst === randomSecond || randomSecond === randomThird || randomFirst === randomThird) {
    randomFirst = Math.floor(Math.random() * Pics.all.length);
    randomSecond = Math.floor(Math.random() * Pics.all.length);
    randomThird = Math.floor(Math.random() * Pics.all.length);
  }

  //update src for first image
  firstEl.src = Pics.all[randomFirst].filepath;
  firstEl.alt = Pics.all[randomFirst].altText;

  //update src for second image
  secondEl.src = Pics.all[randomSecond].filepath;
  secondEl.alt = Pics.all[randomSecond].altText;

  //update src for third image
  thirdEl.src = Pics.all[randomThird].filepath;
  thirdEl.alt = Pics.all[randomThird].altText;

  //increment the number of times the left and right were displayed

  Pics.all[randomFirst].views ++;
  Pics.all[randomSecond].views++;
  Pics.all[randomThird].views++;

  Pics.lastDisplayed[0] = randomFirst;
  Pics.lastDisplayed[1] = randomSecond;
  Pics.lastDisplayed[2] = randomThird;
}

//callback function click handler
function handleClick(event) {
  if(event.target.id === 'images') {
    return alert('Click on a pic!');
  }

  //track number of total clicks
  Pics.totalClicksCounter--;

  //count votes for each image
  for(var i = 0; i < Pics.all.length; i++) {
    if(event.target.alt === Pics.all[i].altText) {
      Pics.all[i].clicks ++;
    }
  }
  if(Pics.totalClicksCounter === 0) {
    Pics.section.removeEventListener('click', handleClick);
    showResults();
  }
  randomImage();
}


function showResults() {
  for(var i = 0; i < Pics.all.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = Pics.all[i].name + ' has ' + Pics.all[i].clicks + ' votes in ' + Pics.all[i].views + ' times shown.';
    Pics.resultsList.appendChild(liEl);
  }
}

//add event listener
Pics.section.addEventListener('click', handleClick);

//render images on page load
randomImage();

'use strict';

Pics.all = [];
Pics.doNotUse = [];
Pics.workingArray = [];
Pics.totalClicksCounter = 25;


function Pics(picName, filePath) {
  this.picName = picName;
  this.filePath = filePath;
  this.views = 0;
  this.clicks = 0;
  Pics.all.push(this);

}

new Pics('bag', 'img/bag.jpg');
new Pics('banana', 'img/banana.jpg');
new Pics('bathroom', 'img/bathroom.jpg');
new Pics('boots', 'img/bag.jpg');
new Pics('breakfast', 'img/breakfast.jpg');
new Pics('bubblegum', 'img/bubblegum.jpg');
new Pics('chair', 'img/chair.jpg');
new Pics('cthulhu', 'img/cthulhu.jpg');
new Pics('dog-duck', 'img/dog-duck.jpg');
new Pics('dragon', 'img/dragon.jpg');
new Pics('pen', 'img/pen.jpg');
new Pics('pet-sweep', 'img/pet-sweep.jpg');
new Pics('scissors', 'img/scissors.jpg');
new Pics('shark', 'img/shark.jpg');
new Pics('sweep', 'img/sweep.png');
new Pics('tauntaun', 'img/tauntaun.jpg');
new Pics('unicorn', 'img/unicorn.jpg');
new Pics('usb', 'img/usb.gif');
new Pics('water-can', 'img/water-can.jpg');
new Pics('wine-glass', 'img/wine-glass.jpg');


// random function

Pics.random = function() {
  var randomIndex = Math.floor(Math.random() * Pics.all.length);

  if(Pics.doNotUse.indexOf(randomIndex) !== -1) {
    Pics.random();
  }

  Pics.workingArray.push(Pics.all[randomIndex]);
  Pics.doNotUse.push(randomIndex);
  Pics.all[randomIndex].views++;
};

Pix.displayImages = function() {
  for(var i = 1; i < 4; i++) {
    Pics.random();
    var imgEl = document.getElementById(toString(i));
    imgEl.src = Pics.workingArray[i].filePath;
  }
};

Pix.redisplayImages = function() {
  for(var i = 0; i < 3; i++) {
    Pix.workingArray.shift();
  }
  Pix.displayImages();
};

Pix.clearDoNotUseArray = function() {
  for(var i = 0; i < 3; i++) {
    Pix.doNotUse.shift();
  }
};


imgEl.addEventListener('click', randomImage);



// event handler

// event listeners

'use strict';

Pics.all = [];
// Pics.doNotUse = [];
Pics.workingArray = [];
Pics.totalClicksCounter = 25;
Pics.imgEl1 = document.getElementById('one');
Pics.imgEl2 = document.getElementById('two');
Pics.imgEl3 = document.getElementById('three');
Pics.allImages = document.getElementById('images');
Pics.ulEl = document.getElementById('results');


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

    Pics.random = function(){
      return Math.floor(Math.random() * (Pics.all.length - 3));
    };

    Pics.workingArray[0][0].filePath

    Pics.getImages = function(){
      var object1 = Pics.all.splice(Pics.random(), 1);
      var object2 = Pics.all.splice(Pics.random(), 1);
      var object3 = Pics.all.splice(Pics.random(), 1);
      Pics.workingArray = [object1, object2, object3];
      for (var i = 0; i < Pics.workingArray.length; i++){
        Pics.workingArray[i][0].views++;



  // if(Pics.doNotUse.indexOf(randomIndex) !== -1) {
  //   Pics.random();
  // }
  //
  // Pics.workingArray.push(Pics.all[randomIndex]);
  // Pics.doNotUse.push(randomIndex);
  // Pics.all[randomIndex].views++;
};

for (var i = 0; i < Pics.workingArray.length; i++){
    Pics.all = Pics.all.concat(Pics.workingArray[i][0]);
  }

Pics.displayImages = function() {
  Pics.random();
  Pics.imgEl1.src = Pics.workingArray[0].filePath;
  Pics.random();
  Pics.imgEl2.src = Pics.workingArray[1].filePath;
  Pics.random();
  Pics.imgEl3.src = Pics.workingArray[2].filePath;

};

//event handling

Pics.redisplayImages = function() {
  for(var i = 0; i < 3; i++) {
    Pics.workingArray.shift();
  }
  Pics.displayImages();
};

// Pics.clearDoNotUseArray = function() {
//   for(var i = 0; i < 3; i++) {
//     Pics.doNotUse.shift();
//   }
// };

Pics.clickImg1 = function() {
  Pics.all[Pics.doNotUse[0]].clicks++;
};

Pics.clickImg2 = function() {
  Pics.all[Pics.doNotUse[1]].clicks++;
};

Pics.clickImg3 = function() {
  Pics.all[Pics.doNotUse[2]].clicks++;
};

Pics.reLoadPage = function() {
  if(Pics.totalClicksCounter > 0) {
    redisplayImages();
    clearDoNotUseArray();
    Pics.totalClicksCounter--;
    return;
  } else {
    Pics.displayResults();
  }
};

// Pics.imgEl1.addEventListener('click', Pics.clickImg1);
// Pics.imgEl2.addEventListener('click', Pics.clickImg2);
// Pics.imgEl3.addEventListener('click', Pics.clickImg3);
Pics.allImages.addEventListener('click', function(event) {
  if (event.target.id === 'one') {
    Pics.clickImg1();
  };
  if (event.target.id === 'two') {
    Pics.clickImg2();
  };
  if (event.target.id === 'three') {
    Pics.clickImg3();
  };
});


Pics.displayResults = function() {
  Pix.allImages.innerHTML = '';
  for(var i = 0; i < Pics.all.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = Pics.all[i].clicks + ' votes for the ' + Pics.all[i].picName;
    Pics.ulEl.appendChild(liEl);
  }
};

Pics.displayImages();

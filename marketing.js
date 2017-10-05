'use strict';

Pics.all = [];
Pics.lastDisplayed = [];
Pics.totalClicksCounter = 25;
Pics.section = document.getElementById('images');
Pics.resultsList = document.getElementById('results');
Pics.viewsArray = [];
Pics.clicksArray = [];
Pics.nameArray = [];

function Pics(name, filepath, altText) {
  this.name = name;
  this.filepath = filepath;
  this.altText = altText;
  this.views = 0;
  this.clicks = 0;
  Pics.all.push(this);

}

new Pics('bag', 'img/bag.jpg', 'bag');
new Pics('banana', 'img/banana.jpg', 'banana');
new Pics('bathroom', 'img/bathroom.jpg', 'bathroom');
new Pics('boots', 'img/boots.jpg', 'boots');
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

var marketingTable = document.getElementById('report');


function makeHeaderRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Item';
  trEl.appendChild(thEl);

  for(var i in Pics.all) {
    thEl = document.createElement('th');
    thEl.textContent = Pics.all[i].name;
    trEl.appendChild(thEl);
  }
  marketingTable.appendChild(trEl);
};

makeHeaderRow();

function makeViewsRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Views';
  trEl.appendChild(thEl);

  for(var i = 0; i < Pics.all.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = JSON.parse(localStorage.picsAll)[i].views;
    trEl.appendChild(tdEl);
  }
  marketingTable.appendChild(trEl);
}

makeViewsRow();

function makeClicksRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Clicks';
  trEl.appendChild(thEl);

  for(var i in Pics.all) {
    var tdEl = document.createElement('td');
    tdEl.textContent = JSON.parse(localStorage.picsAll)[i].clicks;
    trEl.appendChild(tdEl);
  }
  marketingTable.appendChild(trEl);
}

makeClicksRow();

function makePercentageRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Percentage of Clicks When Viewed';
  trEl.appendChild(thEl);

  for(var i in Pics.all) {
    var tdEl = document.createElement('td');
    tdEl.textContent = Math.floor(((JSON.parse(localStorage.picsAll)[i].clicks) / (JSON.parse(localStorage.picsAll)[i].views)) * 100) + '%';
    trEl.appendChild(tdEl);
  }
  marketingTable.appendChild(trEl);
}

makePercentageRow();

function makeRecommendedRow() {
  var trEl = document.createElement('tr');

  var thEl = document.createElement('th');
  thEl.textContent = 'Recommended?';
  trEl.appendChild(thEl);

  for(var i = 0; i < Pics.all.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = isRecommended();
    trEl.appendChild(tdEl);
  }
  marketingTable.appendChild(trEl);
}

makeRecommendedRow();

function isRecommended() {
  if (Math.floor(((JSON.parse(localStorage.picsAll)[i].clicks) / (JSON.parse(localStorage.picsAll)[i].views)) * 100) < 50) {
    return 'No';
  } else {
    return 'Yes';
  }
}
isRecommended();

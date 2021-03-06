'use strict';

Pics.all = [];
Pics.lastDisplayed = [];
Pics.totalClicksCounter = 25;
Pics.section = document.getElementById('images');
Pics.resultsList = document.getElementById('results');
Pics.viewsArray = [];
Pics.clicksArray = [];
Pics.nameArray = [];


// +++++++++++++++++++++++++++++++++++++++++
// CONSTRUCTOR FUNCTION
// +++++++++++++++++++++++++++++++++++++++++

function Pics(name, filepath, altText) {
  this.name = name;
  this.filepath = filepath;
  this.altText = altText;
  this.views = 0;
  this.clicks = 0;
  Pics.all.push(this);

}

// +++++++++++++++++++++++++++++++++++++++++
// CHECK IF LOCAL STORAGE EXISTS, IF SO, RETRIEVE IT
// +++++++++++++++++++++++++++++++++++++++++


if (Boolean(localStorage.memory) === true) {
  Pics.all = JSON.parse(localStorage.picsAll);

} else {

  // +++++++++++++++++++++++++++++++++++++++++
  // NEW IMAGE INSTANCES
  // +++++++++++++++++++++++++++++++++++++++++

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

}

// +++++++++++++++++++++++++++++++++++++++++
// REFER TO IMAGES FROM HTML
// +++++++++++++++++++++++++++++++++++++++++

var firstEl = document.getElementById('first');
var secondEl = document.getElementById('second');
var thirdEl = document.getElementById('third');

// +++++++++++++++++++++++++++++++++++++++++
// GENERATE RANDOM IMAGE FUNCTION
// +++++++++++++++++++++++++++++++++++++++++

function randomImage() {
  var randomFirst = Math.floor(Math.random() * Pics.all.length);
  var randomSecond = Math.floor(Math.random() * Pics.all.length);
  var randomThird = Math.floor(Math.random() * Pics.all.length);

  while(Pics.lastDisplayed.includes(randomSecond) || Pics.lastDisplayed.includes(randomFirst) || Pics.lastDisplayed.includes(randomThird) || randomFirst === randomSecond || randomSecond === randomThird || randomFirst === randomThird) {
    randomFirst = Math.floor(Math.random() * Pics.all.length);
    randomSecond = Math.floor(Math.random() * Pics.all.length);
    randomThird = Math.floor(Math.random() * Pics.all.length);
  }

  // +++++++++++++++++++++++++++++++++++++++++
  // UPDATE SRC FOR FIRST, SECOND, AND THIRD IMAGES
  // +++++++++++++++++++++++++++++++++++++++++

  firstEl.src = Pics.all[randomFirst].filepath;
  firstEl.alt = Pics.all[randomFirst].altText;

  secondEl.src = Pics.all[randomSecond].filepath;
  secondEl.alt = Pics.all[randomSecond].altText;

  thirdEl.src = Pics.all[randomThird].filepath;
  thirdEl.alt = Pics.all[randomThird].altText;

  // +++++++++++++++++++++++++++++++++++++++++
  // INCREMENT THE NUMBER OF TIMES THE IMAGES WERE DISPLAYED
  // +++++++++++++++++++++++++++++++++++++++++

  Pics.all[randomFirst].views ++;
  Pics.all[randomSecond].views++;
  Pics.all[randomThird].views++;

  // +++++++++++++++++++++++++++++++++++++++++
  // RESET THE ARRAY - REASSIGN THE VALUES OF EACH INDEX EVERY TIME
  // +++++++++++++++++++++++++++++++++++++++++

  Pics.lastDisplayed[0] = randomFirst;
  Pics.lastDisplayed[1] = randomSecond;
  Pics.lastDisplayed[2] = randomThird;
}

// +++++++++++++++++++++++++++++++++++++++++
// CALLBACK FUNCTION FOR CLICK EVENT
// +++++++++++++++++++++++++++++++++++++++++

function handleClick(event) {
  if(event.target.id === 'images') {
    return alert('Click on a pic!');
  }

// +++++++++++++++++++++++++++++++++++++++++
// TRACK NUMBER OF TOTAL CLICKS
// +++++++++++++++++++++++++++++++++++++++++

  Pics.totalClicksCounter--;

// +++++++++++++++++++++++++++++++++++++++++
// COUNT VOTES FOR EACH IMAGE
// +++++++++++++++++++++++++++++++++++++++++

  for(var i = 0; i < Pics.all.length; i++) {
    if(event.target.alt === Pics.all[i].altText) {
      Pics.all[i].clicks ++;
    }
  }

// +++++++++++++++++++++++++++++++++++++++++
// REMOVES EVENT LISTENER AFTER 25 CLICKS,
// CALLS RANDOM IMAGE FUNCTION AGAIN,
// AND SETS LOCAL STORAGE
// +++++++++++++++++++++++++++++++++++++++++

  if(Pics.totalClicksCounter === 0) {
    Pics.section.removeEventListener('click', handleClick);
    Pics.drawChart();
    localStorage.picsAll = JSON.stringify(Pics.all);
    localStorage.memory = true;
  }
  randomImage();
}

// +++++++++++++++++++++++++++++++++++++++++
// CHART DATA
// +++++++++++++++++++++++++++++++++++++++++

Pics.chartData = {
  labels: Pics.nameArray, // name array declared earlier
  datasets: [
    {
      label: 'Number of Votes',
      data: Pics.clicksArray, // clicks/votes array declared earlier
      backgroundColor: [
        'darkRed',
        'red',
        'chocolate',
        'goldenrod',
        'gold',
        'olive',
        'mediumTurquoise',
        'plum',
        'deepPink',
        'salmon',
        'pink',
        'rosyBrown',
        'lavenderBlush',
        'cornsilk',
        'orange',
        'orangeRed',
        'tomato',
        'lightSalmon',
        'indianRed',
        'crimson',
        'coral',
      ],
      hoverBackgroundColor: 'darkSlateGray'
    }]
};

Pics.drawChart = function() {
  var a = document.createElement('a');
  a.href = 'marketing.html';
  a.innerHTML = '<br / > Marketing Results';
  Pics.resultsList.appendChild(a);
  Pics.resultsArrays();
  document.getElementById('chart').style.backgroundColor = 'rgba(109, 238, 255, 0.3)';
  document.getElementById('chart').style.border = '2px solid cornsilk';
  document.getElementById('chart').style.borderRadius = '50px';
  var ctx = document.getElementById('chart').getContext('2d');
  new Chart(ctx,{
    type: 'bar',
    data: Pics.chartData,
    options: {
      legend: {
        labels: {
          fontColor: 'orange'
        }
      },
      // responsive: false,
      scales: {
        yAxes: [{
          ticks: {
            fontColor: 'orange',
            // max: 30,
            min: 0,
            stepSize: 1.0
          },
        }],
        xAxes: [{
          ticks: {
            fontColor: 'orange'
          },
        }]
      }
      // animation: {
      //   duration: 1000,
      //   easing: 'easeOutBounce'
      // }
    },
  });
  // chartDrawn = true;
};
// +++++++++++++++++++++++++++++++++++++++++
// UPDATING RESULTS ARRAYS TO BE ADDED IN THE CHART
//+++++++++++++++++++++++++++++++++++++++++

Pics.resultsArrays = function() {
  for (var i = 0; i < Pics.all.length; i++) {
    Pics.viewsArray[i] = Pics.all[i].views;
    Pics.clicksArray[i] = Pics.all[i].clicks;
    Pics.nameArray[i] = Pics.all[i].name;
  }
};

// +++++++++++++++++++++++++++++++++++++++++
// ADDED EVENT LISTENER
// +++++++++++++++++++++++++++++++++++++++++

Pics.section.addEventListener('click', handleClick);

// +++++++++++++++++++++++++++++++++++++++++
// RENDER IMAGE ON PAGE LOAD
// +++++++++++++++++++++++++++++++++++++++++
randomImage();


//======================Exercise 1 ========================

// assign variables to counter, increment button and decrement button
// add event listener and check triggered when clicking
// increment and decrement counter


//=====================Exercise 2 ============================
//? * Attach event to document and check id of element that kicked off event
//  * Use it to start and stop music?
const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const restartButton = document.getElementById('restartButton');

// startButton.addEventListener('click', function () {
//     audio.play();
// });

// pauseButton.addEventListener('click', function () {
//     audio.pause();
// });

// restartButton.addEventListener('click', function () {
//     audio.currentTime = 0;
//     audio.play();
// });

startButton.addEventListener('click', function (e) {
    audio.play();
});

pauseButton.addEventListener('click', function () {
    audio.pause();
});

restartButton.addEventListener('click', function () {
    audio.currentTime = 0;

});






// =========================Answers=========================

//==============Answer 1==============

const counter = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

incrementButton.addEventListener('click', function () {
    counter.innerText = Number(counter.innerText) + 1;
});
decrementButton.addEventListener('click', function () {
        counter.innerText = Number(counter.innerText) -1;
});

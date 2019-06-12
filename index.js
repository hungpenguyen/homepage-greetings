const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const name = document.querySelector('#name');
const typeOfGreet = document.querySelector('#time-of-day');
const goal = document.querySelector('#goal');


//display time
function showTime() {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

//insert these into the spans of the html in order to display them
  hour.innerHTML = addZero(hr);
  minute.innerHTML = addZero(min);
  second.innerHTML = addZero(sec);

}

//if value of hour, minute, and seconds are below 10, add a zero in front, otherwise, do nothing
function addZero(n) {
  if (n < 10) {
    return n = '0'+ n;
  } else {
    return n;
  }
}

//change the greeting and image with time.

function greeting() {
  let date = new Date();
  let hr = date.getHours();

  if (hr < 12) {
    typeOfGreet.textContent = 'Morning';
    document.body.style.backgroundImage = 'url(images/morning.jpg)';
  } else if (hr < 18) {
    typeOfGreet.textContent = 'Afternoon';
    document.body.style.backgroundImage = 'url(images/afternoon.jpg)';
  } else {
    typeOfGreet.textContent = 'Evening';
    document.body.style.backgroundImage = 'url(images/evening.jpeg)';
  }
}

//grab and set the name inputed in the span with the ID name.
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

function setGoal(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('goal', e.target.innerText);
      goal.blur();
    }
  } else {
    localStorage.setItem('goal', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
goal.addEventListener('keypress', setGoal);
goal.addEventListener('blur', setGoal);
//call functions
greeting();
setInterval(showTime, 1000);
setName();
setGoal();

const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const name = document.querySelector('#name');
const typeOfGreet = document.querySelector('#time-of-day');


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

//create a time out function so that the time updates every minute; which is 60000ms
setTimeout(showTime(), 1000);

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

//call functions
greeting();

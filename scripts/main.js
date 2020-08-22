"use strict";
const tSalons = document.querySelector(".t-salons");
const tMasters = document.querySelector(".t-masters");
const wrapperSalon = document.querySelector(".wrapper-salon");
const wrapperMaster = document.querySelector(".wrapper-master");

tSalons.addEventListener("click", () => {
  tSalons.classList.add("active");
  wrapperSalon.classList.remove("hide");
  tMasters.classList.remove("active");
  wrapperMaster.classList.add("hide");
});

tMasters.addEventListener("click", () => {
  tMasters.classList.add("active");
  wrapperMaster.classList.remove("hide");
  tSalons.classList.remove("active");
  wrapperSalon.classList.add("hide");
});
const salons = document.querySelector(".salons1");
const masters = document.querySelector(".masters1");
const salonform = document.querySelector(".salon");
const masterform = document.querySelector(".master");

salons.addEventListener("click", () => {
salons.classList.add("isactive");
  salonform.classList.remove("hide");
  masters.classList.remove("isactive");
  masterform.classList.add("hide");
});

masters.addEventListener("click", () => {
  masters.classList.add("isactive");
  masterform.classList.remove("hide");
  salons.classList.remove("isactive");
  salonform.classList.add("hide");
});
window.onscroll = function showHeader() {
  var menu = document.querySelector('.menu');
  if (window.pageYOffset > 200) {
    menu.classList.add('fixed');
  }
  else if(menu.classList.contains('fixed')){
    menu.classList.remove('fixed');
  }
}
function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
      scrollTop: $(id).offset ().top - offset
    }, 500);
    return false;
  };
  
  function countdown(dateEnd) {
    var timer, days, hours, minutes, seconds;
  
    dateEnd = new Date(dateEnd);
    dateEnd = dateEnd.getTime();
  
    if (isNaN(dateEnd)) {
      return;
    }
  
    timer = setInterval(calculate, 1000);
  
    function calculate() {
      var dateStart = new Date();
      var dateStart = new Date(
        dateStart.getUTCFullYear(),
        dateStart.getUTCMonth(),
        dateStart.getUTCDate(),
        dateStart.getUTCHours(),
        dateStart.getUTCMinutes(),
        dateStart.getUTCSeconds()
      );
      var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000);
  
      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = timeRemaining % 86400;
        hours = parseInt(timeRemaining / 3600);
        timeRemaining = timeRemaining % 3600;
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = timeRemaining % 60;
        seconds = parseInt(timeRemaining);
  
        document.getElementById("days").innerHTML = parseInt(days, 10);
        document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
        document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
        document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
      } else {
        return;
      }
    }
  
    function display(days, hours, minutes, seconds) {}
  }
  
  countdown("11/01/2020 00:00:00 AM");
 



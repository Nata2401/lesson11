'use strict';
const btn = document.querySelector('#btn');
const btnCircle = document.querySelector('#e_btn');
const square = document.querySelector('#square');
const input = document.querySelector('#text');
const range = document.querySelector('#range');
const circle = document.querySelector('#circle');
const span = document.querySelector('#range-span');

btn.addEventListener('click', function () {
  square.style.backgroundColor = document.querySelector("input[type ='text']").value;
});

btnCircle.style.display = 'none';

range.addEventListener('input', function (event) {
  span.textContent = event.target.value;
  circle.style.width = range.value + '%';
  circle.style.height = range.value + '%';
});





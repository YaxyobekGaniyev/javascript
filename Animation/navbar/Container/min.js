let slider = document.querySelector('.slider');
let line1 = document.querySelector('#line1');
let line2 = document.querySelector('#line2');
let line3 = document.querySelector('#line3');
let line4 = document.querySelector('#line4');
let active = document.querySelector('#active');


line1.addEventListener('click', function () {
    slider.style.transform = "translate(0)";
    active.style.top = "0";
    container.style.backgraound = "#6D3B13 "
});

line2.addEventListener('click', function () {
    slider.style.transform = "translate(-25%)";
    active.style.top = "80px";
    container.style.backgraound = "#6D1345";
});

line3.addEventListener('click', function () {
    slider.style.transform = "translate(-50%)";
    active.style.top = "160px";
    container.style.backgraound = "#3B136D ";
});

line4.addEventListener('click', function () {
    slider.style.transform = "translate(-75%)";
    active.style.top = "240px";
    container.style.backgraound = "#FA41003 ";
});
 

 



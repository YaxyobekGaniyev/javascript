
setInterval(soatfunc, 1);

function soatfunc(){
let soat = new Date();
let Hours =  soat.getHours();
let Minut =  soat.getMinutes();
let second = soat.getSeconds();
document.querySelector("#soat").innerHTML = hour + ":" + minut + ":" + second;

}
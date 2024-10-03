const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const countValue = document.getElementById("lebo");
let count = 0;
increaseBtn.onclick = function(){
    count++;
    countValue.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countValue.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countValue.textContent = count;
}
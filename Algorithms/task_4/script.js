
let increment = document.getElementById("increase");
let decrement = document.getElementById("decrease");

let show = document.getElementById("show");
let startPoint = 0;
let zero = 0

increment.addEventListener('click', function(){
    startPoint += 1;
    show.innerHTML = startPoint;  
})

decrement.addEventListener('click', function(){
    startPoint -= 1;
    show.innerHTML = startPoint;  
})

reset.addEventListener('click', function(){
    startPoint += 0;
    show.innerHTML = zero;  
})

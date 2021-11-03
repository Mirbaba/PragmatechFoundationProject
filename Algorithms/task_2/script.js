document.querySelector(".container").style.display='none';
document.querySelector("#letitpop").style.display='block';

function letItPop(){
    document.querySelector(".container").style.display=('block');
    document.querySelector("#letitpop").style.display=('none')
}
function closeModal(){
    document.querySelector(".container").style.display=('none');
    document.querySelector("#letitpop").style.display=('block')
}
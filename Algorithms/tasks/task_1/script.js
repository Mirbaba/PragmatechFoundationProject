document.getElementById('instruction').style.fontSize=('30px');
document.getElementById('instruction').style.fontFamily=('verdana');
document.getElementById('random').style.fontSize=('35px');
document.getElementById('random').style.fontFamily=('montserrat');
document.getElementById('random').style.fontWeight=('bold');

function changeColor() {
    document.body.style.backgroundColor = "lightgray";
    document.getElementById('instruction').style.display=('none');
    document.getElementById('random').innerHTML=('Lightgray');
    }




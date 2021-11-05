var i = 0;
var j = 0;
var txt = document.getElementById('myText');
var txtToDisplay = ['Bunu', 'sərbəst', 'yaza', 'bilmək', 'üçün', 'bir', 'də', 'cəhd', 'etməli', 'olacağam', 'əsas', 'məqsəd', 'loopu', 'tapmaq', 'idi', ':))D', ';)']; 
var currentTxt = [];
var speed = 50; 
var isDeleting = false

function loop() {
  txt.innerHTML = currentTxt.join('')

    if (i < txtToDisplay.length) {
    
    if(!isDeleting && j <= txtToDisplay[i].length) {
        currentTxt.push(txtToDisplay[i][j])
        j++
        console.log('add a letter', j)
    }

    if(isDeleting && j <= txtToDisplay[i].length){
        currentTxt.pop(txtToDisplay[i][j])
        j--
        console.log('remove a letter', j)
    }

    if(j == txtToDisplay[i].length){
        isDeleting = true
    }
    
    if(isDeleting && j === 0){
        currentTxt = []
        isDeleting = false
        i++
    }
    if(i == txtToDisplay.length){
        i=0
    }
  }
  setTimeout(loop, 200)
}

loop()
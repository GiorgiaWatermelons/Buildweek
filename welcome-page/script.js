


var checker = document.getElementById('mycheckbox');
var button = document.getElementById("pulsante");

button.addEventListener("click", function()
{
    if(checker.checked){
       window.location.href = "index2.html" 
    }
else{
    alert("Ricordati di spuntare la checkbox, VERGOGNA!!!")
}


})


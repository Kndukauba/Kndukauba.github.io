document.addEventListener("DOMContentLoaded", function() {
  let zero = document.getElementById("zero");   
  let add = document.getElementById("add"); 
  let subtract = document.getElementById("subtract"); 
  let restart = document.getElementById("restart"); 
  
  let count = 0; 
  let user; 

  add.onclick = function () {
    count++; 
    zero.textContent = count; 

    if(count == 25) {
      let user = window.prompt("2025!");   

      if(user == "2025!") {
        alert("That's Right!"); 
      } 
    }
  } 
  subtract.onclick = function() {
    count--; 
    zero.textContent = count; 
  } 
  restart.onclick = function() {
    count =  0; 
    zero.textContent = count; 
  }

}) 



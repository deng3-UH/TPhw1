/*
Name: Dylan Eng 
Datre Created: 06/12/2025
Date Last Edited: 06/13/2025
Version 1.0
Description: Homework JavaScript File 
*/
//dynamic date js code
const d = new Date();
let text= d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//name slider js code
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function() {output.innerHTML = this.value;
    
};
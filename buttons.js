// Samantha Ngo

console.log("Hello World");

var buttonsDiv = document.getElementById("buttons");

var table = document.createElement("table");
var tableRow = document.createElement("tr");
table.appendChild(tableRow);
buttonsDiv.appendChild(table);
var cell1 = document.createElement("td");
var cell2 = document.createElement("td");
var cell3 = document.createElement("td");
var cell4 = document.createElement("td");
tableRow.appendChild(cell1);
tableRow.appendChild(cell2);
tableRow.appendChild(cell3);
tableRow.appendChild(cell4);
console.log(tableRow.children);
for(var i = 0; i < (tableRow.children).length; i++){
  (tableRow.children)[i].style.width = "25%";
}

var text1 = document.createElement("p");
text1.innerText = "I'm right.";
text1.style.color = "white";
cell1.appendChild(text1);
var button1 = document.createElement("button");
button1.setAttribute("type","button");
button1.addEventListener("click", textpopup1);
button1.innerText = "Click Me!";
button1.style.color = "hotpink";
cell2.appendChild(button1);
var button2 = document.createElement("button");
button2.setAttribute("type","button");
button2.addEventListener("click", textpopup2);
button2.innerText = "Click Me!";
button2.style.color = "purple";
cell3.appendChild(button2);
var text2 = document.createElement("p");
text2.innerText = "No, I'm right.";
text2.style.color = "white";
cell4.appendChild(text2);

console.log(buttonsDiv);

function textpopup1(){
  text1.style.color = "hotpink";
  text2.style.color = "white";
}

function textpopup2(){
  text2.style.color = "purple";
  text1.style.color = "white";
}

var table2 = document.createElement("table");
var tr2 = document.createElement("tr");
var td2 = document.createElement("td");
var nonebutton = document.createElement("button");
buttonsDiv.appendChild(table2);
table2.appendChild(tr2);
tr2.appendChild(td2);
td2.appendChild(nonebutton);
nonebutton.setAttribute("type","button");
nonebutton.innerText = "No one is right!";
nonebutton.addEventListener("click", noneRightpopup);

function noneRightpopup(){
  text2.style.color = "white";
  text1.style.color = "white";
}

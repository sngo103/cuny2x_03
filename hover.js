// Samantha Ngo

console.log("Hello World");

var buttonsDiv = document.getElementById("buttons");

var table = document.createElement("table");
var tr = document.createElement("tr");
var td = document.createElement("td");
var button = document.createElement("button");
buttonsDiv.appendChild(table);
table.appendChild(tr);
tr.appendChild(td);
td.appendChild(button);
button.setAttribute("type","button");
button.innerText = "Don't hover over this!";
button.addEventListener("mouseover", noHoverMessage);
button.id = "hover-button";

function noHoverMessage(){
  alert("Hey, I said don't hover over that!");
}

console.log(button);

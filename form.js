// Samantha Ngo

console.log("Hello World");
var formDiv = document.getElementById("formDiv");
var table = document.createElement("table");
var tr = document.createElement("tr");
var td = document.createElement("td");
var f = document.createElement("form");

formDiv.appendChild(table);
table.appendChild(tr);
tr.appendChild(td);
td.appendChild(f);

var usernameText = document.createTextNode("Username ");
var username = document.createElement("input");
username.setAttribute("type", "text");
username.setAttribute("name", "username");
var passwordText = document.createTextNode("Password ");
var password = document.createElement("input");
password.setAttribute("type", "text");
password.setAttribute("name", "password");
var emailText = document.createTextNode("Email ");
var email = document.createElement("input");
email.setAttribute("type", "text");
email.setAttribute("name", "email");
var submit = document.createElement("input");
submit.setAttribute("type", "submit");
submit.setAttribute("value", "Submit");
submit.id = "center";

f.appendChild(usernameText)
f.appendChild(username);
f.appendChild(passwordText);
f.appendChild(password);
f.appendChild(emailText);
f.appendChild(email);
f.appendChild(submit);

f.setAttribute("action", "javascript:passwordChecker(this)");
console.log(f);

// Samantha Ngo
// In a Javascript file, write a program which checks the following things:
// - checks that the password is 12345678
// - if the password is incorrect, send an alert message
// - Your page should also include an <h1> tag. If the information in the form is correct, have Javascript change the text in the <h1>.

console.log("Form submitted.");

// *Function isn't able to check if password is correct/incorrect
function passwordChecker(input, password){
  console.log(input.username);
  if (password == "12345678"){
    alert("Your password cannot be '12345678'");
    return false;
  } else if(input != password){
    alert("The password you have entered is incorrect.");
  }
}

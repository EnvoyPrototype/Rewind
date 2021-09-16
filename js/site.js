//Get string from app UI
//Controller function
function getValue() {
  document.getElementById("alert").classList.add("invisible");
  let userString = document.getElementById("userString").value;
  let revString = reverseString(userString);
  displayString(revString);
}

//Reverse the string
//Logic function
function reverseString(userString) {
  let revString = [];

  //Reverse string using for loop
  for (let index = userString.length - 1; index >= 0; index--) {
    revString += userString[index];
  }
  return revString;
}

//Display  reversed string to user
//View function
function displayString(revString) {
  //Write message to page
  document.getElementById(
    "msg"
  ).innerHTML = `Your string reversed is: ${revString}`;

  //Show alert box
  document.getElementById("alert").classList.remove("invisible");
}

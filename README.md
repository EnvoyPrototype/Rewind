#  REWIND: A Coding Project

 There are back again. A JavaScript coding exercise using arrays. Write a program that displays a string in reverse. 

- CSS and Bootstrap Layout
- JavaScript Fundamentals
- JavaScript Loops
- JavaScript Functions	
- CSS and Bootstrap Layout
- JavaScript DOM Manipulation

## Functions


### getValue()
Ensures that the alert box (which displays the reversed string) is invisible. Sets the userString variable to the value of the text box. Then sets the value of the revString variable to the value of the reverseString() function. After the string is reversed, it runs the displayString() function.

### reverseString()
Creates an empty array to hold the reversed string. Sets the loop index to the length of the userString parameter. By starting with the higher number (set by the index value), the loop takes the last value of the userString, adds it to the revString array, loops through the string, and ultimately reverses it. revString is returned to the getValue() function and set as the value for the variable.

### displayString()
Takes the reversed string value as a parameter, and sets it as the value of the paragraph element with the msg id in the alert box HTML. Then removes the invisible class from the message box so it can display the result.

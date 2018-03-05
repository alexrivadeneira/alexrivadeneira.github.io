# Introduction to Building Websites in the Wonderful World Wide Web

## Class Prereqs:
Students should be able to...
* Perform basic tasks on a personal computer, such as opening programs, browsing the web, accessing email and saving and opening files
* Perform basic high school algebra (using variables, equations/expressions)
* Type at least 40-50 words per minute

## Projects
### Students will build:
* Weeks 1-2: "About Me Website" - A static website hosted on the local hard drive.
Skills: HTML structure, images, links, CSS styles

* Weeks 3-4: "Higher/Lower Number Guessing Game" - The computer generates a random number in some range, and the user inputs numbers until they can guess the number.  To help the user, the computer tells the user if their guess is higher or lower than the hidden number. 
Skills: JavaScript variables, expressions, conditionals 
* Weeks 5-6: "JavaScript Stopwatch" - A game that tests the user's reflexes to see how quickly they can stop and start a stopwatch. 
Skills: DOM manipulation, JavaScript events, functions, timers
* Weeks 7-8: "Bank Account Simulator” - A basic bank account website that keeps track of the user’s balance, deposits, withdraws, interest and fees.
Skills: JavaScript objects and methods
* Weeks 9-10: "Tic Tac Toe" – Two players, “X” and “O”, compete to fill three spaces in a row.
Skills: All of the skills learned during the course plus strategies on how to represent a game programmatically. 

## Week 1: Introduction to Websites, HTML, CSS
### Overview: Students will use HTML tags, tag attributes and CSS to build a basic, local, static personal website.

* "Fixed mindset" vs "Growth mindset" video and discussion, Carol Dweck  https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve 
* Creating a "local" website on your desktop
* filenames
* server vs local
* viewing code source
* HTML tags and structure
* ```<strong> <a></a> <h1> <h2> <h3> <ul> <li> <div> <span><hr />```
* HTML tag attributes
* ```<img src="">```
* ```<a href="" alt="">```
* HTML tag class attributes
* ```<h2 class="myclass">```
* ```<div class="test">```
* Mapping HTML tags to styles in CSS
* font-size
* background-color
* color

#### Project: 
* "About Me Website"

#### Optional homework/additional resources:
* Sign up at codepen.io and experiment
* View code source on some of your favorite websites
* W3Schools HTML exercises: https://www.w3schools.com/html/exercise.asp?filename=exercise_attributes1
* HTML and CSS Handbook: http://www.htmlandcssbook.com

# Week 2: More Advanced CSS Styling
### Overview: Students will learn about CSS class selectors and CSS hierarchy to style their personal website.
* Dividing a web project into multiple files: separating out the stylesheet 
* Strategies for finding answers online
* Using developer tools (Chrome/Firefox)
* Advanced Cascading Stylesheets rules
* CSS id vs class selectors
	* ```#myID{}```
	* ```.myClass{}```
* Pseudo class selectors
	* ```a:hover{}```
	* ```span:mouseover```
* CSS hierarchy/specificity rules
	* ID > class 
	* ```!important```
* CSS design box model
	* Margins
	* Padding
	* Border
* Inline vs block elements
* Modifying ul li to build a navigation bar

#### Project: 
* "About Me Website": add side/navigation bars

#### Optional homework/additional resources:
* W3Schools CSS exercises: https://www.w3schools.com/css/exercise.asp
* "HTML and CSS Handbook": http://www.htmlandcssbook.com

# Week 3: Intro to JavaScript: Adding Interactivity to Your Website
### Overview: Students will learn JavaScript basics, including manipulating primitives such as boolean, string, number
* Syntax rules
	* camelCase convention
	* ```;```
	* ```//```
	* ```=```
	* ```===```
* Strings
* ```null```
* ```undefined```
* Converting between types
	* ```parseInt()```
	* ```toString()```
	* ```parseFloat()```
* ```console.log()```
* ```alert()```
* variables, expressions
	* ```var i = "myString";```
	* ```if(i === myString){}```
* booleans
	* ```var myBool = true;```
* if/else expressions
	* ```if/else logic```
* Math/Random libraries

#### Project: 
* Higher/Lower Number Guessing Game

#### Optional homework/additional resources:
* Codecademy JavaScript: https://www.codecademy.com/en/tracks/javascript-combined
* "JavaScript: The Good Parts" by Douglas Crockford
* You Don't Know JavaScript: https://github.com/getify/You-Dont-Know-JS

# Week 4: JavaScript Functions 
### Overview: Students will manipulate data inputs and outputs using JavaScript functions
* Document Object Model (DOM)
* Selecting elements to modify: 
	* ```document.getElementById()```
* Inputs and outputs
* Functions
```
function add(x, y){
		return x + y;
		} 
```
* Logging return values
* returning data from a function
	* no return
	* ```return;```
	* ```return variable;```
* Functions worksheet practice

#### Project: 
* Higher/Lower Number Guessing Game

#### Optional homework/additional resources:
* Codecademy JavaScript: https://www.codecademy.com/en/tracks/javascript-combined
* "JavaScript: The Good Parts" by Douglas Crockford
* You Don't Know JavaScript: https://github.com/getify/You-Dont-Know-JS
* How Computer Memory Works: https://computer.howstuffworks.com/computer-memory.htm

# Week 5: JavaScript Timer and Function Events
### Overview: Students will make use of JavaScript timers to affect changes on the page using functions. 

* ++ syntax
* JavaScript for loops
```
for(var i = 0; i < 5; i++){
		console.log("one loop!");
}
```
* Selecting elements by class name:
	* document.getElementsByClassName("myClass");
* HTML buttons
	* <button>Click here!</button>
* JavaScript Timers
	* Passing functions to a timer
	* setInterval(myFunction, 1000);
	* setTimeout(myFunction, 1000);
	* clearing a timer:
		var interval = setInterval(myFunction, 1000);
		clearInteval(interval);
* Javascript events - onClick event
```
<button onClick="myFunction()"/>
```

#### Project: 
* Stopwatch game

#### Optional homework/additional resources:
* JavaScript Timing Events: https://www.w3schools.com/js/js_timing.asp
* Codecademy JavaScript: https://www.codecademy.com/en/tracks/javascript-combined
* "JavaScript: The Good Parts" by Douglas Crockford
* You Don't Know JavaScript: https://github.com/getify/You-Dont-Know-JS
* How Computer Memory Works: https://computer.howstuffworks.com/computer-memory.htm	

# Week 6: JavaScript Arrays
### Overview: Students will use arrays and three-dimensional arrays to store and manipulate data
* Storing data in arrays:
	* var myArray = ["string1", 1, false, "more stuff"];
	* array indexes
	* array.length property
	* iterating over arrays
	* valid values
* 3D arrays
	* var threeDimensionalArray = [[0,1,2],[3,4,5],[6,7,8]];
* Looping within loops:
```
	for(var i = 0; i < rows.length; i++){
		for(var j = 0; j < cols.length; j++){
		console.log(rows[i], cols[i]);
		}
	}
```

#### Project
* Stopwatch game

#### Optional homework/additional resources:
* Codecademy JavaScript: https://www.codecademy.com/en/tracks/javascript-combined
* "JavaScript: The Good Parts" by Douglas Crockford
* You Don't Know JavaScript: https://github.com/getify/You-Dont-Know-JS

# Week 7: JavaScript Objects
### Overview: Students will create and manipulate JavaScript objects to organize/structure their application data
* Debugging code best practices:
	* Check after each modification
	* Tips on using the console to log out information
	* Use comments

* Javascript objects
```
var student = {
		firstName: "Ben",
		lastName: "Wong"
		age: 30,
		address: "1010 Shattuck Ave"
	};
```
* Object dot notation
* "this" keyword
* valid keys and values

#### Project
* Simulating a bank account

#### Optional homework/resources:
* JavaScript Objects: https://www.w3schools.com/js/js_objects.asp
* Bouncing Ball simulation: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice
* Arrays and Objects in JavaScript: https://www.codecademy.com/courses/javascript-beginner-en-9Sgpi/0/1

# Week 8: JavaScript Objects
### Overview: Students will create and manipulate JavaScript objects to organize/structure their application data
* Dot notation to modify objects
* Prototypal inheritance chain
	* var person = Object.create(student);
	* Adding functions to objects (methods)
	* Method overriding
	* Object.hasOwnProperty
* HTML forms
```
<form>
	<input type="text" value="" />
	<button onclick="myFunction(event)">
</form>
```

#### Project: 
* Simulating a bank account

#### Optional homework/additional resources:
* JavaScript Objects: https://www.w3schools.com/js/js_objects.asp
* Bouncing Ball simulation: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice
* Arrays and Objects in JavaScript: https://www.codecademy.com/courses/javascript-beginner-en-9Sgpi/0/1

# Week 9: Building Tic Tac Toe Game
### Overview: Students will use their accumulated course knowledge to represent a well-known game programatically 
* Create game grid using nested for loops
* Detecting changes to the grid using events
* Boolean to alertnate players
* Game states
* Storing game values 

#### Project:
* Tic Tac Toe

#### Additional resources:
* JavaScript canvas: https://www.w3schools.com/html/html5_canvas.asp
* CSS Animations: https://www.w3schools.com/css/css3_animations.asp	


# Week 10: Finish game and further ideas
* Time to work on building game and beautifying with CSS

#### Further thoughts:
* How can we persist data?
* Additional languages

#### Project:
* Tic Tac Toe

#### Additional resources:
* JavaScript canvas: https://www.w3schools.com/html/html5_canvas.asp
* CSS Animations: https://www.w3schools.com/css/css3_animations.asp
* Rice's Introduction to Interactive Programming in Python



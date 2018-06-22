const homePosts = [
{
    title: "Monte Carlo Tic Tac Toe",
    date: "06/21/2018",
    content: `
   <a href='./monte-carlo-tic-tac-toe/index.html'><img style='width: 300px;' src='img/MonteCarloTicTacToe.png' alt='Monte Carlo Tic Tac Toe'/></a>
   <p>I built Tic Tac Toe using a Monte Carlo Method algorithm to build the computer opponent AI.</p>
   <p>Each time it's the computer's turn, in the background, the computer plays a number of hypothetical games.  Specifically, for each open spot, the computer makes a new board in memory and moves to that spot.  It then simulates finishing the game by placing random Xs and Os on the board to complete the game after moving to that spot. It keeps track of how many games it has won and lost from each position, and then chooses its next spot based on the position that resulted in the highest frequency of won games.</p>
   <p>The hint feature for the human player uses the same agorithm: hover over 'Hint?' and you'll see the board highlight what's its determined to be the best and worst possible moves for you to make based on a number of simulations.  The hint feature is a little buggy, but works well enough for now.</p>
   <p>You can see my code on Github: <a href='https://github.com/alexrivadeneira/monte-carlo-tic-tac-toe' target='_blank'>Monte Carlo Method Tic Tac Toe</a> and read more about using Monte Carlo Methods <a href='https://en.wikipedia.org/wiki/Monte_Carlo_method' target='_blank'>here.</a></p>
    `,
},  
{
    title: "Clock",
    date: "06/09/2018",
    content: `
    <div id='clock' >
        <div id='minute-hand'></div>
        <div id='hour-hand'></div>
        <div id='second-hand'></div>
        <div id='center'></div>
    </div>
    `,
},
{
    "title":"Experimenting with CSS Animations",
    "date":"05/30/2018",
    "content":`<p>CSS animations let us create some really impressive effects using only CSS (no Flash or JavaScript!) I've been experimenting with them to add a little life to my blog. For those of you who want to learn more about getting started with CSS animations, here's a simple guide.  </p>

    <p>The easiest way to explain how this works is with an example.</p>
    
    <p>Let's say we have a div; we'll give it some basic style properties:</p>
    
    <pre><div id="redbox"></div></pre>
    
    #redbox{ background: red; width: 100px; height: 100px;
    } 
    
    <p>Now, if we want to animate our little red box, all we have to do is declare an animation in the CSS file like so.  We use a new declaration called keyframes to label our animation:</p>
    
    <pre>@keyframes myAnimation{
    }
    </pre>
    
    <p>Inside the @keyframes declaration, we specify how we want our CSS to look at different moments in time. </p>

    <p>In a lot of ways, this is like a more complicated and powerful version of the CSS psuedo selectors.  To remind you about those, here's an example of how we would change our red box using a CSS psuedoselector for the hover state:</p>
    
    <pre>#redbox:hover{ width: 200px; height: 200px; background: green;
    }
    </pre>
    
    <p>In this case, when the user hovers over the red box, it changes sizes and colors. This is pretty effective, but the transition is a little jarring.</p>
    
    <p>Without even returning to keyframes, we could "ease" the pseduo selector transition a bit using a new CSS property on the #redbox div:</p>
    
    <pre>
    #redbox{
    ... blah blah blah
    transition: ease 1s;
    }
    </pre>
    
    <p>
    This new transition property will "ease" in any change over a period of time that we specify, in this case 1 second.  When the hover effect gets targeted, the change will happen and it will be eased, smoothing the transition between the two states. </p>
    
    <p>Okay, but now back to the keyframes feature.  Let's say we want to design a more complicated animation that doesn't involve just two states.  Let's say we want to animate our div so that it phases through multiple colors and sizes before returning to its original state.  Keyframes let us build different CSS styles at different moments in time.  We can start at 0% and declare different styles all the way through 100%.</p>
    
    <p>For example, if we want our box to transition from red to blue to green and back to red, we can write something like this:</p>
    
    <pre>
    @keyframes myAnimation{
     10%{background: blue;}
     50%{background: green;}
     100%{background: red;}
    }
    </pre>
    
    <p>
    Now all we have to do is add this keyframe property to our redbox div.  (In this case, we'll also remove our redbox psuedoselector.)
    </p>

    <pre>
    #redbox{ animation: myAnimation; }
    </pre>

    <p>
    We also need to add additional properties telling how long to run the animation, and whether to repeat it.
    </p>

    <pre>
    #redbox{ animation: myAnimation infinite 15s;} 
    </pre>

    <p>
    In this case, I've declared that redbox will run myAnimation (the keyframes declaration above) over the course of 15 seconds and will repeat this infitinitely!
    </p>

    <p>
    Pretty neat! And I've really only begun to scratch the surface of CSS animations, honestly.  </p>
    
    `,
    "image":"img/principalsoffice.png",
    "link": "https://reactbship.herokuapp.com"
    },
{
    "title":"Refresh!",
    "date":"05/23/2018",
    "content":"I've refreshed the look of my homepage a bit; mostly simplifying it. I like writing 'plain Jane' vanilla JavaScript without libraries or frameworks, so I'm going to continue to experiment with enhancing the structure of this website in the same way.  So far, I'm storing all of my static content in JavaScript objects and have written a few functions to update what renders based on where the user navigates. I would like to build my own Markdown processor to make updating the site even easier, although ES6 string literals help with complex text content stored as a JavaScript object value.",
    "image":"img/principalsoffice.png",
    "link": "https://reactbship.herokuapp.com"
    },     
    {
    "title":"Intro to Web Dev Course",
    "date":"02/15/2018",
    "content":"Hi everybody.  I\'m excited to announce I\'ll be teaching an introductory web development course at the Berkeley Public Library, every Saturday starting in March.  The class is 10 weeks long and covers HTML, CSS and JavaScript.  Find out more <a href='https://www.berkeleypubliclibrary.org/events/introduction-web-development-centralec' target='_blank'>here.</a></p>",
    "image":"img/principalsoffice.png",
    "link": "https://reactbship.herokuapp.com"
    },  
    
];
views.portfolio = function(){
	var items = [  {
    "title":"National Cancer Institute Community Design",
    "date":"03/22/2015",
    "content":"Front end project for IdeaScale for the Vice President's Cancer Research initiative.  Built to client's design specifications.  Bootstrap, LESS.",
    "image":"cancer.png",
    "link": "https://cancerresearchideas.cancer.gov/"
    },
 {
    "title":"TubeTube: Perfectly Timed Videos for Your Journey",
    "date":"03/22/2015",
    "content":" This is a Ruby on Rails application, which interacts with both the WMATA (DC Metro/Subway) and Youtube APIs, utilizing the Figaro and HTTParty Ruby Gems.",
    "image":"tubetube.png",
    "link": "http://tubetubedc.herokuapp.com/"
    },

  {
    "title":"2048",
    "date":"04/08/2015",
    "content":"2048, built in Python as part of Rice University's <a href=\"https://www.coursera.org/course/principlescomputing1\" target=\"POC\">Principles of Computing Course</a>.  I designed the logic with instructions and Rice provided the GUI.",
    "image":"2048.png",
    "link": "http://www.codeskulptor.org/#user39_unOF7r1mKt_6.py"
    },

  {
    "title":"Tic Tac Toe...vs the Computer",
    "date":"09/09/2014",
    "content":"The computer is not very smart yet, but it can prevent you from winning on the diagonals.  In future versions, I will give the computer the ability to block additional types of moves. <a href=\"http://www.codeskulptor.org/#user37_gBGFfHbHho_25.py\" target=\"ttt\">You can play the human-only version of the game here.</a>",
    "image":"tttvscomp.png",
    "link": "http://www.codeskulptor.org/#user37_7yzOJ39UY6_0.py"
    },

  {
    "title":"Head-to-Head Game",
    "date":"01/25/2015",
    "content":"A guessing game where the players try to guess their friends preferences on random topics.  People enjoyed playing this game, and I want to rebuild it using a modern JavaScript framework like React",
    "image":"h2h.png",
    "link": "http://head2head2.herokuapp.com/"
    }];


	content = 	"";


	for(item in items){

		content+= "<div class='row'>";
		content+= "<div class='col-md-3'>";
		content+= "<a href='" + items[item].link + "' target='_blank'>" 
		content+="<img class='img-responsive portfolio-img' src='img/" + items[item].image + "'/></a>"
		content+= "</div>";
		content+= "<div class='col-md-9'>";
		content+= "<h2>" + items[item].title + "</h2>";
		content+= "<p>" + items[item].content + "</p>";

		content+= "</div>";		
		content+= "</div>";

	}

	return content;
}
views.portfolio = function(){
	var items = [  {
    "title":"National Cancer Institute Community Design Implementation",
    "date":"03/22/2015",
    "content":"Front end project for IdeaScale for Vice President Biden's cancer research initiative.  Built to client's design specifications.  Bootstrap, LESS.",
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
    "title":"Tic Tac Toe...vs the Computer",
    "date":"09/09/2014",
    "content":"The computer is programmed with a basic level of intelligence focused on preventing losses via diagonals. Future iterations will expand with other counter strategies.",
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
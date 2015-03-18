$(".portfolioNav").click(function(){
	console.log("clicked");
	$.getJSON('portfolio_posts.json', function(data) {
		
		var postsOutput = ""

		$.each(data, function(key, value){
			postsOutput += "<div class='post'>"
			postsOutput += "<h2>" + value.title + "</h2>";
			postsOutput += "<a href='" + value.link + "' target='new'><img src='img/" + value.image + "'></img></a>";		
			postsOutput += "<div class='date'><ul><li>" + value.date + "</li></ul></div>";
			postsOutput += value.content;
			postsOutput += "</div>"

		});

	$("#site").html(postsOutput);
		
	});
});


$(".blogNav").click(function(){
	console.log("clickedBLOG");
	$.getJSON('blog_posts.json', function(data) {
		
		var postsOutput = ""

		$.each(data, function(key, value){
			postsOutput += "<div class='post'>"
			postsOutput += "<h2>" + value.title + "</h2>";
			postsOutput += "<a href='" + value.link + "' target='new'><img src='img/" + value.image + "'></img></a>";		
			postsOutput += "<div class='date'><ul><li>" + value.date + "</li></ul></div>";
			postsOutput += value.summary;
			postsOutput += "</div>"

		});

	$("#site").html(postsOutput);
		
	});
});

$(".aboutNav").click(function(){
	console.log("clicked About");

	var aboutOutput = "<div class='post'><h2>Alex Rivadeneira</h2><img src='img/alex2.jpg' style='width: 200px;''><div class='date'></div>I've been working on web projects since I was in middle school.  In the 2000s, I made a fansite for my favorite computer game, Myst, which became so popular it quickly outgrew and crashed its little Geocities server.  Eventually, with the help from a team of developers and editors from around the world, we hosted the website on a proper server and ended up with millions of hits and over 10,000 registered users.  In my free time I enjoy playing squash and water gardening. </div>";
	$("#site").html(aboutOutput);
});



var navBar = $("nav");
var nameHeight = $("nav").height() + 25;
var navScrollClass = "nav-scrolled";

$(window).scroll(function(){
	if ( $(this).scrollTop() > nameHeight ){
		navBar.addClass(navScrollClass);
	} else {
		navBar.removeClass(navScrollClass);
	}
});
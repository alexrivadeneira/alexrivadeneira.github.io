console.log("navbar controller");

controllers.navbar = function(current){
	content = views.navbar(current);

	var pages = views.navbar();

	router.render(navBar, content);
}
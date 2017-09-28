controllers.home = function(data, params){
	home_content = html(pages/home.html);
	router.render(home_content);
}
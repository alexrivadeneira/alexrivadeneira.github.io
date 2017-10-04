controllers.journal = function(data){
	content = views.journal();
	router.render(mainContent, content);
}

controllers.Jjournal_entry = function(data){
	content = views.Jjournal_entry();
	router.render(mainContent, content);
}
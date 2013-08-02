
define(['jquery','backbone','backbone.marionette','models/Todo','collections/TodoCollection','routes/Router','views/TodoView'], function($,Backbone,Marionette,Todo,TodoCollection,Router,TodoView) {
	App = {
		Models: {},
		Collections: {},
		Router: {},
		Views: {}
	};

	console.log("App Called",TodoView)

	App.Models.Todo = Todo;
	App.Collections.Todo = TodoCollection;
	App.Router = Router;
	App.Views.TodoView = TodoView;
    
    //Start the router
    new App.Router;
    
    //Start the History
    Backbone.history.start({pushState: true });
    

    var todo = new App.Models.Todo({name: "senthil"});

    todoView = new App.Views.TodoView({model:todo});
    todoView.render();

    myRegion = new Backbone.Marionette.Region({
		el: "#mycontent"
   });
	myRegion.show(todoView);

    console.log(todo,todoView);

   

	return App;

});
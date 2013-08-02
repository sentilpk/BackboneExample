define(['backbone'], function(Backbone) {
	var TodoRouter = Backbone.Router.extend({
		/* define the route and function maps for this router */
		routes: {
			"/show/:id": "show",
			'': "index"
		},
		show:function(id){
			console.log('Show called',id);
		},
		index:function(){
			console.log('Index called');
		}
	});

	return TodoRouter;
});
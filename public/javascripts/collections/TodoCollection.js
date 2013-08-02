define(['backbone','../models/Todo'],function(Backbone,Todo){
	var TodoCollection = Backbone.Collection.extend({
        model: Todo,
        initialize:function () {
        	console.log('Todo Collection initialize');
        }
	});

	return TodoCollection;
})
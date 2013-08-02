define(['backbone'],function(Backbone){
	var Todo = Backbone.Model.extend({
        defaults:{
        	name : "",
        	status: ""
        },
        initialize : function(){
          console.log("Todo model initialize");
        }
	});
	return Todo
});
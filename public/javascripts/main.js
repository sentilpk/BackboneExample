requirejs.config({

	paths: {
		'jquery' : '/vendor/jquery-2.0.3.min',
		'underscore': '/vendor/underscore',
		'backbone': '/vendor/backbone',
		'backbone.marionette' :'/vendor/backbone.marionette'
		
	},
	shim: {
		'backbone': {
			deps: ['underscore','jquery'],
			exports: 'Backbone'
		},
		'backbone.marionette':{
			deps:['backbone'],
			exports: 'Marionette'
		}

	}



});

require(['app'], function(app) {
    console.log(app);
});



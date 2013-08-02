define(['backbone.marionette'],function(Marionette){
	var todoView = Marionette.ItemView.extend({
       template : '#example',
       onBeforeRender:function(){
       	console.log('onBeforeRender Called');
       },
       onRender:function(args){
       	console.log('onAfterRender Called',args);
       }
	});
	return todoView;
})
(function($){
	({
		plugins:function(){
			var $container = $('.masonry');
			// initialize
			$container.imagesLoaded( function() {
			  $container.masonry({
				columnWidth:1,
                itemSelector: '.item',
				gutter:0
              });
			});
			
			$(window).on("resize",function(){
				$container.masonry("layout")
			});
		},
		init:function(){
            var self = this;
            $.each(self,function(i,ele){
                if(i !== "init"){
                    setTimeout(ele,0);
                }
            });
        }
	}).init();
})(jQuery);
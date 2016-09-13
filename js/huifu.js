$(document).ready(function(){

		$('.comment-txt ul li .hf-btn').click(function(){
			var $el = $('.edit');
			var user = $(this).parent().parent().prev().find('.nick').html();
			var userHref = $(this).parent().parent().prev().find('.nick').attr('href');
			var userId = userHref.substring(userHref.indexOf("=")+1,userHref.length);
			$el.html('回复 '+user+':');
			$el.focus();
			$('input.hf-user').attr("user",userId);
		});
	
});
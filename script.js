(function ($, undefined) {
    $.extend({
        pixLikeCoinBox: function (options) {
			var liker_id = options['liker_id'];
            var article_id = document.getElementsByTagName('body')[0].getAttribute('data-article-id');
          	if(article_id != null && typeof liker_id != 'undefined') {
          		var content_inner = document.querySelector('.article-content-inner'),
              		url = window.location.href,
            		likecoin = '<p><iframe frameborder="0" height="230" src="https://button.like.co/in/embed/'+liker_id+'/button?referrer='+url+'" width="100%"></iframe></p>';
            		content_inner.innerHTML += likecoin;
      		}
        }
    });
})(jQuery);

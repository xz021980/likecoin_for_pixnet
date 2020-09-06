  (function ($, undefined) {
    $.extend({
      pixLikeCoinBox: function (options) {
        var liker_id = options['liker_id'];
        var likecoin_cta=options['likecoin_cta'] || [];
        var article_id = document.getElementsByTagName('body')[0].getAttribute('data-article-id');
        if(article_id != null && typeof liker_id != 'undefined') {
          var content_inner = $('.article-body .article-content-inner:first-child'),
          url_arr = window.location.href.split('-'),
          url = encodeURIComponent(url_arr[0]),
          likecoin = '<div class="likecoin"><iframe frameborder="0" height="190" src="https://button.like.co/in/embed/'+liker_id+'/button?referrer='+url+'" width="100%"></iframe></div>';

          if(Number(likecoin_cta.length)) {
            likecoin = '<div class="likecoin_cta">' + likecoin_cta + '</div>' + likecoin;
          }

          $(likecoin).insertBefore('.poi-section');


          content_inner.find('p:contains([likecoin])').html(likecoin);

        }
      }
    });
  })(jQuery);

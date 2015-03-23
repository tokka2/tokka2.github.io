google.load('feeds', '1');
function initialize(url = '', limit = 6, target = 0) { //引数は適当に切り替える
	var target = (target == 0) ? '_blank' : '_self';
	var thumbnail = new Array();
	var feed = new google.feeds.Feed(url);
	feed.load(function(rss) {
		if (!rss.error) {
			var entry = rss.feed.entries;
			console.log(rss);
			for(i = 0; i < limit; i++){
				thumbnail[i] = entry[i].content.match(/http[s]?\:\/\/[\w\+\$\;\?\.\%\,\!\#\~\*\/\:\@\&\\\=\_\-]+jpg|jpeg|gif|png|bmp/i);
				$('#rssBox').append('<div class="img_box2"><a href="' + entry[i].link + '" target="' + target + '"><img src="' + thumbnail[i][0] + '" height="' + height + '" width="' + width + '"></a><p class="img_comment3 opa"><a href="' + entry[i].link + '" target="' + target + '">'+ entry[i].title +'</span></a></div>');
			}
		}
	});
}
google.setOnLoadCallback(function(){
	initialize('http://tokka2.github.io/feed'); //ここにURL
});
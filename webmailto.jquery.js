(function ( $ ) {
    $.fn.webmailto = function( options ) {
        var settings = $.extend({
			googleAuth: 'https://plus.google.com/u/0/_/blank',
			googleControl: 'https://plus.google.com/_/blank'
        }, options );
		
		function gmail1() {
			results[0] = performance.now();
			gmail3();
		}
		function gmail2() {
			results[1] = performance.now();
			gmail3();
		}
		function gmail3() {
			if(results[0] && results[1]) {
				if(results[0] / results[1] > 0.75) {
					alert('Logged in!');
				} else {
					alert('Not logged in!');
				}
			}
		}
		
		function loader(url, callback) {
			var script = document.createElement('script');
			script.async = true;
			script.src = url;
			script.onload = callback;
			document.body.appendChild(script);
		}
		
		loader('https://plus.google.com/u/0/_/blank', gmail2);
		loader('https://plus.google.com/_/blank', gmail1);
		
        return this.each(function() {
			//alert($(this).text());
        });
    };
}( jQuery ));
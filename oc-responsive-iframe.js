/**
 * Turns iframes responsive
 * Depends on jQuery
 */

var OcResponsiveIframe = function() {
	OcResponsiveIframe.prototype.init = function() {
		$(document).ready(function(){
			var style = document.createElement('style');
			style.type = 'text/css';
			style.innerHTML = ' \
				.oc-iframe-wrapper {position: relative;width: 100%;padding-bottom: 56.5%;display: block;float: left; } \
				.oc-iframe-wrapper iframe {position: absolute;left: 0;top: 0;width: 100%;height: 100%;} \
			';
			document.getElementsByTagName('head')[0].appendChild(style);

			var iframes = $('iframe');

			for(var i in iframes)
			{
				ifr = iframes[i];
				html = '<div class="oc-iframe-wrapper"></div>';
				$(ifr).wrap(html);
			}
		});
	}
};

var oc_resp_iframe = new OcResponsiveIframe();
oc_resp_iframe.init();
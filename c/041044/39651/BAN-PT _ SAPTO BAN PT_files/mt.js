$(function(){
	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}	
	cclick = function(objthis,n){
		location.href = $(objthis).attr('href')+"?xmenu="+n;
	}
	a = getParameterByName('xmenu');
	data_stat = $('li[data-xid="'+a+'"]');
	data_stat.addClass('active');
	data_stat.find('ul').addClass('collapse in');
	data_stat.find('ul').attr('aria-expanded','true');
	
});
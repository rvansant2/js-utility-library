var utils = (function() {
	
	var getURLParamsByName = function(keyname) {
		var keyname = keyname.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]"),
		regexS = "[\\?&]" + keyname + "=([^&#]*)",
		regex = new RegExp(regexS),
		results = regex.exec(window.location.search);
		if(results == null) {
			return "";
		} else {
			return decodeURIComponent(results[1].replace(/\+/g, " "));
		}
	};

	var urlParamsToObj = function() {
		var urlParamsObj = {},
		match,
	    pl     = /\+/g,  // Regex for replacing addition symbol with a space
	    search = /([^&=]+)=?([^&]*)/g,
	    decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
	    query  = window.location.search.substring(1);

	    while (match = search.exec(query)) {
	       urlParamsObj[decode(match[1])] = decode(match[2]);
	    }
	    return urlParamsObj;
	};

	return {
		getURLParamsByName: getURLParamsByName,
		urlParamsToObj: 	urlParamsToObj
	};
})();
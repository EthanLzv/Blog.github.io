// build time:Sat May 30 2020 22:07:38 GMT+0800 (GMT+08:00)
$(document).ready(function(){var o,i=window.location.href.replace(window.location.origin,"");if($(window).on("scroll",function(){clearTimeout(o),o=setTimeout(function(){Cookies.set("scroll-cookie",$(window).scrollTop()+"|"+i,{expires:365,path:""})},250)}),void 0!==Cookies.get("scroll-cookie")){var e=Cookies.get("scroll-cookie").split("|");e[1]==i&&$(window).scrollTop(e[0])}});
//rebuild by neat 
// build time:Sat Apr 11 2020 17:10:10 GMT+0800 (GMT+08:00)
window._bd_share_main.F.module("view/slide_view",function(i,n,e){var s=i("base/tangram").T,t=i("base/class").Class,a=(i("conf/const"),i("view/view_base")),o={box:"bdshare-slide-button-box",btn:"bdshare-slide-button"};n.View=t.create(function(i){function n(){window._bd_share_main.F.use("slide_share.css",function(){var n=r.width()||24;r.css("right"==i.bdPos?"left":"right",-n),d&&d.css({top:0|i.bdTop,width:0,"z-index":99999}).css(i.bdPos,0).show(),l.width(0).hide(),b.width(m),h.width(m)})}function e(){if(!f){b.html()||window._bd_share_main.F.use("component/partners",function(i){partnerSort=i.partnerSort,partners=i.partners,a(partnerSort,partners)});window._bd_share_main.F.use("component/animate",function(i){l.show(),i.animate(d[0],{width:m},300,function(){f=!0},function(i){l.width(i*m)})})}}function t(){if(f){window._bd_share_main.F.use("component/animate",function(i){i.animate(d[0],{width:0},300,function(){f=!1,l.hide()},function(i){l.width((1-i)*m)})})}}function a(n,e){var t=i.bdMiniList||n.slice(0,8*w),a=[];s.each(t,function(i,n){/(iPhone | iPad | Android)/i.test(navigator.userAgent)&&"weixin"===n||(a[i]='<li><a href="#" onclick="return false;" class="slide-'+n+'" data-cmd="'+n+'">'+e[n].name+"</a></li>")}),b.html(a.join(""))}var d,r,c,l,b,h,u=this,f=!1;u._buttonType=1;var w=i.bdMini||2,m=110*w+6,i=s.extend({},i);u.render=function(){var e=o.btn,t=o.box+" bdshare-slide-style-"+("right"==i.bdPos?"r":"l")+i.bdImg,a=['<div class="'+t+'" style="display:none;">','<a href="#" onclick="return false;" class="'+e+'"></a>','<div class="bdshare-slide-list-box">','<div class="bdshare-slide-top">分享到</div>','<div class="bdshare-slide-list">','<ul class="bdshare-slide-list-ul"></ul>',"</div>",'<div class="bdshare-slide-bottom">','<a href="#" onclick="return false;" class="slide-more"  data-cmd="more">更多...</a>',"</div>","</div>","</div>"].join("");if(d=s(a).appendTo("body"),r=d.find("."+o.btn),l=d.find(".bdshare-slide-list-box"),b=d.find(".bdshare-slide-list-ul"),c=d.find(".bdshare-slide-list"),h=d.find(".bdshare-slide-bottom"),n(),u._entities.push(d),6==s.browser.ie){d.css("position","absolute");var f=parseInt(d.css("top"));setInterval(function(){var n=(0|i.bdTop)+s(window).scrollTop();f!=n&&window._bd_share_main.F.use("component/animate",function(i){i.animate(d[0],{top:n},300)})},1e3)}},u._init=function(){r.on("mouseenter click",e),d.on("mouseleave click",t),s("body").click(function(i){d.contains(i.target)||t()})},u._distory=function(){d.remove()}},a.ViewBase)});
//rebuild by neat 
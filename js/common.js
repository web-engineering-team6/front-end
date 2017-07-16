/* 全体共通のjsはココ */

// $(".loadingcss").click(function(){
// 	var $loading = $(".loading");
// 	$.ajax({
// 		url:"http://codepen.io/to-r/pen/bEeBrP.js",
// 		dataType:"json",
// 		beforeSend:function(){
// 			$loading.removeClass("is-hide");
// 		},
// 		success: function(data){
// 			$loading.addClass("is-hide");
// 			data.items.forEach(function(item){
// 				$("#list").append("<li>"+item.title+"</li>");
// 			});
// 		}
// 	});
// });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-102646153-1', 'auto');
  ga('send', 'pageview');

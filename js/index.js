/* index.htmlのjsはココ */

//画像切り取りAPI
$(function(){
	//画像データをAPIに送信する処理を書きます
	// http://black-flag.net/jquery/20150217-5587.html このへんを参考に実装すれば良さそう
});

//データ送信API
function picsend(){
	var request = new XMLHttpRequest();

	var fullname = document.getElementById('fullname').value;
	var url = "http://google.com/";

	request.open('POST', 'https://private-anon-0b73dcc383-aichangesfaces.apiary-mock.com/v1/faceAnalysis');

	request.setRequestHeader('Content-Type', 'application/json');

	request.onreadystatechange = function () {
	  if (this.readyState === 4) {

 	   	var body = JSON.parse(this.responseText);

		url = "result.html?fullname="+fullname+"&url="+url+"&"+body[0].attribute_name1+"="+body[0].attribute1+"&"+body[1].attribute_name2+"="+body[1].attribute2+"&"+body[2].attribute_name3+"="+body[2].attribute3
		console.log(url);
    	document.location.href = url;

 	 }
	};

	var body = {
	    'image_url': url,
	    'analysis_type': 'seasoning'
	};

	request.send(JSON.stringify(body));

	return false;
};

//ページの頭に戻る処理
$(function() {
  $('.btn-top').click(function() {
    // スクロール
    $('html,body').animate({scrollTop: 0}, 500, 'swing');
  });
});


//画像選択のフォーム作成
$(document).on('change', ':file', function() {
    var input = $(this),
    numFiles = input.get(0).files ? input.get(0).files.length : 1,
    label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.parent().parent().next(':text').val(label);
});






// 参考 http://blog2.gods.holy.jp/?eid=189
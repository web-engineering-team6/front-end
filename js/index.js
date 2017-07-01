/* index.htmlのjsはココ */

//画像切り取りAPI
$(function(){
	//画像データをAPIに送信する処理を書きます
	// http://black-flag.net/jquery/20150217-5587.html このへんを参考に実装すれば良さそう
});

//データ送信API
function picsend(){
	var request = new XMLHttpRequest();

	request.open('POST', 'https://private-anon-0b73dcc383-aichangesfaces.apiary-mock.com/v1/faceAnalysis');

	request.setRequestHeader('Content-Type', 'application/json');

	request.onreadystatechange = function () {
	  if (this.readyState === 4) {
	    console.log('Status:', this.status);
	    console.log('Headers:', this.getAllResponseHeaders());
 	   	console.log('Body:', this.responseText);

 	   	var body = JSON.parse(this.responseText);

		url = "result.html?"+body[0].attribute_name1+"="+body[0].attribute1+"&"+body[1].attribute_name2+"="+body[1].attribute2+"&"+body[2].attribute_name3+"="+body[2].attribute3
		console.log(url);
    	document.location.href = url;

 	 }
	};

	var body = {
	    'image_url': '/static/img/000001.png',
	    'analysis_type': 'seasoning'
	};

	request.send(JSON.stringify(body));

	return false;
};

//ページの頭に戻る処理
$(function(){
	$('#pageTop').click(function(){
	$('index,html').animate({
	scrollTop: 0},500);
	return false;
	})
});
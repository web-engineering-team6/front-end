/* index.htmlのjsはココ */

//画像切り取りAPI
$(function(){
	//画像データをAPIに送信する処理を書きます
	// http://black-flag.net/jquery/20150217-5587.html このへんを参考に実装すれば良さそう
});

//データ送信API
function picsend(){
	//各種データをAPIに送信する処理を書きます

    document.location.href = "result.html";
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
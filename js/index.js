/* index.htmlのjsはココ */

//設定

test_environment = 'https://private-anon-0b73dcc383-aichangesfaces.apiary-mock.com/v1/faceAnalysis'
real_environment = 'http://127.0.0.1:5000/v1/faceAnalysis'
apiurl = real_environment



// 画像のアップロード
$('#file').change(function (e){

    var img = new Image();
    var reader = new FileReader();
    var file = this.files[0];
    var datasize = this.files[0].size;
    
    if (!file.type.match(/^image\/(png|jpeg)$/)){
        alert("対応画像ファイル[png|jpeg]");
        return;
    }
    
    reader.onload = function(event){
        img.onload = function(){
            var data = {data:img.src.split(',')[1]};
            console.log(data);
            console.log(datasize);

            function post_pic(){
            var result = $.ajax({
                type: 'POST',
                url: '../pic.php',
                data: data,
                async: false
            }).responseText;
            return result;
            }

            url = post_pic()
            console.log(url)


        };
        img.src = event.target.result;

    };
    
    reader.readAsDataURL(file);

});

// データ送信API
$('#start').click(function(){
    //alert(this.id);


	var request = new XMLHttpRequest();

	var fullname = document.getElementById('fullname').value;


	request.open('POST', apiurl);

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

});

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

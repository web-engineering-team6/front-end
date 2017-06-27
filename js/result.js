/* result.htmlのjsはココ */

// onButtonClick()をhtmlファイルからjsファイルに移動
function onButtonClick() {
  target1 = document.getElementById("output1");
  target2 = document.getElementById("output2");
  target3 = document.getElementById("output3");
  target1.innerText = document.forms.id_form1.id_textBox1.value;
  target2.innerText = document.forms.id_form2.id_textBox2.value;
  target3.innerText = document.forms.id_form3.id_textBox3.value;
}

// 申込FormのtextBoxへの記入がConfirmされたものをSlackへPost
$(function () {
    $('.slack-submit').on('click', function () {
    var url = 'https://slack.com/api/chat.postMessage';

        // GETリクエストでtoken.jsのjavascriptファイルを読み込みコールバック関数で実行
        // http://www.jiichan.com/programming/programming.php?lang=js&no=03
        $.getScript("token.js", function(){
          alert('Can I read token?');
        });

        var data = {
						token: token,
            // ⬆︎ 別ファイルtoken.jsに書いたグローバル変数var token = 'xoxp-...'を呼び出す。
            // token: 上のtoken情報中の--を-に置換するとワークします。4箇所。GithubでそのままtokenをPublicに共有すると無効化されるため。',
            channel: '#yoshinobu-channel',
            username: 'yoshinobu-nisei-bot',
            as_user: 'false',
            icon_url: 'http://lorempixel.com/48/48',
            text: 'Name: '+target1.innerText+'\n'+'Email: '+target2.innerText+'\n'+'Message: '+target3.innerText
        };

        $.ajax({
            type: 'GET',
            url: url,
            data: data,
            success: function (data) {
                alert( 'Can I post to Slack? :' + data.ok );
            }
        });
    });
});

//ツイート送信
function tweet(){
	//ツイートを送る処理を書きます
	//console.log("test-tweet");

	return false;
};


//データSlack送信
function slacksend(){
	//Slackを送る処理を書きます
	//console.log("test-slack");

	return false;
};

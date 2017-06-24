/* result.htmlのjsはココ */

// 申込FormのtextBoxへの記入がConfirmされたものをSlackへPost
$(function () {
    $('.slack-submit').on('click', function () {
    var url = 'https://slack.com/api/chat.postMessage';

        var data = {
						token: 'xoxp--190466053957--189718136128--201686809458--3b59530140f3ae8d9b76852092f5771b',
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

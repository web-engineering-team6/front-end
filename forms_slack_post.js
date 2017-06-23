$(function () {
    $('.slack-submit').on('click', function () {
    var url = 'https://slack.com/api/chat.postMessage';

        var data = {
            token: 'Slack #yoshinobu-channelで共有します。GithubでPublicに共有すると無効化されるため。',
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

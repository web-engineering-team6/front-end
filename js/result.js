/* result.htmlのjsはココ */

//ツイート送信
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//データSlack送信
$(function () {
    $('.slack-submit').on('click', function () {
    var url = 'https://slack.com/api/chat.postMessage';

    var name = $("#name").val()
    var furigana = $("#furigana").val()
    var sex = $("[name=sex]:checked").val()
    var tel = $("#tel").val()
    var mail = $("#mail").val()
    var text = $("#text").val()

    if(name == ""||furigana == ""||sex == ""||tel == ""||mail == ""){
        alert('一部の項目が入力されていません。');
　　 }else{

        var data = {
            token: token_info,
            channel: '#yoshinobu-channel',
            username: 'yoshinobu-nisei-bot',
            as_user: 'false',
            icon_url: 'http://lorempixel.com/48/48',
            text: 'Name: '+name+'\n'+'furigana: '+furigana+'\n'+'sex: '+sex+'\n'+'tel: '+tel+'\n'+'mail: '+mail+'\n'+'text: '+text
        };

        $.ajax({
            type: 'GET',
            url: url,
            data: data,
        });
    }
    });
});


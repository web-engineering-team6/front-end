/* result.htmlのjsはココ */

//ツイート送信
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//データSlack送信
// 申込FormのtextBoxへの記入がConfirmされたものをSlackへPost
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

//URLクエリパラメータをJSONに変換
var QueryString = {  
  parse: function(text, sep, eq, isDecode) {
    text = text || location.search.substr(1);
    sep = sep || '&';
    eq = eq || '=';
    var decode = (isDecode) ? decodeURIComponent : function(a) { return a; };
    return text.split(sep).reduce(function(obj, v) {
      var pair = v.split(eq);
      obj[pair[0]] = Number(decode(pair[1]));
      return obj;
    }, {});
  },
  stringify: function(value, sep, eq, isEncode) {
    sep = sep || '&';
    eq = eq || '=';
    var encode = (isEncode) ? encodeURIComponent : function(a) { return a; };
    return Object.keys(value).map(function(key) {
      return key + eq + encode(value[key]);
    }).join(sep);
  },
};

var arraydata = QueryString.parse();

            var pieData = [
                {
                    "value": 0,
                    "color":"#CCCCCC"
                },
                {
                    "value" : 0,
                    "color" : "#FF0066"
                },
                {
                    "value" : 0,
                    "color" : "#666666"
                }
            ];


            pieData[0].value = arraydata.solty
            pieData[1].value = arraydata.soysource
            pieData[2].value = arraydata.source

var myPie = new Chart(document.getElementById("pieArea").getContext("2d")).Pie(pieData);



/* result.htmlのjsはココ */


//ツイートBOX
var href = encodeURIComponent(window.location.href);
document.getElementById("tweet-box").innerHTML = "<a href='https://twitter.com/intent/tweet?text=しお顔？しょうゆ顔？ソース顔？人工知能による顔診断のDeepFace。私の分析結果はこちら->&url="+href+"&hashtags=DeepFace' rel='nofollow' onClick='window.open(encodeURI(decodeURI(this.href)),'twwindow','width=550, height=450, personalbar=0, toolbar=0, scrollbars=1'); return false;' class='btn btn-info btn-lg btn-block active btn-top'>結果をツイートする</a>";

//ツイート送信
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');




//URLクエリパラメータをJSONに変換
var QueryString = {  
  parse: function(text, sep, eq, isDecode) {
    text = text || location.search.substr(1);
    sep = sep || '&';
    eq = eq || '=';
    var decode = (isDecode) ? decodeURIComponent : function(a) { return a; };
    return text.split(sep).reduce(function(obj, v) {
      var pair = v.split(eq);
      obj[pair[0]] = decode(pair[1]);
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

function floatFormat( number, n ) {
    var _pow = Math.pow( 10 , n ) ;

    return Math.round( number * _pow ) / _pow ;
}


console.log(arraydata)

            var pieData = [

                {
                    "label" : "しお顔度",
                    "value": 0,
                    "color":"#3498db"
                },
                {
                    "label" : "しょうゆ顔度",
                    "value" : 0,
                    "color" : "#666666"
                },
                {
                    "label" : "ソース顔度",
                    "value" : 0,
                    "color" : "#CCCCCC"
                }
            ];


            pieData[0].value = floatFormat(arraydata.solty * 100,2)
            pieData[1].value = floatFormat(arraydata.soysource * 100,2)
            pieData[2].value = floatFormat(arraydata.source * 100,2)


　　var ctx = document.getElementById("pieArea").getContext("2d");
　　var myPie = new Chart(ctx).Pie(pieData, {
　　　　onAnimationComplete: function(){
　　　　　　this.showTooltip(this.segments, true);
　　　　},
　　　　tooltipEvents: [],
　　　　showTooltips: true 
　　});

    var name = arraydata.fullname
    console.log(name)
    $("#yourname").text(name);

    var url = arraydata.url
    console.log(url)
    $("#yourface").attr("src",url);



// 参考 http://blog2.gods.holy.jp/?eid=189




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
            success: function(){
                alert("申し込み完了しました。スカウトされた場合、ご指定の電話番号・メールアドレスにご案内差し上げます！");
            }
        });
    }
    });
});
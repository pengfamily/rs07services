var _smartsupp = window.smartsupp || { key: 'ce588ee41ec61266af22f4c1a63d7dd6002b8b6c' };

_smartsupp = _smartsupp || [];
(function(d) {
    var s, c = d.createElement('script');
    c.type = 'text/javascript';
    c.charset = 'utf-8';
    c.async = true;
    c.src = 'https://www.smartsuppchat.com/loader.js?';
    s = d.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(c, s);
})(document);





function send_chat_message(message){
    smartsupp('chat:open');
    smartsupp('chat:message', message);
    return
    $.get("/api/check_verify/",function(data){
        console.log(data)
        if (data.status == false){
            window.location.href= "/login"
            return
        }
        else{
            if (!data.data.verify){
                window.location.href = "/veriff/url/"
                return
            }
            else{
                smartsupp('chat:open');
                smartsupp('chat:message', message);
            }
        }
    })
}


//var globeXData = {}
//$(".skill-block").each(function(ind,elem){
//    var e = $(elem)
//    var jName = e.find(".skill-name").text().toLowerCase()
//    globeXData[jName] = []
//    e.click()
//    var sec = $("#method").find("option")
//    sec.each(function(ind,ex){
//        if (!$(ex).text()){return}
//        globeXData[jName].push($(ex).text().trim())
//    })
//})
//console.log(globeXData)
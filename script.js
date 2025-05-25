function send_chat_message(message){
    $.get("/api/check_verify/",function(data){
        console.log(data)
        if (data.status == false){
            window.location.href = "/login";
            return;
        } else {
            if (!data.data.verify){
                window.location.href = "/veriff/url/";
                return;
            } else {
                smartsupp('chat:open');
                smartsupp('chat:message', message);
            }
        }
    });
}

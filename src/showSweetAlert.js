$(function() {
    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
        nemui = response.farewell;
        Swal.fire({
            icon : 'success'
            , text : nemui
            , type : 'success'
            , toast: true
            , position: 'top-end'   //画面右上
            , showConfirmButton: false
            , timer: 5000           //5秒経過後に閉じる
            });
      });
});
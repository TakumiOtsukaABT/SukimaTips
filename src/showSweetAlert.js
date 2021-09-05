$(function() {
    chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
        nemui = response.farewell;
        Swal.fire({
            iconHtml: '<img src="https://raw.githubusercontent.com/TakumiOtsukaABT/SukimaTips/main/src/Modeless/logo1-100.jpg" width="100" height="20">'
            , text : nemui
            , type : 'success'
            , toast: true
            , position: 'top-end'   //画面右上
            , showConfirmButton: false
            , timer: 5000           //5秒経過後に閉じる
            });
        // Swal.fire({
        //     title: 'Sweet!',
        //     text: 'Modal with a custom image.',
        //     imageUrl: 'https://picsum.photos/id/237/200/300',
        //     imageWidth: 400,
        //     imageHeight: 80,
        //   })
      });
});
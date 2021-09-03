chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'loading' && tab.active) {

      // XMLHttpRequestオブジェクトの作成
        var request = new XMLHttpRequest();

    // URLを開く
        request.open('GET', "https://api.chucknorris.io/jokes/random", true);

    // レスポンスが返ってきた時の処理を記述 
        request.onload = function () {
    // レスポンスが返ってきた時の処理
        var data = this.response;
        var obj = JSON.parse(data);
        // console.log(obj.value);

        var text = document.getElementById("id")
        text.value = obj.value
}

// リクエストをURLに送信
request.send();
  
    }
    console.log(tabId);
    console.log(changeInfo);
    console.log(tab);
  })
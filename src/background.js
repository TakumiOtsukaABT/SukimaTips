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

    }

// リクエストをURLに送信
request.send();
  
    }
    console.log(tabId);
    console.log(changeInfo);
    console.log(tab);
  })

  const $button=document.getElementsByTagName('button');
  const buttonLength = $button.length;
  const pass ='on';


  let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    if(pass === e.target.textContent){
        window.alert('tips表示！！');
      }
      else{
        window.alert('tips表示しない！！');
      }
  });
  handleIndex++;
}

  
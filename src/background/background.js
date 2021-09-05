var result = []; // 最終的な二次元配列を入れるための配列（外部関数へ移動しました）
const end_pass = 'STOP';

  const $button=document.getElementsByTagName('a');
  const buttonLength = $button.length;
  const pass ='START';

/////////////////////////////////////////////////////
///////↓↓↓URLの変更を検知後処理をする↓↓↓///////
/////////////////////////////////////////////////////
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'loading' && tab.active) {
      popUp_function();
    }
})


let handleIndex = 0;

while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    if(pass === e.target.textContent){
        // window.alert('tips表示！！');
        localStorage.setItem('kidouchuu',true);
        popUp_function();
      }
      else {//強制終了
        console.log("set false");
        localStorage.setItem('kidouchuu',false);
      }
  });
  handleIndex++;
}


//showSweetAlertに渡している
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    let message = localStorage.getItem('showNext');
    let active = localStorage.getItem('kidouchuu');
    if (request.greeting == "hello")
      sendResponse({farewell: message, kidou: active});
  });




const popUp_function = () =>{
    //CSVファイルを読み込む関数getCSV()の定義
    function getCSV(){
        var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
        req.open("get", "../tips.csv", true); // アクセスするファイルを指定
        req.send(null); // HTTPリクエストの発行
        // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
        req.onload = function(){
	        convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
        }
    }
        // 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
    function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
        // var result = []; // 最終的な二次元配列を入れるための配列（移動したためコメントアウト）
        var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成

        //各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
        for(var i=0;i<tmp.length;++i){
            result[i] = tmp[i].split(',');
        }
          console.log("バックグラウンドpp");
          console.log(result[2][1]);
          // localStorage.setItem('showNext',result[2][1]); 
          console.log(localStorage.getItem('showNext'));
          var y = Math.floor( Math.random() * 5 ) ;
          var x = Math.floor( Math.random() * 4 ) ;
          // alert(y);
          console.log(x);
            console.log(result[x][y]); 
            let message = result[x][y];
            console.log("バックグラウンドp");
            // console.log(message);
            localStorage.setItem('showNext',message); 
    }
getCSV(); //最初に実行される
}

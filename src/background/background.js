// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//     if (changeInfo.status == 'loading' && tab.active) {
//       // XMLHttpRequestオブジェクトの作成
//         var request = new XMLHttpRequest();

//       // URLを開く
//         request.open('GET', "https://api.chucknorris.io/jokes/random", true);

//       // レスポンスが返ってきた時の処理を記述 
//         request.onload = function () {
//       // レスポンスが返ってきた時の処理
//         var data = this.response;
//         var obj = JSON.parse(data);
//         }

//       // リクエストをURLに送信
//         request.send();
  
//     }
//     console.log(tabId);
//     console.log(changeInfo);
//     console.log(tab);
// })


let state = 0 ;//初期状態（off）
var result = []; // 最終的な二次元配列を入れるための配列（外部関数へ移動しました）

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
	    // window.alert("check point");
        //各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
        for(var i=0;i<tmp.length;++i){
            result[i] = tmp[i].split(',');
        }
        // if(state===1){//移動したためコメントアウト
        //     alert(result[cont][1]);      
        // }
    }
getCSV(); //最初に実行される
}
////////////////////////////////////////
///////↑↑↑配列に格納済み↑↑↑///////ボタンのところ後で変更するon→start
////////////////////////////////////////

let cont = 0;

/////////////////////////////////////////////////////
///////↓↓↓URLの変更を検知したら動かす↓↓↓///////
/////////////////////////////////////////////////////
cont++;

const $button=document.getElementsByTagName('button');
const buttonLength = $button.length;
const pass ='START';
let handleIndex = 0;

while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener('click', (e) => {
    if(pass === e.target.textContent){
        state = 1 ;//STARTの状態
        popUp_function();
      }
  });
  handleIndex++;
}



if(state===1){
  alert(result[cont][1]);      
}
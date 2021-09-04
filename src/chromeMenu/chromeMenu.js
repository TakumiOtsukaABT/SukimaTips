let testButton = document.getElementById("test");
testButton.addEventListener('click',save);

function save() {
    chrome.windows.create( "../ModeLess/modeLess.html", "aaaa",'width=500,height=300,toolbar=yes,menubar=yes,scrollbars=yes');
}

// $("#open-sample-dialog").on("click", function(){
//   $("#sample-dialog").dialog();
// });
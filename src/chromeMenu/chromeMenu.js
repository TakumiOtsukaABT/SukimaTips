let testButton = document.getElementById("test");
testButton.addEventListener('click',save);

function save() {
    window.open( "../ModeLess/modeLess.html", "aaaa",'width=500,toolbar=yes,menubar=yes,scrollbars=yes');
}

// $("#open-sample-dialog").on("click", function(){
//   $("#sample-dialog").dialog();
// });
let index = 0;

function showColors(){
     var colors = ["black", "navyblue", "red","orange","green","purple","yellow","pink"];
     document.getElementsByTagName("body")[0].style.background = colors[index++];
     if (index > colors.length - 1){
        index = 0;
     }
}
showColors()

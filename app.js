window.onscroll = function() {sliderLoadFunc()};

function sliderLoadFunc(){
    var winScroll =  document.documentElement.scrollTop;;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("hr").style.width = scrolled + "%";
    console.log(winScroll);
    
}



    

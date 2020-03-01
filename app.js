window.onscroll = function() {sliderLoadFunc()};

function sliderLoadFunc(){
    var winScroll =  document.documentElement.scrollTop;;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 50;
    document.getElementById("hr").style.width = 50-scrolled + "%";
    document.getElementById("hr2").style.width = 50-scrolled + "%";
    
    if(winScroll == height){
        document.getElementById("hr").style.animationName = "div-slider";
        document.getElementById("hr2").style.animationName = "div-slider";
    }
    else{
        document.getElementById("hr").style.animationName = null;
        document.getElementById("hr2").style.animationName = null;
    }
}

    




    

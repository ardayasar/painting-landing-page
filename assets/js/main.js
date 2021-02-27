var button_count = $(".slider button").length;
var n = 1;
setInterval(function(){
    $(".slider button:nth-child("+ n +")").css("color", "#b5b5b5");
    n = n + 1;
    if(n > button_count){
        n = 1;
    }
    var background = $(".slider button:nth-child("+ n +")").attr("d-img");
    $('#bg').fadeOut(2000, function(){
        $("#bg").css("background-image", "url(../../"+ background +")");
        setTimeout(function(){$('#bg').fadeIn(2000);}, 1500);
    });
    $(".slider button:nth-child("+ n +")").css("color", "white");
}, 10000);
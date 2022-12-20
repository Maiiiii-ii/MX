
// intro au survol
$("#diyishiqi").hide();
            $("#anniu-1").hover(function () {
                $("#diyishiqi").show();
            }, function () {
                $("#diyishiqi").hide();
            })


$("#dieshiqi").hide();
            $("#anniu-2").hover(function () {
                $("#dieshiqi").show();
            }, function () {
                $("#dieshiqi").hide();
            })

$("#disanshiqi").hide();
            $("#anniu-3").hover(function () {
                $("#disanshiqi").show();
            }, function () {
                $("#disanshiqi").hide();
            })


// Cliquez sur le bouton pour faire apparaître lentement l'image
$(document).ready(function(){
    $("#anniu-1").click(function(){
        $(".yi").fadeToggle(300)
    });
})

$(document).ready(function(){
    $("#anniu-2").click(function(){
        $(".e").fadeToggle(300)
    });
})
$(document).ready(function(){
    $("#anniu-3").click(function(){
        $(".san").fadeToggle(300)
    });
})


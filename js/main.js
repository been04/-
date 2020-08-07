$(document).ready(function() {
    $('.left_bar').click(function(){
        $('.all_menu').animate( { left:'0' } ), 3000, 'linear';
    });

    $('.close').click(function(){
        $('.all_menu').animate( { left:'-100%' } ), 3000, 'linear';
    });



    //parallax
    /*var wd = $(window);
    $(".separator").each(function () {
        var bg = $(this);
        wd.scroll(function () {
        var yPos = -(wd.scrollTop() / 2);
        var coords = "50%" + yPos + "px";
        bg.css({ backgroundPosition: coords });
        });
    });
    });*/


    $('.menu_icon').click(function(){
        $('nav > ul').slideToggle();
    });

    /*$('.menu_icon').click(function(){

        var a = 0;

        if(a < 10){
            a = 10;
            $('nav > ul').css( { height: 'auto'});
            
        }else{
            a = -10;
            $('nav > ul').css( { height: '0'});
        }
        
    });*/





});
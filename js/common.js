$(document).ready(function(){
    $("#header").load("./header.html");
    $("#footer").load("./footer.html");
    $("#login").load("./login.html");

    $(window).scroll(function(){
        var scroll = $(document).scrollTop();
        if(scroll > 50){
            $("#header").addClass("active");
        }else{
            $("#header").removeClass("active");
        };
    });

    // menu //
    $(document).on("click", "#header .menuBtn img", function(){
        var $open = $("#header header .wrap nav").hasClass("open");
        
        if($open == false){
            $("#header header .wrap nav").addClass("open");
            $("#header header .wrap nav").slideDown();
            $("body").css("overflow-y", "hidden");
            $(this).attr("src", "./img/close_icon.svg");
        }else{
            $("#header header .wrap nav").removeClass("open");
            $("#header header .wrap nav").attr("style", "");
            $("body").css("overflow-y", "auto");
            $(this).attr("src", "./img/menu_icon.svg");
        }
            
    });

    // Login //
    $(document).on("click", "#header .loginBtn", function(){
        $("#login").addClass("active");
        $("body").css("overflow-y", "hidden");
        return false;
    });

    $(document).on("click", "#login .dark_bg, #login .close", function(){
        $("#login").removeClass("active");
        $("body").css("overflow-y", "auto");
    });

    $(document).on("focusin", "#login div[class^='user_']", function(){
        $(this).addClass("active");
    });
    $(document).on("focusout", "#login div[class^='user_']", function(){
        $(this).removeClass("active");
    });


    
});
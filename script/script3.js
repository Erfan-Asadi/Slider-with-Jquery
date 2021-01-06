$(document).ready(() => {

    $('img').not('.current').hide(); // To display only one image in the slider
    
    // $('span.current').css({'background-color':'#444444'}) // indicator
    
    
    
    
    nextImg=()=>{
        let currentSpan = $('span.current');   // indicators that connected to images
        let current = $('img.current');


        $(current).fadeOut();
        $(current).next().fadeIn();

        $(currentSpan).css({'background-color':'transparent'});
        $(currentSpan).next().css({'background-color':'#444444'});
        
        if ($(current).next('img').length > 0 && $(currentSpan).next('span').length > 0) {
            $(current).next('img').addClass('current');
            $(current).removeClass('current');
            
            $(currentSpan).next('span').addClass('current');
            $(currentSpan).removeClass('current');
        } else {
            
            $(".img-container").find("img").first().addClass("current").fadeIn();
            // $('.current').last().removeClass('current')  alternative for below
            $(current).removeClass('current');
            
            $(".circle-container").find("span").first().addClass("current").css({'background-color':'#444444'});
            $(current).removeClass('current');
        }
    }
    prevImg=()=>{
        let current = $('img.current');
        let currentSpan = $('span.current');   // indicators that connected to images

        $(current).fadeOut();
        $(current).prev().fadeIn();

        $(currentSpan).css({'background-color':'transparent'});
        $(currentSpan).prev().css({'background-color':'#444444'});
        
        if ($(current).prev('img').length > 0  && $(currentSpan).prev('span').length > 0) {
            $(current).prev('img').addClass('current');
            $(current).removeClass('current');

            $(currentSpan).prev('span').addClass('current');
            $(currentSpan).removeClass('current');
        } else {
            
            $(".img-container").find("img").last().addClass("current").fadeIn();
            // $('.current').last().removeClass('current')  alternative for below
            $(current).removeClass('current');

            $(".circle-container").find("span").last().addClass("current").css({'background-color':'#444444'});
            $(current).removeClass('current');
        }
    }

    $('span.circle').click(function(){
        let clicked = $('span').index($(this))
        
        $('span.current').css({'background-color':'transparent'})
        $('span.current').removeClass('current');
        
        $(this).addClass('current');
        $(this).css({'background-color':'#444444'});

        $('img').removeClass('current');
        $('img').eq(clicked).addClass('current');
        $('img').not('.current').hide();
        $('img').eq(clicked).fadeIn();

        
    })

    $('i.fa-angle-right').click(nextImg);
    $('i.fa-angle-left').click(prevImg);


})
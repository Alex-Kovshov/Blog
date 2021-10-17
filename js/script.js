$(function() {
  
    let intro = $("#intro");
    let header = $("#header");
    let introH = intro.innerHeight();
    let headerH = header.innerHeight();
    
    
    
   
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
});
});

/* add class active link */

/*

$("nav li").click(function ( e ) {
    e.preventDefault();
    $("nav li a.active").removeClass("active"); //Remove any "active" class  
    $("a", this).addClass("active"); //Add "active" class to selected tab  

    // $(activeTab).show(); //Fade in the active content  
});


/* Smooth scroll */

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

        let scrollEl = $(this).data('scroll');
        let scrollElPos = $(scrollEl).offset().top;
        let scrollTop = $(window).scrollTop();
        
        $('.header__burger,.header__menu').removeClass('active');
        $('body').removeClass('lock');
          
    $("html, body").animate({
          scrollTop: scrollElPos - 30
      
        }, 500)
      
        
      });
    });


    /*  Scrollspy --------------------------------------- */

let windowH = $(window).height();
scrollSpy(1);

$(window).on("scroll", function() {
     scrollTop = $(this).scrollTop();

    scrollSpy(scrollTop);
});
  
function scrollSpy(scrollTop) {
    $("[data-scrollspy]").each(function() {
       
        let $this = $(this);
        let sectionId = $this.data('scrollspy');
        let sectionOffset = $this.offset().top;
        sectionOffset = sectionOffset - (windowH / 10);

        if(scrollTop >= sectionOffset) {
            $('#nav [data-scroll]').removeClass('active');
            
            $('#nav [data-scroll="' + sectionId + '"]').addClass('active');
        }
        
        if(scrollTop == 0) {
            $('#nav [data-scroll]').removeClass('active'); 
        }

    });
}
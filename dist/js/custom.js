$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    })


    // $(".dropdown").hover(function(){
    //     var dropdownMenu = $(this).children(".dropdown-menu");
    //     if(dropdownMenu.is(":visible")){
    //         dropdownMenu.parent().toggleClass("open");
    //     }
    // });


    // const mediaQuery = window.matchMedia('(min-width: 992px)')

    // if (mediaQuery.matches) {
    
    // alert('Media Query Matched!')
    // }
});
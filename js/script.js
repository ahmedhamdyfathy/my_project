let whoAre  = $(".WHO").offset().top;  //location element at the website 
let whatDo = $(".What").offset().top;
console.log(whatDo);
$(window).scroll(function () {    //check the user used scroll or not 
    let wScroll = $(window).scrollTop();
    if(wScroll > whoAre-50){
       $("#navbarScroll").css("backgroundColor","rgba(0,0,0,0.7)");
       $("#btnUp").fadeIn(500);
    }
    else{
        $("#navbarScroll").css("backgroundColor","transparent");
        $("#btnUp").fadeOut(500);
    }

});


$("#btnUp").click(function () { 
   $("html,body").animate({scrollTop:0},2000);
    
});

anime({
    targets: '.What .path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1500,
    loop: true
  });

  anime({
    targets: '.el1',
    translateX: 270,
    direction: 'alternate',
    loop:4,
    easing: 'easeInOutSine' 
  });
  anime({
    targets: '.el2',
    translateX: -270,
    direction: 'alternate',
    loop:4,
    easing: 'easeInOutSine' 
  });

  AOS.init();
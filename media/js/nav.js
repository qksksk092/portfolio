/* 상단이동*/
$(document).ready(function () {
  var th = $('headerArea').height() + $('.visual').height();
  $('.topMove').hide();

  //console. log(th);
  // console.log($('header').height());
  // console.log($('.main').height());

  $(window).on('scroll', function () {
    //스크롤의 거리가 발생되면
    var scroll = $(window).scrollTop();
    //스크롤이 움직이면 그해당 스크롤탑의 값이 저장된다


    if (scroll > th) {
      $('.topMove').fadeIn('slow');
    } else {
      $('.topMove').fadeOut('fast');
    }
  });

  $('.topMove').click(function () {
    //상단으로 스르륵 이동합니다.
    $('html,body').stop().animate({ scrollTop: 0 }, 500);
  });
   // wide pc gnb scroll event
   $(window).on('scroll', function () {
     var scroll = $(window).scrollTop();
     var winSize = $(window).width();

     //$('.text').text(scroll);          
    
       if (scroll > 600) {
         $('#headerArea').css('background', 'rgba(0,0,0,.8)');

       } else {
         $('#headerArea').css('background', 'none');
       }
    
   });

   //네비
   $(".menuOpen").toggle(function() {
	  $(".mainMenu").slideDown('slow');
    }, function() {
	  $(".mainMenu").slideUp('fast');
    });
     
    var current=0;
    $(window).resize(function(){ 
      var screenSize = $(window).width(); //브라우저의 넓이
      if( screenSize > 1024){//모바일이상
        $(".mainMenu").show(); //모바일이상 해상도에선 무조건 보여라!
		 current=1; //모바일 이상의 해상도가 되면 1!
      }
      if(current==1 && screenSize <= 1024){ 
        $(".mainMenu").hide();
         current=0; //모바일 해상도일 경우 0!
        }
    }); 
 });
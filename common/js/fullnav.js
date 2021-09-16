//gnb
$(document).ready(function() {
  
   //2depth 열기/닫기
   $('.dropdownmenu').hover(
      function() { 
         $('.dropdownmenu .menu ul').fadeIn('normal',function(){$(this).stop();}); 
         $('#headerArea').animate({height:410},'fast').clearQueue();//clearQueue() 예약된 다음의 명령실행X
      },function() {
         $('.dropdownmenu .menu ul').hide(); 
         $('#headerArea').animate({height:180},'fast').clearQueue();
    });
    
    //1depth 효과
  //   $('.dropdownmenu .menu').hover(
  //     function() { 
  //         $('.depth1',this).css();
  //     },function() {
  //        $('.depth1',this).css('color','#333');
  //   });

    //tab 처리
    $('.dropdownmenu .menu .depth1').on('focus', function () {        
       $('.dropdownmenu .menu ul').fadeIn('normal');
       $('#headerArea').animate({height:410},'fast').clearQueue();
    });

   $('.dropdownmenu .m6 li:last').find('a').on('blur', function () {        
       $('.dropdownmenu li.menu ul').hide();
       $('#headerArea').animate({height:180},'fast').clearQueue();
   });
});


/* 상단이동*/
$(document).ready(function () {
            
   $('.topMove').hide(); 

  $(window).on('scroll',function(){  
       var scroll = $(window).scrollTop();
       $('.text').text(scroll); 
       if(scroll>900){   
           $('.topMove').fadeIn('slow');
       }else{
           $('.topMove').fadeOut('fast');
       }
  });
   $('.topMove').click(function(e){
    e.preventDefault();
      $("html,body").stop().animate({"scrollTop":0},1000); //바디0의 위치로 이동
   });

});

//foot family

$(document).ready(function() {
	
	$('.select .arrow').toggle(function(){
		$('.select .aList').fadeIn('slow');		
	},function(){
		$('.select .aList').fadeOut('slow');
	});


	//tab키 처리
	  $('.select .arrow').on('focus', function () {        
              $('.select .aList').show();	
       });
       $('.select .aList li:last').find('a').on('blur', function () {        
              $('.select .aList').hide();
       });  
});



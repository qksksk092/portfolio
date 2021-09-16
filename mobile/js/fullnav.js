/*네비*/ 
$(document).ready(function() {
   
 	
    $(".btn").click(function() { //메뉴버튼 클릭시
        
        var documentHeight =  $(document).height();
        //실제 페이지의 높이 = $(document).height();
       $(".box").css('height',documentHeight);
       $("#gnb").css('height',documentHeight);
        //반투명박스와 네비의 높이를 실제 페이지의 높이로 바꾸어라   
 
        $("#gnb").animate({right:0,opacity:1}, 'slow');
        $(".box").show();
    });
    
    $(".box,.mclose").click(function() { //닫기버튼 클릭시
      $("#gnb").animate({right:'-100%',opacity:0}, 'fast');
      $(".box").hide();
    });
      
     //2depth 메뉴 교대로 열기 처리 
     var onoff=[false,false,false,false,false,false];  // 각 1depth 메뉴의 서브메뉴가 열린상태(true), 닫힌상태(false)
     var arrcount=onoff.length; // 6개
     
     //console.log(arrcount);
     
     $('#gnb .depth1 h3 a').click(function(){  //각각의 1depth 메뉴를 클릭하면
         var ind=$(this).parents('.depth1').index(); // 0 1 2 3 4 5
         
         //console.log(ind);
         //첫번째가 클릭 되었다 ...  onoff[0]=false, ind=0
 
        if(onoff[ind]==false){  //클릭한 메뉴의 서브메뉴가 닫혀있냐??(false)
         //$('#gnb .depth1 ul').hide();
         $(this).parents('.depth1').find('ul').slideDown('slow'); //클릭한 메뉴의 서브를 열어라
         $(this).parents('.depth1').siblings('li').find('ul').slideUp('fast'); //열러있는 나머지 서브메뉴를 모두 닫아라
 
          for(var i=0; i<arrcount; i++){ onoff[i]=false;} //모든 메뉴 상태를 false로...
          onoff[ind]=true; //자신의 상태만 true
            
          $('.depth1 span').text('+'); //모든 메뉴의 텍스트를 +로 바꿔  
          $(this).find('span').text('-');   // 자신의 메뉴의 텍스트를 -로 바꿔  
             
        }else{   //클릭한 메뉴의 서브메뉴가 열려있냐??(true)
          $(this).parents('.depth1').find('ul').slideUp('fast'); //클릭한 자신의 서브메뉴만 닫아라
          onoff[ind]=false; //자신의 상태를 false  
            
          $(this).find('span').text('+');  //자신의 메뉴의 텍스트를 +로 바꿔     
        }
     });    
    
   });
 
 
 /*상단이동 */
 $(document).ready(function () {
            
  $('.topMove').hide(); 

 $(window).on('scroll',function(){  
      var scroll = $(window).scrollTop();
      $('.text').text(scroll); 
      if(scroll>200){   
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

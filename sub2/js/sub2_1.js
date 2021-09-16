$(document).ready(function () {
        
   
     //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
        console.log(scroll);
        //스크롤 좌표의 값을 찍는다.
       
        //sticky menu 처리
        if(scroll>530){ 
            $('.content_area .left').addClass('sticky');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
        }else{
            $('.content_area .left').removeClass('sticky');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
        }
        
       
        
        $('.sticky li').find('a').removeClass('spy');
        //모든 서브메뉴 비활성화~ 불꺼!!!
        
        
         //스크롤의 거리의 범위를 처리(스크롤스파이)
        if(scroll>=1465 && scroll<2810){
            $('.sticky li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
        }else if(scroll>=2810 && scroll<3476){
            $('.sticky li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
        }else if(scroll>=3476){
            $('.sticky li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
        }
        
    });

    //각각의 메뉴 클릭시 해당 콘텐츠 이동
    $('.left .slideMenu a').click(function(e){
        e.preventDefault();

        var value=0;

        if($(this).hasClass('link1')){  //첫번째 메뉴 버튼을 클릭하면
           value= 1465;  // 해당 요소의 상단(top)까지의 거리 
        }else if($(this).hasClass('link2')){  //두번째 메뉴 버튼을 클릭하면
           value= 2810; 
        }else if($(this).hasClass('link3')){
           value= 3476; 
        }
        
        $("html,body").stop().animate({"scrollTop":value},1000);
    });


});
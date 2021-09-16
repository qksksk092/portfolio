/* visual */
$(document).ready(function () {
   var timeonoff;
   var imageCount = 3;
   var cnt = 1;
   var direct = 1;
   var position = 0;
   var onoff = true;

   $('.btn1').css('background', '#056bb8');
   $('.btn1').css('width', '30');

   $('.gallery_text li:eq(0)').fadeIn('slow');

   function moveg() {
      cnt += direct;

      if (cnt == 1) {
         position = 0;
      } else if (cnt == 2) {
         position = -2000;
      } else if (cnt == 3) {
         position = -4000;

      }

      $('.gallery_text li').hide(); //모든 텍스트를 안보이게...
      $('.gallery_text li:eq(' + (cnt - 1) + ')').fadeIn('slow'); //해당 텍스트만 보여라

      for (var i = 1; i <= imageCount; i++) {
         $('.btn' + i).css('background', '#fff'); //버튼불다꺼!!
         $('.btn' + i).css('width', '16');
      }
      $('.btn' + cnt).css('background', '#056bb8'); //자신만 불켜
      $('.btn' + cnt).css('width', '30');

      $('.gallery').animate({
         left: position
      }, 'slow'); //겔러리 무비의 left값을 움직여라~
      if (cnt == imageCount) direct = -1;
      if (cnt == 1) direct = 1;
   }

//4초마다 자동기능 
   timeonoff = setInterval(moveg, 4000); 
   $('.mbutton').click(function (event) { //각각의 버튼을 클릭한다면...

      var $target = $(event.target); //$target == this =>실제 클릭한 버튼
      clearInterval(timeonoff); //타이머를 중지!!

      for (var i = 1; i <= imageCount; i++) {
         $('.btn' + i).css('background', '#fff'); //버튼 모두불꺼
         $('.btn' + i).css('width', '16');
      }

      if ($target.is('.btn1')) { //첫번째 버튼을 클릭했다면...
         $('.gallery').animate({
            left: 0
         }, 'slow');
         cnt = 1;
         direct = 1;
      } else if ($target.is('.btn2')) { //두번째 버튼을 클릭했다면...
         $('.gallery').animate({
            left: -2000
         }, 'slow');
         cnt = 2;
      } else if ($target.is('.btn3')) { //세번째 버튼을 클릭했다면...
         $('.gallery').animate({
            left: -4000
         }, 'slow');
         cnt = 3;

         direct = -1;
      }

      $('.gallery_text li').hide();
      $('.gallery_text li:eq(' + (cnt - 1) + ')').fadeIn('slow');


      $('.btn' + cnt).css('background', '#056bb8'); //자신 버튼만 불켜 
      $('.btn' + cnt).css('width', '30');

      timeonoff = setInterval(moveg, 4000); //타이머의 재 동작

      if (onoff == false) {
         onoff = true;
         $('.ps').css('background', 'url(images/stop.png)');
      }
   });

   //stop/play 버튼 클릭시 타이머 동작/중지
   $('.ps').click(function () {
      if (onoff == true) {
         clearInterval(timeonoff); // stop버튼 클릭시
         $(this).css('background', 'url(images/play.png)');
         onoff = false;
      } else {
         timeonoff = setInterval(moveg, 4000); //play버튼 클릭시
         $(this).css('background', 'url(images/stop.png)');
         onoff = true;
      }
   });

});


/* sustainable */
$(document).ready(function () {
   var position = 0; //최초위치(목적지. left)
   var movesize = $('.sustainable_slide_gallery li').width(); //리스트 하나의 너비
   var timeonoff;

   $('.sustainable_slide_gallery ul').after($('.sustainable_slide_gallery ul').clone());
   //슬라이드 갤러리를 한번 복제

   $('.sustainable_btn').click(function (event) {
      var $target = $(event.target); //클릭한 해당 버튼
      //	clearInterval(timeonoff);

      if ($target.is('.pb2')) { //오른쪽버튼 클릭?
         if (position == -3600) {
            $('.sustainable_slide_gallery').css('left', 0);
            position = 0;
         }

         position -= movesize; // 감소
         $('.sustainable_slide_gallery').stop().animate({
               left: position
            }, 'fast',
            function () {
               if (position == -3600) {
                  $('.sustainable_slide_gallery').css('left', 0);
                  position = 0;
               }
            });
      } else if ($target.is('.pb1')) { //왼쪽 버튼 클릭?
         if (position == 0) {
            $('.sustainable_slide_gallery').css('left', -3600);
            position = -3600;
         }

         position += movesize; // 증가
         $('.sustainable_slide_gallery').stop().animate({
               left: position
            }, 'fast',
            function () {
               if (position == 0) {
                  $('.sustainable_slide_gallery').css('left', -3600);
                  position = -3600;
               }
            });
      }

      //페이지 번호 바꾸기
      if (position == 0 || position == -3600 || position == 3600) {
         $('#sustainable_slide strong').text('1');
      } else if (position == 1200 || position == -1200) {
         $('#sustainable_slide strong').text('2');
      } else if (position == 2400 || position == -2400) {
         $('#sustainable_slide strong').text('3');
      }

   });


});

/* product tap */
$(document).ready(function () {
   $('.product_tap_gallery li:first').fadeIn('fast');
   $('.product_tap .move_box li:eq(0)').find('a').css('color', '#056bb8');

   $('.product_tap .move_box a').click(function (e) {
      e.preventDefault();
      var ind = $(this).index('.product_tap .move_box a'); // 0 1 2 3

      $('.product_tap_gallery li').hide();
      $('.product_tap_gallery li:eq(' + ind + ')').fadeIn('fast');

      $('.product_tap .move_box a').css('color', '#999');
      $(this).css('color', '#056bb8');
   });
});

/* 스크롤 스파이 */

$(document).ready(function () {

   //$('#content section:eq(0)').addClass('boxMove');
   //첫번째 내용글 애니메이션 처리  
   var h1 = $('#content section:eq(0)').offset().top - 500;        
   var h2 = $('#content section:eq(1)').offset().top - 500;         
   var h3 = $('#content section:eq(2)').offset().top - 500;
   var h4 = $('#content section:eq(3)').offset().top - 500;
   var h5 = $('#content .report').offset().top - 500;

  
   //스크롤의 좌표가 변하면 스크롤 이벤트
   $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
     
      //스크롤의 거리의 범위를 처리(스크롤스파이)
      if (scroll >= h1 && scroll < h2) {
         $('#content section:eq(0)').addClass('boxMove');

      } else if (scroll >= h2 && scroll < h3) {
         $('#content section:eq(1)').addClass('boxMove');

      } else if (scroll >= h3 && scroll < h4) {
         $('#content section:eq(2)').addClass('boxMove');

      } else if (scroll >= h4 && scroll < h5) {
         $('#content section:eq(3)').addClass('boxMove');

      } else if (scroll >= h5) {
         $('#content .report').addClass('boxMove');

      }

   });
});
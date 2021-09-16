//1-2 
$(document).ready(function () {
   $('.plus_menu a').each(function (index) { // index=> 0 1 2
      $(this).addClass('open');
      $('.modal_con a').addClass('close');
      $('.open, .close').click(function (e) {
         e.preventDefault()
      }); //링크로 강제이동 차단

      $(this).click(function () { //각각의 a를 클릭하면 

         $('#box').show(); //백그라운드 깔아주는거
         $('.modal_con div:eq(' + index + ')').fadeIn('fast');
      });
      $('#content #box, .close').click(function () { // 상세창 바깥영역을 클릭하면 
         $('#box').hide(); // 바깥영역 안보이게
         $('.modal_con div:eq(' + index + ')').hide(); // 상세창 안보이게
      });
   });


});
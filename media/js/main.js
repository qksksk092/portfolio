$(document).ready(function () {

    //스크롤 이벤트
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();

        if (scroll > 150) {
            $('.Story_text').css('left', 0);
        } else {
            $('.Story_text').css('left', -600);
        }  if (scroll > 740) {
            $('.Story_left a').css('left', 0);
        } else {
            $('.Story_left a').css('left', -480);
        }
        if (scroll > 3600) {
            $('.m_scroll').css('right', 60);
        } else {
            $('.m_scroll').css('right', 700);
        }
    
    });
  
});
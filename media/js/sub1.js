//product
$(document).ready(function () {
    $('.original_tap_gallery li').hide();
    $('.original_tap_gallery li:first').fadeIn('fast');
    $('.tap1').css('color','#c9a94b');
 
    $('.original_tap .move_box a').click(function (e) {
       e.preventDefault();
       var ind = $(this).index('.original_tap .move_box a'); // 0 1 2 3
 
       $('.original_tap_gallery li').hide();
       $('.original_tap_gallery li:eq(' + ind + ')').fadeIn('fast');
 
       $('.original_tap .move_box a').css('color', '#333');
       $(this).css('color', '#c9a94b');
       
    });
 });
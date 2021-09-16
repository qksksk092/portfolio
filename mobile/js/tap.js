//product
$(document).ready(function () {
    $('.product_tap_gallery li').hide();
    $('.product_tap_gallery li:first').fadeIn('fast');
    $('.tap1').css('background','#a5c6df').css('color','#fff');
 
    $('.product_tap .move_box a').click(function (e) {
       e.preventDefault();
       var ind = $(this).index('.product_tap .move_box a'); // 0 1 2 3
 
       $('.product_tap .product_tap_gallery li').hide();
       $('.product_tap .product_tap_gallery li:eq(' + ind + ')').fadeIn('fast');
 
       $('.product_tap .move_box a').css('background', 'rgb(230, 228, 228)').css('color', '#333');
       $(this).css('background', '#a5c6df').css('color', '#fff');
       
    });
 });
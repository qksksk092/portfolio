$(document).ready(function(){
   $('.gallery #text_ul li:first').fadeIn('fast');
   $('.gallery .img_ul li:eq(0)').find('img').css('border','2px solid rgb(0,107,183)');

   $('.gallery .img_ul a').click(function(e){
       e.preventDefault();
       var ind = $(this).index('.gallery .img_ul a'); // 0 1 2 3
   
       $('.gallery #text_ul li').hide();
       $('.gallery #text_ul li:eq('+ind+')').fadeIn('fast');

       $('.gallery .img_ul img').css('border','2px solid #fff');
       $(this).find('img').css('border','2px solid rgb(0,107,183)');
   });
});
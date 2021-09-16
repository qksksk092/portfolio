$(document).ready(function(){
    $('.big').css('background','url(./images/big1.jpg)'); 
    $('.big').css('background-size','300px 200px ');
    $('.big').hide().fadeIn('fast');

    $('.gallery li a').click(function(e){
        e.preventDefault();
        var ind = $(this).index('.gallery li a');
        //console.log(ind);

        $('.big').css('background','url(./images/big'+(ind+1)+'.jpg)'); 
        $('.big').css('background-size','300px 200px');
        $('.big').hide().fadeIn('fast');
    });
});
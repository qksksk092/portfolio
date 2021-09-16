/*3-2*/

$(document).ready(function () { 
    $('.slideMenu a').click(function(e){
       e.preventDefault();
       var value=0;
       if($(this).hasClass('link1')){  
          value= $('.contlist:eq(0)').offset().top-20
       }else if($(this).hasClass('link2')){  
          value= $('.contlist:eq(1)').offset().top-20;
       }else if($(this).hasClass('link3')){  
        value= $('.contlist:eq(2)').offset().top-20;
     }
       $("html,body").stop().animate({"scrollTop":value},1250);
   });

   
 });






$(document).ready(function () {
	var screenSize = $(window).width();
	var screenHeight = $(window).height();

	$("#content").css('margin-top', screenHeight);

	if (screenSize > 768) {
		$('.videoBox2 img').attr('src', 'images/sub2/sub2.jpg');
		$('.videoBox3 img').attr('src', 'images/sub3/sub3.png');
		$('.videoBox4 img').attr('src', 'images/sub4/movie_back.jpg');
	}
	if (screenSize <= 768) {
		$('.videoBox2 img').attr('src', 'images/sub2/movie_back2.jpg');
		$('.videoBox3 img').attr('src', 'images/sub3/movie_back2.jpg');
		$('.videoBox4 img').attr('src', 'images/sub4/movie_back2.png');
	}

	$(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
	  screenSize = $(window).width(); 
	  screenHeight = $(window).height();
		  
	  $("#content").css('margin-top',screenHeight);
		 
	  if (screenSize > 768) {
		$('.videoBox2 img').attr('src', 'images/sub2/sub2.jpg');
		$('.videoBox3 img').attr('src', 'images/sub3/sub3.png');
		$('.videoBox4 img').attr('src', 'images/sub4/movie_back.jpg');
	  }
	  if (screenSize <= 768) {
		$('.videoBox2 img').attr('src', 'images/sub2/movie_back2.jpg');
		$('.videoBox3 img').attr('src', 'images/sub3/movie_back2.jpg');
		$('.videoBox4 img').attr('src', 'images/sub4/movie_back2.png');
	  }
	}); 


	$('.down').click(function () {
		screenHeight = $(window).height();
		$('html,body').animate({
			'scrollTop': screenHeight
		}, 1000);
	});


});
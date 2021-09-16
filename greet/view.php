<? 
	session_start(); 

	@extract($_POST);
	@extract($_GET);
	@extract($_SESSION);
	/*
		$_SESSION['userid']
		$_SESSION['username']
		$_SESSION['usernick']
		$_SESSION['userlevel']

		$num=글번호  (주인공)
        $page=페이지번호
	*/

	include "../lib/dbconn.php";

	$sql = "select * from greet where num=$num";
	$result = mysql_query($sql, $connect);

    $row = mysql_fetch_array($result);       
      // 하나의 레코드 가져오기
	
	$item_num     = $row[num];
	$item_id      = $row[id];
	$item_name    = $row[name];
  	$item_nick    = $row[nick];
	$item_hit     = $row[hit];

    $item_date    = $row[regist_day];

	$item_subject = str_replace(" ", "&nbsp;", $row[subject]);

	$item_content = $row[content];
	$is_html      = $row[is_html];

	if ($is_html!="y")
	{
		$item_content = str_replace(" ", "&nbsp;", $item_content);
		$item_content = str_replace("\n", "<br>", $item_content);
	
    }	

	$new_hit = $item_hit + 1;

	$sql = "update greet set hit=$new_hit where num=$num";   // 글 조회수 증가시킴
	mysql_query($sql, $connect);
?>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>무림페이퍼:공지사항</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="common/css/sub4common.css">
    <link rel="stylesheet" href="css/view.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">
    <script src="../common/js/prefixfree.min.js"></script>
    <script>
        function check_input() // 덧글의 필수입력 처리
        {
            if (!document.ripple_form.ripple_content.value) {
                alert("내용을 입력하세요!");
                document.ripple_form.ripple_content.focus();
                return;
            }
            document.ripple_form.submit();
        }

        function del(href) {
            if (confirm("한번 삭제한 자료는 복구할 방법이 없습니다.\n\n정말 삭제하시겠습니까?")) {
                document.location.href = href;
            }
        }
    </script>

    <!--[if IE 9]>  
    <script src="http://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->

</head>

<body>

    <div class="wrap">
        <!--서브헤더영역-->
        <? include "../common/sub_head.html" ?>

        <div class="visual">
            <img src="common/images/visual.jpg" alt="">
        </div>
        <div class="sub_menu">            <div class="sub_title">

            <h3>공지사항</h3>
            <p>public relations center</p>            </div>

            <ul>
                <li><a href="../concert/list.php">무림뉴스</a></li>
                <li><a href="../sub4/sub4_2.html">일관화공장</a></li>
                <li><a href="../sub4/sub4_3.html">종이비행기대회</a></li>
                <li class="last current"><a href="./list.php">공지사항</a></li>

            </ul>
        </div>
        <article id="content">

            <div class="title_area">
                <div class="line_map">
                    HOME &gt; 홍보센터 &gt; <strong>공지사항</strong>
                </div>
                <h2>공지사항</h2>

            </div>

            <div class="content_area">

                <div id="view_title">
                    <div id="view_title1"><?= $item_subject ?></div>
                    <div id="view_title2">
                        <i class="fas fa-user"></i> <?= $item_nick ?>
                        <i class="far fa-eye"></i> 조회 : <?= $item_hit ?>
                        <i class="far fa-clock"></i> <?= $item_date ?>
                    </div>
                </div>

                <div id="view_content">
                    <?
	for ($i=0; $i<3; $i++)
	{
		if ($image_copied[$i])
		{
			$img_name = $image_copied[$i];
			$img_name = "./data/".$img_name;
			$img_width = $image_width[$i];
			
			echo "<img src='$img_name' width='$img_width'>"."<br><br>";
		}
	}
?>

                    <?= $item_content ?>

                </div>
                <div id="ripple">
                    <span>댓글</span>
<?
	    $sql = "select * from free_ripple where parent='$item_num'";
	    $ripple_result = mysql_query($sql);  //메인글의 덧글 검색  2개

		while ($row_ripple = mysql_fetch_array($ripple_result))
		{
			$ripple_num     = $row_ripple[num];
			$ripple_id      = $row_ripple[id];
			$ripple_nick    = $row_ripple[nick];
			$ripple_content = str_replace("\n", "<br>", $row_ripple[content]);
			$ripple_content = str_replace(" ", "&nbsp;", $ripple_content);
			$ripple_date    = $row_ripple[regist_day];
?>
			<div id="ripple_writer_title">
			<ul>
           
			<li id="writer_title1"><i class="far fa-user-circle"></i><?=$ripple_nick?></li>
            <li id="ripple_content"><?=$ripple_content?></li>
            <li id="writer_tit">
			    <span id="writer_title2"><?=$ripple_date?></span>
			    <span id="writer_title3"> 
		        <? 
					if($userid=="master" || $userid==$ripple_id)
			          echo "<a href='delete_ripple.php?table=$table&num=$item_num&ripple_num=$ripple_num'>[삭제]</a>"; 
			    ?>
			    </span>
            </li>
			</ul>
			</div>
			
			<div class="hor_line_ripple"></div>
<?
		}
?>			
			<form  name="ripple_form" method="post" action="insert_ripple.php?table=<?=$table?>&num=<?=$item_num?>">  
			<div id="ripple_box">
			   
				<div id="ripple_box2">
                    <textarea rows="5" cols="65" name="ripple_content"></textarea>
                </div>
                <div id="ripple_box3">   
                    <a href="#"onclick="check_input()">등록</a>
				</div>
				
			</div>
			</form>
		</div> <!-- end of ripple -->
                <div id="view_button">

                    <? 
	     if($userid==$item_id || $userlevel==1 || $userid=="master")
	{
?>
                    <a href="modify_form.php?num=<?=$num?>&page=<?=$page?>">수정</a>&nbsp;
                    <a href="javascript:del('delete.php?num=<?=$num?>')">삭제</a>&nbsp;
                    <?
	}
?>
                    <? 
	if($userid )
	{
?>
                    <a href="write_form.php">글쓰기</a>
                    <?
	}
?>
                </div>
                <div class="view_button2">
                    <a href="list.php?page=<?=$page?>">목록</a>&nbsp;
                </div>


            </div>

        </article>
    </div>





    <!--서브푸터영역-->
    <? include "../common/sub_foot.html" ?>

    <!--JQuery-->
    <script src="../common/js/jquery-1.12.4.min.js"></script>
    <script src="../common/js/jquery-migrate-1.4.1.min.js"></script>
    <script src="../common/js/fullnav.js"></script>
</body>

</html>
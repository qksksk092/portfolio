<meta charset="utf-8">
<?
   
   @extract($_POST);
   @extract($_GET);
   @extract($_SESSION);
    //$id='a';

    if(!$id) //입력하지않았을때 null
   {
      echo("아이디를 입력하세요."); //ajax에서 echo는 출력이아닌 data 매개변수에게 넘긴다
   }
   else  //입력했을때
   {
      include "../lib/dbconn.php";
 
      $sql = "select * from member where id='$id' ";

      $result = mysql_query($sql, $connect);
      $num_record = mysql_num_rows($result);


     
      if ($num_record)//아이디 중복이 있으면
      {
       
         echo "<span style='color:red'>다른 아이디를 사용하세요.</span>";
      }
      else//중복된 아이디없을면
      {
         echo "<span style='color:green'>사용가능한 아이디입니다.</span>";
      }
    
 
      mysql_close();
   }

?>


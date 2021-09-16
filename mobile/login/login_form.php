<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="../css/common.css">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">

    <script src="../js/prefixfree.min.js"></script>

</head>

<body>

    <article id="content">
        <h1 class="logo login_logo">
            <a href="../index.html">무림페이퍼</a>
        </h1>

        <form name="member_form" method="post" action="login.php">
            <div class="top">
                <div id="id_pw_input">
                    <table>
                        <caption class="hidden">회원가입</caption>
                        <tr>
                            <th class="hidden" scope="col">
                                <label for="id">아이디</label></th>
                            <td>
                                <input type="text" name="id" class="login_input" placeholder="아이디" required>
                                <div id="loadtext">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th class="hidden" scope="col"><label for="pass">비밀번호</label></th>
                            <td>
                                <input type="password" name="pass" class="login_input" placeholder="비밀번호" required>
                            </td>
                        </tr>
                    </table>
                </div>
                <div id="login_button">
                    <button type="submit">로그인</button>
                    <a type="submit" href="../index.html" onclick="join_cancel()">취소</a>

                </div>
            </div>


        </form>
    </article>
</body>

</html>
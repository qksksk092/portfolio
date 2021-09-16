<? session_start(); ?>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인</title>
    <link rel="stylesheet" href="../common/css/common.css">
    <link rel="stylesheet" href="css/login.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
        integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous">

    <script src="../common/js/prefixfree.min.js"></script>

</head>

<body>

    <article id="content">
        <h1 class="logo">
            <a href="../index.html">무림페이퍼</a>
        </h1>

        <form name="member_form" method="post" action="login.php">
            <div class="left">
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
                <div class="find">
                    <ul>
                        <li><i class="fas fa-lock"></i>보안접속</li>
                        <li>
                            <span><a href="id_find.php">아이디 찾기</a></span>
                            <span><a href="pw_find.php">비밀번호 찾기</a></span>
                        </li>
                    </ul>
                </div>
                <div id="login_button">
                    <button type="submit">로그인</button>
                    <a type="submit" href="../index.html" onclick="join_cancel()">취소</a>

                </div>
            </div>
            <div class="right">
                <div class="view">
                   <a href="../sub1/sub1_3.html"><i class="far fa-images"></i>무림갤러리 보러가기</a>
                   <a href="../sub2/sub2_1.html"><i class="fas fa-swatchbook"></i>제품정보 보러가기</a>
                </div>
                <div id="join_button">
                    <p>아직 회원이 아니신가요?</p>
                    <p>회원가입을 하시면 샘플 신청 및 무림 갤러리 이용이 가능합니다.</p>
                    <a href="../member/member_check.html"><i class="far fa-user-circle"></i> 회원가입</a>

                </div>
            </div>

            
        </form>
    </article>
</body>

</html>
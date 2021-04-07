# Personal-project-HTMl
## 개인 프로젝트

+ 고등학생의 안드로이드 독학 노트

**하스스톤 카드 설명 페이지 따라만들기**
***
*2021_04_07*
# 1일차

최상단 메뉴바를 만들었습니다.

주요코드

```Html
  <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>영웅 - 안정이 필요해</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="divHeader">
            <img class="logo" src="C:\Users\User\Desktop\html\제복 2.png" style="height: 40px; width: 100px;">
            <nav>
                <ul class="topmenu">
                    <li><a href="#">게임</a></li>
                    <li><a href="">샵</a></li>
                    <li><a href="">새소식</a></li>
                    <li><a href="">E스포츠</a></li>
                    <li><a href="">이벤트</a></li>
            </nav>
        </div>
    </header> 
</body>
</html>
```
**CSS**
```CSS
header{height: 40px; background-color: black; border: 1px solid black;
    position: fixed;width: 100%; z-index: 9999; top: 0; left: 0;}
    *{margin: 0; padding: 0;}
    body{
        background-color: #721A19;
    }.logo{
        line-height: 75px; 
        float: left;
        margin-top: 3px;
    }
    .topmenu{
        float: left;
    }
    .topmenu li{
        font-size: 15px;
        font-weight: lighter;
        float: left;
        border-bottom: none; 
        list-style: none;
    }
    .topmenu a{
        line-height: 14px;
        color: white;
        padding: 15px 16px;
        display: block; 
        text-decoration: none;}
    
    .divHeader{
        width: 1170px; 
        margin: 0 30px;
    }
```
## 다음목표

1.최상단 메뉴 드롭다운 메뉴로 만들기

2.아래 본문 메뉴 구성하기

3.먼 미래 이야기

## 목표 사이트

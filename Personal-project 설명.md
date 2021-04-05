# Personal-project-HTMl
## 개인 프로젝트

+ 고등학생의 안드로이드 독학 노트

**학교 자율동아리활동에서 쓰인 코드입니다.**
***
*2021_04_05*

## 자율동아리때 썻던 메인 페이지 설계 코드 중 상단메뉴바 코드 해석 ##

상단 바를 만든  설명하겠습니다.

**중요)단순 구성을 보기위해 만든 거라 코드정리가 안되어있거나 많이 빈약 할 수 있습니다.**

주요 코드

+ **HTMl 코드**
```html
<header>
        <div class="divHeader">
            <img class="logo" src="C:\Users\User\Desktop\html\DONGMIN\로고테스트 33.png"style width="120px" height="75px" >
            <nav>
                <ul class="topmenu">
                    <li><a href="#">HOME</a></li>
                    <li><a href="">개발자 소개</a></li>
                    <li><a href="">문의창</a></li>
                    <li><a href="">게임 소개&카드 설명</a></li>
                    <li><a href="">게임 가이드</a></li>
            </nav>
        </div>
    </header>  
```
위 코드는 상단 바를 만들기 위한 html 코드입니다. 홈페이지 상단에 들어갈 것이기 때문에 header 태그로 감싸주었고,

div 태그로 상단바 자리를 잡아주었습니다.

그 후 상단바에 들어갈 로고와 상단바에서 필요한 메뉴들을 리스트로 묶어 써주었습니다.

**nav 태그는 단순히 메뉴라는 것을 알려주기 위해 쓴것이기 때문에 생략가능**

**상단바에 들어갈 로고가 nav 태그 밖에 있는 이유는 CSS 코드 해석에서 설명합니다.**

```CSS
header{height: 75px; background-color: black; border: 1px solid black;
position: fixed;width: 100%; z-index: 9999; top: 0; left: 0;}
*{margin: 0; padding: 0;}
body{
    background-color: darkcyan;
}

.logo{
    line-height: 38px; 
    float: left;
}
.topmenu{
    float: left;
}
.topmenu li{
    float: left;
    border-bottom: none; 
    list-style: none;
}
.topmenu a{
    line-height: 39px;
    color: white;
    padding: 15px 16px;
    display: block; 
    text-decoration: none;}

.divHeader{
    width: 1170px; 
    margin: 0 auto
}
```
이제 html에서 요소를 넣었으면 CSS에서 디자인과 배치를 해주어야겠죠?

**맨위 header태그 디자인은 상단메뉴바의 색상과 크기를 정하는 것이기 떄문에**

**알아두면 다른 상단바를 만들때도 참고 할 수 있습니다.**

그 아래부터는 리스트와 로고의 크기와 위치를 잡아주는 코드인데 

이 부분에서 로고와 리스트가 같이 움직이면 안되기 떄문에 

위 Html 코드에서 nav와 il태그 밖에 따로 로고를 넣어준 것입니다.

----
**그래서 완성된 모습은 이렇습니다**







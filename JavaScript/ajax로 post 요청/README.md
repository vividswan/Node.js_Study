# ajax로 Post 요청하기

ajax를 이용해서 서버에 Post 요청을 해보자.<br>

<!--more-->

## 로그인 페이지

```html
<div class="container">

<form>
  <div class="form-group">
    <label for="username">UserName:</label>
    <input type="text" class="form-control" placeholder="Enter UserName" id="username">
  </div>
  <div class="form-group">
    <label for="password">Password:</label>
    <input type="password" class="form-control" placeholder="Enter password" id="password">
  </div>
   <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" placeholder="Enter email" id="email">
  </div>
</form>
  <button id="btn-save" class="btn btn-primary">회원가입</button>

</div>
```

위와 같이 사용자 이름, 비밀번호, 이메일 주소를 전달하는 회원가입 페이지의 container가 있다고 하자.<br>
원래는 `method="post"` 방식으로 서버에게 포스트 요청하지만, 여기선 ajax를 활용해서 요청해보자.<br>
컨테이너 하단에 `<script src="js 주소"></script>`를 만들어주고 js 파일을 만든다.<br>

## js 파일

```javascript
let index = {
  init: function () {
    $("#btn-save").on("click", () => {
      this.save();
    });
  },
  save: function () {
    let data = {
      username: $("#username").val(),
      password: $("#password").val(),
      email: $("#email").val(),
    };

    $.ajax({
      type: "POST",
      url: "/blog/api/user",
      data: JSON.stringify(data), 
      contentType: "application/json; charset=utf-8",
    }).done(function (response) {
      alert('회원가입이 완료되었습니다.');
      location.href="/blog";
    }).fail(function (error) {
      alert(JSON.stringify(error));
    });
  },
};

index.init();
```

하나씩 알아보자.<br>

## javascript 소스

> let index = ...

js 파일 간의 객체 이름의 중복을 피하기 위해 보통 이렇게 객체를 선언하고 `index.init();`의 방식으로 시작한다.<br>


>  $("#btn-save").on("click", () => {
>     this.save();
>   });

arrow function을 써서 this를 바인딩 했다. 여기서의 this는 index이다.<br>
function()을 사용해서 save를 호출하고 싶다면, index 아래에 _this를 선언해서 사용할 수도 있다.<br>
> $.ajax({ ...

ajax를 호출하는 부분이다. 기본적으로 비동기 호출이다.<br>

>     type: "POST",
>     url: "/blog/api/user",
>     data: JSON.stringify(data),

요청 타입은 `POST`, 요청을 하는 url, http body에 보낼 데이터를 입력했다.<br>

> contentType: "application/json; charset=utf-8",

body 데이터가 어떤 MIMETYPE 인지 선언한다.<br>

> location.href="/blog";

회원가입이 완료되면 서버가 데이터를 처리하고, 클라이언트 입장에선 새로운 화면이 나와야 하므로 `location.href`를 이용한다.<br>
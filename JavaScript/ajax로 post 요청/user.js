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
$('.form').submit(e => {
  e.preventDefault();

  const form = $(e.currentTarget);
  const name = form.find("[name='name']");
  const phone = form.find("[name='phone']");
  const comment = form.find("[name='comment']");
  const to = form.find("[name='to']");
  const modal = $("#modal");
  const content = modal.find(".modal__text");
  const errors = form.find(".error");

  [name, phone, comment, to].forEach((field) => {
    field.removeClass("error");
    if (field.val().trim() == "") {
      field.addClass("error");
    }
  });

  modal.removeClass("error-modal");

  if (errors.length == 0) {
    $.ajax({
      url: "https://webdev-api.loftschool.com/sendmail",
      method: "post",
      data: {
        name: name.val(),
        phone: phone.val(),
        comment: comment.val(),
        to: to.val()
      },
      success: data => {
        content.text(data.message);
        Fancybox.show([{
          src: "#modal",
          type: "inline",
        }]);
      },
      error: data => {
        const message = data.responseJSON.message;
        content.text(message);
        modal.addClass("error-modal");
        Fancybox.show([{
          src: "#modal",
          type: "inline",
        }]);
      },
    });
  }
});

$(".modal__button-js").click(e => {
  e.preventDefault();

  Fancybox.close();
});
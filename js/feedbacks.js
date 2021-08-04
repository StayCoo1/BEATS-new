const findBlockByAlias = (alias) => {
  return $(".feedbacks__review").filter((ndx, item) => {
    return $(item).attr("data-linked-with") == alias;
  });
};

$(".feedbacks__avatars-link").click(e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-open");
  const itemToShow = findBlockByAlias(target);
  const curItem = $this.closest(".feedbacks__avatars-item");

  itemToShow.addClass("feedbacks__review_active").siblings().removeClass("feedbacks__review_active");
  curItem.addClass("feedbacks__avatars-item_active").siblings().removeClass("feedbacks__avatars-item_active");
});
const openItem = item => {
  const container = item.closest(".team__item");
  const contentBlock = container.find(".team__content");
  const textBlock = contentBlock.find(".team__content-wrap");
  const reqHeight = textBlock.height();

  container.addClass("team__content-open");
  contentBlock.height(reqHeight);
}

const closeEveryItem = container => {
  const items = container.find(".team__content");
  const itemContainer = container.find(".team__item");

  items.height(0);
  itemContainer.removeClass("team__content-open");
}

$('.team__name').click(e => {
  const $this = $(e.currentTarget);
  const container = $this.closest(".team__list")
  const containerMobile = $this.closest(".team__list-mobile")
  const elemContainer = $this.closest(".team__item");

  if (elemContainer.hasClass("team__content-open")) {
    closeEveryItem(container);
    closeEveryItem(containerMobile);
  } else {
    closeEveryItem(container);
    closeEveryItem(containerMobile);
    openItem($this);
  }
});

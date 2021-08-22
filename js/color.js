const measureWidth = (item) => {
  let reqItemWidth = 0;

  const screenWidth = $(window).width();
  const container = item.closest(".color-menu");
  const titlesBlocks = container.find(".color-menu__title");
  const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

  const textContainer = item.find(".color-menu__container");
  const paddingLeft = parseInt(textContainer.css("padding-left"));
  const paddingRight = parseInt(textContainer.css("padding-right"));

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    reqItemWidth = screenWidth - titlesWidth;
  } else {
    reqItemWidth = 524;
  }

  return {
    container: reqItemWidth,
    textContainer: reqItemWidth - paddingLeft - paddingRight
  }
};

const closeEveryItemContainer = (container) => {
  const items = container.find(".color-menu__item");
  const content = container.find(".color-menu__content");

  items.removeClass("color-menu__item_active");
  content.width(0);
};

const openItems = (item) => {
  const hiddenContent = item.find(".color-menu__content");
  const reqWidth = measureWidth(item);
  const textBlock = item.find(".color-menu__container");

  item.addClass("color-menu__item_active");
  hiddenContent.width(reqWidth.container);
  textBlock.width(reqWidth.textContainer);
};

$(".color-menu__title").on("click", e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const item = $this.closest(".color-menu__item");
  const itemOpened = item.hasClass("color-menu__item_active");
  const container = $this.closest(".color-menu");

  if (itemOpened) {
    closeEveryItemContainer(container);
  } else {
    closeEveryItemContainer(container);
    openItems(item);
  }
});
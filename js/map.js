let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [55.751582, 37.603500],
    zoom: 14,
    controls: []
  });

  const coords = [
    [55.742959, 37.580437],
    [55.757969, 37.582624],
    [55.749907, 37.603595],
    [55.757125, 37.617527]
  ];

  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: "../sections/map/content/marker.svg",
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);

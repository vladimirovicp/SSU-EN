initMap();

async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
    ymaps3;

  // Иницилиазируем карту
  const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.getElementById('map'),

    // Передаём параметры инициализации карты
    {
      // mode: 'raster',
      location: {
        // Координаты центра карты
        center: [46.010245, 51.538828],

        // Уровень масштабирования
        zoom: 13,
      },
    }
  );

  // const placemark = new yamps3.Placemark([46.010245, 51.538828]);

  // const markerElement = document.createElement('div');
  // markerElement.className = 'marker-class';
  // markerElement.innerText = "I'm marker!";

  const marker = new YMapMarker(
    {
      // source: 'markerSource',
      coordinates: [46.010245, 51.538828],
      draggable: true,
      mapFollowsOnDrag: true,
    }
    // markerElement
  );

  // // Добавляем слой для отображения схематической карты
  // map.addChild(new YMapDefaultSchemeLayer());

  // // Добавьте слой для маркеров
  // map.addChild(new YMapDefaultFeaturesLayer());

  map.addChild(marker);
  // map.geoObjects.add(placemark);
}

// import ymaps3 from 'https://api-maps.yandex.ru/v3/?apikey=6aba9faf-ee85-4e45-8a16-e95800518649&lang=ru_RU';

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
      location: {
        // Координаты центра карты
        center: [46.010245, 51.538828],

        // Уровень масштабирования
        zoom: 13,
      },
    }
  );

  // Добавьте слой с дорогами и зданиями
  map.addChild(new YMapDefaultSchemeLayer());

  // Добавьте слой для маркеров
  map.addChild(new YMapDefaultFeaturesLayer());

  const markerElement = document.createElement('div');
  markerElement.className = 'page-main__map-marker';

  const marker = new YMapMarker(
    {
      coordinates: [46.010245, 51.538828],
    },
    markerElement
  );

  // Добавьте маркер на карту
  map.addChild(marker);
}

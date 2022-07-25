const container = document.getElementById('map');
const options = {
    center: new kakao.maps.LatLng(37.498379, 127.034522),
    level: 3
};

const map = new kakao.maps.Map(container, options);

const markerPosition = new kakao.maps.LatLng(37.498379, 127.034522);

let marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);

let iwContent = '<div class="symbol-modal">서울특별시 강남구 역삼동 테헤란로 20길 20, 3층</div>';
let iwPosition = new kakao.maps.LatLng(37.498379, 127.034522);

let infowindow = new kakao.maps.InfoWindow({
    position: iwPosition,
    content: iwContent
});

infowindow.open(map, marker);
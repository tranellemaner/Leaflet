let mymap = L.map('mapid').setView([27.960, -82.913], 6.00);
L.tileLayer('https://api.mapbox.com/styles/v1/tranellemaner/cjp4xkjud0jhg2smprdbfd19t/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHJhbmVsbGVtYW5lciIsImEiOiJjanAwaHF1MjcwaXhzM3FvOWg0MXNzeGY2In0._EysINbVuCOu8s3xHUtdpA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 5
}).addTo(mymap);


for ( let i = 0; i < places.length; i++ ) {
 L.marker( [ places[i].latitude, places[i].longtiude ] )
 .bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' +
     places[i].descrip + '</p>')
 .addTo(mymap);
}

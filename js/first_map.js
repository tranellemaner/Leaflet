let mymap = L.map('mapid').setView([41.583,-71.329], 9);
L.tileLayer('https://api.mapbox.com/styles/v1/tranellemaner/cjp0i0kop09p52rr11bacawmo/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHJhbmVsbGVtYW5lciIsImEiOiJjanAwaHF1MjcwaXhzM3FvOWg0MXNzeGY2In0._EysINbVuCOu8s3xHUtdpA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 10
}).addTo(mymap);
var bigtop = L.marker([41.8188, -71.4470]).addTo(mymap);
var americana = L.marker([41.823887,-71.435975]).addTo(mymap);
var bargain = L.marker([42.0072,-71.5129]).addTo(mymap);
var bald = L.marker([41.7076,-71.4901]).addTo(mymap);
var city = L.marker([41.9122,-71.3970]).addTo(mymap);

bigtop.bindPopup("<b>Big Top flea market</b><br>Usually open on weekends from 9:00 a.m. to 5:00 p.m. Admission is free on Saturdays and 50 cents on Sundays</br>");
americana.bindPopup("<b>Americana Expo Center</b> <br> The flea market and thrift consignment store is usually open on weekends from 9:00 a.m. to 5:00 p.m </br>")
bald.bindPopup("<b>Bald Hill Flea Market</b><br> This flea market also doubles as a discount store and is usually open Fridays from 12 p.m. to 8:00 p.m. and weekends from 8:00 a.m. to 5:00 p.m.</br>");
city.bindPopup("<b>Bargain City</b><br> Recognized as Rhode Island’s number 1 flea market and auction center. It is usually open from 9:00 a.m. to 5:00 p.m. on weekends.</br>").openPopup();
bargain.bindPopup("<b>Bargain Fare</b><br>Since 2001 it has been an integral part of the community, providing necessary products and services at lowered costs</br>s");

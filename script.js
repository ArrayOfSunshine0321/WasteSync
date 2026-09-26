// 1. Initialize the map
var map = L.map('map').setView([18.9220, 72.8347], 12);

// 2. Add map tiles
L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Contributors'
}).addTo(map);

// 3. Add bin location markers
var marker1 = L.marker([19.0623, 72.8997]).addTo(map);
marker1.bindPopup("<b>Recycle Bin:</b> Chembur (Railway Station)");

var marker2 = L.marker([19.2131, 72.8389]).addTo(map);
marker2.bindPopup("<b>Recycle Bin:</b> Mahavir Nagar Junction");

var marker3 = L.marker([18.9192, 72.8315]).addTo(map);
marker3.bindPopup("<b>Recycle Bin:</b> Strand Cinema Junction");

var marker4 = L.marker([18.9248, 72.8322]).addTo(map);
marker4.bindPopup("<b>Recycle Bin:</b> Regal Circle Point");

var marker5 = L.marker([18.9518, 72.8185]).addTo(map);
marker5.bindPopup("<b>Recycle Bin:</b> Charni road West gate");

var marker6 = L.marker([19.0028, 72.8181]).addTo(map);
marker6.bindPopup("<b>Recycle Bin:</b> Worli Naka Dump Yard");

var marker7 = L.marker([19.0600, 72.8339]).addTo(map);
marker7.bindPopup("<b>Recycle Bin:</b> Linking Road Collection Depot");

var marker8 = L.marker([18.9950, 72.8242]).addTo(map);
marker8.bindPopup("<b>Recycle Bin:</b> Phoenix Mall Service Gate");

var marker9 = L.marker([19.0645, 72.8291]).addTo(map);
marker9.bindPopup("<b>Recycle Bin:</b> Waterfield Road Corner");

var marker10 = L.marker([19.1075, 72.8263]).addTo(map);
marker10.bindPopup("<b>Recycle Bin:</b> Juhu Scheme Circle");

var marker11 = L.marker([19.0492, 72.9189]).addTo(map);
marker11.bindPopup("<b>Recycle Bin:</b> Govandi East (Deonar Area)");

setTimeout(function() {
    map.invalidateSize();
}, 200);
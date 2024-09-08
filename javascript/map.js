 // Initialize the map
 var map = L.map('map').setView([57.001830591026476, 10.100293585830373], 13);

 // Set up the OpenStreetMap layer
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);

 // Add a marker to the map
 L.marker([57.001830591026476, 10.100293585830373]).addTo(map)
     .bindPopup('ShowMeStuff Art Gallery Location')
     .openPopup();

     
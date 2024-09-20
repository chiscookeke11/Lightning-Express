
     function showFriendLocation() {
      const friendLocationInput = document.getElementById("friend-location");
      const friendLocation = friendLocationInput.value.trim();

      
      const friendsLocations = {
        87421963: { name: "87421963", latitude: 35.7647, longitude: 140.3864 },
        59382714: { name: "5938714", latitude: 36.1776, longitude: 133.3297 },
        16340892: { name: "16340892", latitude: 36.7400, longitude: 139.4936 },
        "4453277CF": { name: "4453277CF", latitude: 36.7400, longitude: 139.4936 },
        "JP317632JP": { name: "JP317632JP", latitude: 35.7647, longitude: 140.3864  },
           "RK428974CF": { name: "JP317632JP", latitude: 35.7702, longitude: 140.3843  },
           "AJ367108KZ": { name: "AJ367108KZ", latitude: 47.4489, longitude: -122.309  }
      };

      const friend = friendsLocations[friendLocation];
      if (friend) {
        
        const map = L.map("map").setView([friend.latitude, friend.longitude], 10);

        
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          language: "en", 
        }).addTo(map);

        
        const marker = L.marker([friend.latitude, friend.longitude]).addTo(map);
        marker.bindPopup(friend.name).openPopup();
      } else {
        alert("Package location not found!");
      }
    }
      document.addEventListener('DOMContentLoaded', function () {
    var trackingNumberInput = document.getElementById('friend-location');
    trackingNumberInput.value = ''; // Clear the input field on page load
});

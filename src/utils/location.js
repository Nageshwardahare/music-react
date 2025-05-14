export const getUserCity = () =>
  new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
        const data = await res.json();
        resolve(data.address.city || data.address.town || data.address.state);
      }, async () => {
        const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
        const data = await res.json();
        resolve(data.city);
      });
    }
  });

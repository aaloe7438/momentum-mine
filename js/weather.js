const weather = document.querySelector("div#weather");

const API_KEY = "ac322ee156ca38a737b13f0c36f71e36";

function getGeolocationOk() {

}
function getGeolocationNg() {

}
navigator.geolocation.getCurrentPosition(getGeolocationOk, getGeolocationNg);
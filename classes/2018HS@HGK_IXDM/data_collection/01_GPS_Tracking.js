/**
 * this needss the following library:
 * https://github.com/bmoren/p5.geolocation
 * 
 */
function setup(){
    intervalCurrentPosition(positionPing, 1000)
}

function positionPing(position){
    console.log(position.latitude, position.longitude);
    document.getElementById('lat').innerHTML = 'lat: ' + position.latitude;
    document.getElementById('lon').innerHTML = 'lon: ' + position.longitude;
}
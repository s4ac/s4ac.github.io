function setup(){
    intervalCurrentPosition(positionPing, 1000)
}

function positionPing(position){
    document.getElementById('lat').innerHTML = 'lat: ' + position.latitude;
    document.getElementById('lon').innerHTML = 'lon: ' + position.longitude;
    // print("lat: " + position.latitude);
    // print("long: " + position.longitude);
}
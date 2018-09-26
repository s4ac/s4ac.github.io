let cnv;
function setup() {
  // put setup code here
  cnv = createCanvas(innerWidth, innerHeight);
  cnv.parent('p5Sketch');
}

function draw() {
  background(51);
}

function windowResized(){
  resizeCanvas(innerWidth, innerHeight);
}



Battery.getStatus(updateStatus); // this calls the getStatus function
Battery.onUpdate(updateStatus); // this happens when the battery updates 

function updateStatus(status, err){
  if(err){
    console.error(err);
  }else{
    console.log(status.level); // this returns a value between 0 and 1 
    console.log(status.charging); // returns a boolean true or false
    console.log(status.chargingTime) // this returns the time until the battery will be charged
    console.log(status.dischargingTime); // this returns the time till the battery will be discharged
  }
}
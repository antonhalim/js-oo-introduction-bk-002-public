function Bike(name, biketype, framecolor){
  this.name = name;
  this.bikeType = biketype;
  this.frameColor = framecolor;
  this.WHEELS = 2;
  this.status = 100;
  this.condition = "ready to go!"
}

Bike.prototype.takeForARide = function(num){
  this.status -= 100;
  if(this.status < 100){this.condition = "needs a tune up"};
};

Bike.prototype.tuneUp = function(){
  this.status = 100;
  this.condition = "ready to go!";
}

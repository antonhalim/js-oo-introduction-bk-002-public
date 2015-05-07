function Owner(name){
  this.name = name;
  this.bikes = [];
}

Owner.prototype.name = function(){
  return this.name
};

Owner.prototype.buildBike = function(name, biketype, framecolor){
  bike = new Bike(name, biketype, framecolor);
  this.bikes.push(bike);
};

Owner.prototype.rideBike = function(bike, num){
  for(var i = 0; i < this.bikes.length; i++){
    if(this.bikes[i].name === bike){
      this.bikes[i].takeForARide(num);
    }
  };
};

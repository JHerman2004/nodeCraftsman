var vehicle = {};
vehicle.drive = function(){
	console.log('vroom');
};

var car = Object.create(vehicle);
car.honk = function(){
	console.log('beeps');
};


var myVehicle = Object.create(vehicle);
var myCar1 = Object.create(car);
var myCar2 = Object.create(car);

myCar1.honk();
myCar2.honk();

myVehicle.drive();
myCar1.drive();
myCar2.drive();
var elForm = document.querySelector(".js-form");
var elInput = elForm.querySelector(".js-input");
var elSpanInvalid = elForm.querySelector(".js-span-invalid");
var elSpanValid = elForm.querySelector(".js-span-valid")
var elHourPerson = document.querySelector(".js-hour-person");
var elHourBike = document.querySelector(".js-hour-bike");
var elHourCar = document.querySelector(".js-hour-car");
var elHourPlane = document.querySelector(".js-hour-plane")
var personSpeed = 3.6;
var bikeSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;

elForm.addEventListener("submit", function(evt) {
   evt.preventDefault();

   if(elInput.value <= 0){
      elSpanValid.textContent = "";
      elSpanInvalid.textContent = "nol va noldan kichik son kiritish mumkin emas";
   } else if(elInput.value >= 0){
      elSpanInvalid.textContent = "";
      elSpanValid.textContent = "to'g'ri son kiritdingiz"
   }

   var personSpeedHour = elInput.value / personSpeed;
   var personHour = Math.floor(personSpeedHour);
   var personMin = Math.round((personSpeedHour - personHour) * 60);
   elHourPerson.textContent = `${personHour} soat ${personMin} minutda`;

   var bikeSpeedHour = elInput.value / bikeSpeed;
   var bikeHour = Math.floor(bikeSpeedHour);
   var bikeMin = Math.round((bikeSpeedHour - bikeHour) * 60);
   elHourBike.textContent = `${bikeHour} soat ${bikeMin} minutda`;

   var carSpeedHour = elInput.value / carSpeed;
   var carHour = Math.floor(carSpeedHour);
   var carMin = Math.round((carSpeedHour - carHour) * 60);
   elHourCar.textContent = `${carHour} soat ${carMin} minutda`;

   var planeSpeedHour = elInput.value / planeSpeed;
   var planeHour = Math.floor(planeSpeedHour);
   var planeMin = Math.round((planeSpeedHour - planeHour) * 60);
   elHourPlane.textContent = `${planeHour} soat ${planeMin} minutda`;

});
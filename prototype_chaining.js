// let animal = {
//     eats: true
//   };
//   let rabbit = {
//     jumps: true
//   };
  
  // rabbit.prototype = animal; // (*)
  
  // we can find both properties in rabbit now:
  // console.log( rabbit.eats ); // true (**)
  // console.log( rabbit.jumps );

  var rabbit = function(){};
  var animal = function(){};
  var test = {};
  console.log(animal)
  // animal.prototype.print = function(){
  //   console.log("I am an animal");
  // }

  // // console.log(animal);

  // rabbit.x = Object.create(animal.prototype);

  // rabbit.prototype.print = function(){
  //   console.log("I am a rabbit");
  // }

  // r = new rabbit();
  // r.print();
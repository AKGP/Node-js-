

  // (function() {
  //     let a = 0;
  //   return function(){
  //       console.log(a)
  //       return a = a+1
  //   }
  // })()();
  // console.log("djcghjs")






// var getData = function(){
//     return [1,2,3,4,5];
// }

// var testing = function(err,data){
//     if(err){
//         console.log("Some"+err);
//     }
//     else{
//        // data = getData();
//         console.log(data);
//     }
// }

// useData = function(callback){
//     let err = "error";
//     let data = "12345";
//     callback(err,data);
// }

// useData(testing);


// asyncForEach([1,2,3,4],function(i){
//   console.log("Asynchronous!!!", i);
// });

// function asyncForEach(ar,cb){
//   ar.forEach(function(el,idx){
//     setTimeout(cb,0);
//   });
  // ar.forEach(function(el,idx){
  //   setTimeout(function(el){
  //     cb(1);
  //   },0)
  // });
// }


// [1,2,3,4,5,6,7,8,9,10].forEach(async(el)=>{console.log(el)});

var fs = require('fs');



[1,2,3,4].forEach((elem, idx)=>{
  setTimeout(function(){
    console.log(elem, "ASynchronous");
  }, 0);
});


// [1,2,3,4].forEach((elem, idx)=>{
//      console.log(elem, "Synchronous");
// });

function getName(filepath, done){
  fs.readFile(filepath, function(err, names){
    if(err){
      done(err);
    } else{
      return done(null,names.toString());
    }
  })
}

getName('names.txt', function(err, result){
  console.log(result);
});



console.log("All Done");
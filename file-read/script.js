
var fs = require('fs');


function getName(folder, done){
  fs.readdir(folder, function(err, files){
    if(err){
      done(err);
    } else{
      files.forEach( function(file){
        // setTimeout(function(){
          let path = (folder+file).toString();
          // console.log(path.toString());
          fs.readFile(path,(err, data)=>{
            if(err){
              done(err,null);
            } done(null, data.toString());
          });
        // }, 0);
      });
      return done(null,files);
    }
  })
}

getName('./files/', function(err, files){
  if(err){
    console.error(err);
  }else{
    console.log(files);
  }
});

console.log("All done");



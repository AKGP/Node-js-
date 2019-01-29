module.exports = function(router){
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'ajay_123.',
        database : 'test'
    });
    connection.connect();
    router.post('/register',function(req,res){
        var data = {
            firstname:req.body.firstname, 
            lastname:req.body.lastname, 
            email:req.body.email, 
            password:req.body.password};
        connection.query('INSERT INTO user SET ?', data, function(err,result){
            if(err){
                throw err;
            }
            // console.log(result);
        });
        
        
    })
    router.get('/users',function(req,res){
        
         connection.query('SELECT * FROM user',function(err,rows,fields){
            console.log(rows);
            if(err){
                throw err;
            }
            res.json({success:true,message:"User Details", data:rows});
        });
    });
    return router;
}
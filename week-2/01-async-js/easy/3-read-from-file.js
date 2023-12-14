const fs = require('fs')
fs.readFile('test.txt',(err, data)=>{
    if(err){
        console.log("error: "+ err)
    }
    else{
        console.log(data.toString())
    }
})
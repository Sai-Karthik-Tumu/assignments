const fs = require('fs')
let text = "This is updated text"
fs.writeFile('test.txt', text, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Success")
    }
})
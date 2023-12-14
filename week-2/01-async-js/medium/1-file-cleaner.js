const fs = require('fs')

fs.readFile('test.txt',(err, data)=>{
    let file_data = ""
    if(err){
        console.log("error: "+ err)
    }
    else{
        file_data = data.toString()
    }
    let cleaned_data = file_data.replace(/ {2,}/g,' ');
    fs.writeFile('test.txt', cleaned_data, (err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Success")
        }
    })
})


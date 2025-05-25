const fs = require('fs')
fs.readFile('text.txt', (err, content)=>{
    if(err) {
       return console.log(err)    
    };
    console.log("Content :" + content);

});
fs.writeFile('output.txt', "Hello Balak!", err=>{
    if(err) {
        return console.log(err)    
     };
     console.log("Written Succesfully");
     console.log("Print something")

      

})

import fs from 'fs';

/*

fs.readFile('file.txt', 'utf8', (err,data)=>{
    if (err) throw err;
    console.log(data);
    
});

*/


fs.writeFile('file.txt', 'Hello, NODEJS', 'utf8',(err)=>{
    if(err) throw err;
    console.log('File has been written.');

})



var fs = require('fs');



/*
fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {

    if (err) console.log(err);
    else {
        
        console.log("Dosya Yazma Başarılı");
    }
});

fs.readFile('employees.json','utf8',(err,data)=>{

    if(err) console.log(err);
    else{
        console.log(data);
        console.log("Dosya Okuma Başarılı");
    }
});

*/

fs.appendFile('employees.json',',\n{"name": "Özcan", "salary": 20000}','utf8',(err)=>{
    if(err) console.log(err);
});










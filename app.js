const fs = require('fs');
const json = require('./jsonConverter2')

const data = JSON.parse([fs.readFileSync('./example.json','utf-8')])

console.log(data);

const flatObjt =(data)=>{
    let result = {};
    for(const i in data){
        if((typeof data[i]) === 'object'){
        const temp=flatObjt(data[i])
        for(const j in temp){
            result[i + "." + j] = temp[j]
        }
        }
        else{
            result[i]=data[i]
        }
    }
    return result
}

console.log(flatObjt(data))


let dada = flatObjt(data);
// console.log(dada)
exportToCsv(dada)

function exportToCsv (DATA){
    const csvString = DATA.rows.join('\n')
    console.log (csvString);


 
//    arr = arr.join('\r\n')
//    console.log(arr)
}
fs.writeFile(teste.csv,csvString,err =>{
    if(err){
        return console.error(err);
    }
    console.log('FILE SUCCESFULLY WRITTEN')
})
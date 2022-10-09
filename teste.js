const fs = require('fs');
const data = fs.readFileSync('./example.json', 'utf-8')

let obj = (JSON.parse([data]))

console.log(obj)


const flattenObj = (obj) => {
    const newObj = {}
    for (const i in obj) {
        if (typeof obj[i] === "object") {
            const temp = flattenObj(obj[i])
            for (const j in temp) {
                newObj[i + "." + j] = temp[j]
            }
        } else {
            newObj[i] = obj[i]
        }
    }
    return newObj
}




console.log(flattenObj(obj))




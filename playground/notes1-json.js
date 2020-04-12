const fs= require('fs')
// const book ={
//     title:'Ego is the new enemy',
//     author:'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)

// fs.writeFileSync('notes1-json.json',bookJSON)

// const dataBufer = fs.readFileSync('notes1-json.json')

// const dataJSON = dataBufer.toString()

// const data = JSON.parse(dataJSON)
// console.log(data.title)

const bio=
{
    name:'Naman',
    planet:'Earth',
    age:'19'
}

const bioJSON = JSON.stringify(bio)
const parsedData = JSON.parse(bioJSON)

fs.writeFileSync('notes1-json.json',bioJSON)


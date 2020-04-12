const name = 'Naman'
const usersAge = '19'

const user ={
    name, //name : 'name ' - SHORTHAND SYNTAX
    age: usersAge,
    location: 'Ahmedabad'
}

console.log(user)

//object destructuring

const product ={

    label:'Red Notebook',
    price :3,
    stock:990,
    salePrice : undefined


}

// const label = product.label
// const stock = product.stock

// const {label,stock} = product

// console.log(label)
// console.log(stock)

const transaction =(type,{label,stock = 0} ={})=>{

    console.log(type, label, stock)
}

transaction('order',product)
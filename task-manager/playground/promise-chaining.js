require('../src/db/mongoose')
const User = require('../src/models/users')

// User.findByIdAndUpdate('5e8b0ea45d3df2922e0de577',{ age :1 }).then((user)=>{
 
//     console.log(user)
//     return User.countDocuments({ age : 1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeCount = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})//age:age so...
    const count = await User.countDocuments({age})
    return count
}

updateAgeCount('5e886e17ab1eaa89948f284a', 2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})
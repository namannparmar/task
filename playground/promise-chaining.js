require('../src/db/mongoose')
const User = require('../task-manager/src/models/users')

User.findByIdAndUpdate('5e8b0ea45d3df2922e0de577',{ age :1 }).then((user)=>{
 
    console.log(user)
    return User.countDocuments({ age : 1})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})
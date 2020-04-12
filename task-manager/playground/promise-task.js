require('../src/db/mongoose')
const Tasks = require('../src/models/tasks')

Tasks.findByIdAndDelete('5e8c541b8536e00477705c17').then(()=>{
    return Tasks.countDocuments({completed : false})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})

const deleteTaskandCount = async (id) => {
    const task = await Tasks.findByIdAndDelete(id)
    const count = await Tasks.countDocuments({completed : false})
    return count
}

deleteTaskandCount('5e8862f3e98148893b84df26').then((count)=>{
    console.log(count)
 }).catch((e)=>{
     console.log(e)
 })

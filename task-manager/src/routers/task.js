const express = require('express')
const router = new express.Router()
const Tasks = require('../models/tasks')

router.post('/tasks',async (req,res)=>{

    const task = new Tasks(req.body)
   
   try
   {
      await task.save()
      res.status(201).send(task)

   }

   catch(e)
   {
    res.status(400).send(e)
   }
    // task.save().then(()=>{
    //     res.send(task)
    // }).catch((e)=>{
    //     res.status(400)
    //     res.send(e)
    // })
   
})



router.delete('/tasks/:id', async (req,res)=>{
    try{
         const task = await Tasks.findByIdAndDelete(req.params.id)
         if(!task)
         {
             return res.status(404).send()
         }
 
         res.send(task)
    }
    catch(e)
    {
        req.status(500).send()
    }
})

router.patch('/tasks/:id', async (req,res) => {
    
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','task','completed']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
     
    if(!isValidOperation)
    {
        return res.status(400).send({error : 'You are not authorized'})
    }
    try{
        const task = await Tasks.findByIdAndUpdate(_id,req.body,{ new : true, runValidators : true})
        if(!user)
           {
               return res.status(404).send()
           }
           res.status(200).send(task) 
    }
    catch(e)
    {
        res.status(400).send()
    }
})

router.get('/tasks/:id',async (req,res)=>{
   const _id = req.params.id
   
   try
   {
     const task = await Tasks.findById(_id)

     if(!task)
       {
           return res.status(404).send()
       }
       res.send(task)

   } catch(e)
   {
       res.status(500).send()
   }

//    Tasks.findById(_id).then((task)=>{
//        if(!task)
//        {
//            return res.status(404).send()
//        }
//        res.send(task)
//    }).catch((e)=>{
//        res.status(500).send()
//    })
})

module.exports = router
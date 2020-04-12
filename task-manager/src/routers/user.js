const express = require('express')
const router = new express.Router()
const User = require('../models/users')
require('../db/mongoose')
router.get('/test', (req,res) =>{
    res.send('From a new file')
})
router.post('/users1', async (req,res)=>{
    // const user = new User(req.body)
    console.log(JSON.stringify(req.body,null,2))
    try {
           await user.save()
           res.status(201).send(user)      
   
        } catch (e) {
            res.status(400).send(e)
        }
    // user.save().then(()=>{
    //     res.send(user)
    // }).catch((e)=>{
    //     res.status(400)
    //     res.send(e)

    // })
 
})

router.get('/users',async (req,res)=>{
    
    try{
        await User.find({})
        res.status(201).send(users)

    } catch(e){
        res.status(400).send(e)
    }

    // User.find({}).then((users)=>{
    //     res.send(users)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})

router.get('/users/:id',async (req,res) => {
    const _id = req.params.id
    try{
          const user = await User.findById(_id)

          if(!user)
          {
              return res.status(404).send()
          }
          res.send(user)
    } catch(e) {
            res.status(500).send()
    }
    // User.findById(_id).then((user)=>{
    //     if(!user)
    //     {
    //         return res.status(404).send()
    //     }

    //     res.send(user)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })

})

router.patch('/users/:id',async (req,res) =>{
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','email','password','age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
     
    if(!isValidOperation)
    {
        return res.status(400).send({error : 'You are not authorized'})
    }
    try 
       {
           const user = await User.findByIdAndUpdate(_id,req.body,{ new : true,runValidators: true})
           if(!user)
           {
               return res.status(404).send()
           }
           res.send(user) 
        }
         catch(e)
         { 
            res.status(400).send()
             }
})

router.delete('/users/:id', async (req,res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user)
        {
            return res.status(404).send()
        }

        res.send(user)
    }
    catch(e)
    {
        res.status(500).send()
    }
})

module.exports = router

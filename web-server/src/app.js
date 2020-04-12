const express = require('express')
const path = require('path')
const hbs =require('hbs')
const request = require("request")
const forecast = require('./utils/forecast')
const geocode = require('./utils/geocode')

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))

const app = express()

//set path 
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')  
const partialsPath = path.join(__dirname,'../templates/partials')


//setup hbs and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{

    res.render('index',{
        title : 'Weather',
        name : 'Naman'
    })
})

app.get('/about',(req,res)=>{

    res.render('about',{
        name: 'Naman',
        camera: 'One Plus 6'
    })

})
app.get('/help',(req,res)=>{
    res.render('help',{
        name: 'Naman'
    })
})

app.get('/weather',(req,res)=>{

    if(!req.query.address){
        return res.send({

            error :'You must search for an address'
        })
    }

    geocode(req.query.address,(error, { latitude, longitude, location  }={})=>
   {
     if (error)
     {
        return res.send({ error })
     }
    forecast(latitude,longitude,(error, forecastData) => {
    
    if (error)
    {
       return res.send({ error })
    }

    res.send({
        forecast : forecastData,
        location,
        address: req.query.address
    
    })

    })
  

  

})



})





  app.get('/help/*',(req,res)=>{

    res.render('404',{
        name: 'Naman',
        title : 'Page not found ,...Try one of these :'
    })
 })

 app.get('/about/*',(req,res)=>{

    res.send('Page not found !!!')

 })

  app.get('*',(req,res)=>{

    res.render('404',{
        name: 'Naman',
        title : 'ERROR : 404 ,...Try one of these :'
    })

  })

  app.listen(3000, ()=>
  {
      console.log('Server is up on 3000')
  })


  


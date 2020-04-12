// setTimeout(()=>{
//     console.log('Two are seconds up')
// },2000 )


// const geocode = (address,callback)=>{

//     setTimeout(()=>{

//         const data ={

//             latitude : 99,
//             longitude : 100
//         }
//     callback(data)

//     },2000)
// }

// geocode('LasVegas',(data)=>{
//     console.log(data)
// })

//****  challenge (misinterpreted very stupidly)    ****/
// setTimeout(()=>{
//     console.log('Two seconds are up')
// },2000)
// const addition =(callback)=>{

//     setTimeout(()=>{

        
        
//             add(1,4,(sum)=>{
//              data = sum
             
//             })
        
//      callback(data)

//     },2000)


    

// }

// addition((data)=>{
//     console.log(data)
// })







// // const geoCodeurl ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibmFtYW5ucGFybWFyciIsImEiOiJjazgwNXVsaGQwY24xM2d1bnAxaWc2OHF0In0.0G8CYK5WS9PIq5pje7SmIw&limit=1'

// // request({url:geoCodeurl,json: true},(error,response)=>{

// //     if(error)
// //     {
// //         console.log('Not able to connect to weather services')
// //     }
// //     else if(response.body.features.length===0)
// //     {
// //         console.log('Unable to find location, try another location name')
// //     }

// //     else()=>{

// //     const latitude = response.body.features[0].center[1]
// //     const longitude = response.body.features[0].center[0]

// //     console.log(latitude)
// //     console.log(longitude)
// //     }
// // }) 



//*********FOR PROMISES******** comparison..........


const doWorkCallback = (callback)=>{
    setTimeout(()=>{
        callback('This is my error')
    },2000)

}

doWorkCallback((error,result)=>{
    if(error)
    {
        return console.log(error)
    }

    console.log(result)

})
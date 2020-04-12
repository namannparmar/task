const request = require('request')

const forecast =(latitude,longitude,callback)=>{
    const url ='https://api.darksky.net/forecast/c5ba701d0511476c8eba716a1db7910b/'+latitude+','+longitude

    request({url : url,json: true},(error,response)=>
    {
        if(error)
        {
            callback('You maybe not connected to internet',undefined)
        }
        else if(response.body.error)
        {
            callback('Maybe you have mispelled or such location doesnt exist',undefined)

        }
        else
        {
            callback(undefined, response.body.daily.data[0].summary+' It is currently '+response.body.currently.apparentTemperature+' degrees.out. There is a '+response.body.currently.precipProbability+'% chance of rain.')
        }
    })
}

module.exports = forecast
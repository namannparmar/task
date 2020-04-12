



console.log('Client side is loaded')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageO = document.querySelector('#message-1')
const message = document.querySelector('#message-2')



weatherForm.addEventListener('submit',(e)=>{

    e.preventDefault()


    
    const location =search.value

    messageO.textContent = 'Loading ...'
    message.textContent = ''
 
    
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            messageO.textContent = data.error
            
        }
          else{ 
                 
                 messageO.textContent = data.location   
                 message.textContent = data.forecast
          }
    })
})






    
    
   
   
})
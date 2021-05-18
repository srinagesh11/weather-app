console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-one')
const messageTwo = document.querySelector('#message-two')


weatherForm.addEventListener('submit',(e) => {
    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""
    e.preventDefault()
    const location = search.value
    console.log(location)
    fetch(`/weather?address=${location}`)
        .then(response => response.json())
        .then(data => {
            if(data.err) {
                messageOne.textContent = data.err
                console.log(data.err)
            }else {
                messageOne.textContent = data.location 
                messageTwo.textContent = data.forecast
                console.log(data.location)
                console.log(data.forecast)
             }
    })
})
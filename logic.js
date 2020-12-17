// Lets HTML fully load
window.addEventListener("load", initSite)

// Buttons and global variable for date input since it is used in multible functions
document.getElementById("saveBtn").addEventListener("click", saveHoroscope)
document.getElementById("updateBtn").addEventListener("click", updateHoroscope)
document.getElementById("deleteBtn").addEventListener("click", deleteHoroscope)

let dateToSave  = document.getElementById("dateInput")

// Waits for HTML to load and outputs horoscope with viewRequest() if it is saved from earlier session
function initSite() {
    viewRequest()
}

// Sends date for calculating and saving horoscope on server and outputs horoscope with viewRequest()
async function saveHoroscope() {
    
    // Separates month and day from date input and stores them in body 
    dateToSave  = document.getElementById("dateInput").value

    dateToSave = Array.from(dateToSave)
    let month = dateToSave.slice(5, 7)
    let day = dateToSave.slice(8, 10)
    month = parseInt(month.join(''))
    day = parseInt(day.join(''))

    // Exits function i month and day is'nt set in input
    if(isNaN(month) && isNaN(day)) {
        return
    } 

    const body = new FormData()
    body.set("month", month)
    body.set("day", day)


    // Sends a POST request to addHoroscope.php with the body (month and day) and awaits response
    const collectedDate = await makeRequest("./php/addHoroscope.php", "POST", body)

    // Runs viewRequest() if addHoroscope.php respondes with true
    if(collectedDate) {
        viewRequest()
    }
    
}

// Sends date for calculating and updating horoscope on server and outputs horoscope with viewRequest()
async function updateHoroscope() {

    // Separates month and day from date input and stores them in body 
    dateToSave  = document.getElementById("dateInput").value

    dateToSave = Array.from(dateToSave)
    let month = dateToSave.slice(5, 7)
    let day = dateToSave.slice(8, 10)
    month = parseInt(month.join(''))
    day = parseInt(day.join(''))

    // Exits function i month and day is'nt set in input
    if(isNaN(month) && isNaN(day)) {
        return
    } 
    
    const body = new FormData()
    body.set("month", month)
    body.set("day", day)

    // Sends a POST request to updateHoroscope.php with the body (month and day) and awaits response
    const collectedDate = await makeRequest("./php/updateHoroscope.php", "POST", body)
    
    // Runs viewRequest() if addHoroscope.php respondes with true
    if(collectedDate) {
        viewRequest()
    }

}

// Deletes horoscope on server and clears outputDiv with viewRequest()
async function deleteHoroscope() {

    // Sends DELETE request to deleteHoroscope.php and awaits response
    const deleteRequest = await makeRequest("./php/deleteHoroscope.php", "DELETE")
    
    // Activates save button if response is true (horoscope is deleted)
    if (deleteRequest)
    {
        document.getElementById("saveBtn").disabled = false
    }
    viewRequest()
}

// Outputs or clears horoscope based on if its saved on server
async function viewRequest() {

    // Sets variable for outputDiv
    const outputDiv = document.getElementById("outputDiv")

    // Sends GET request to viewHoroscope.php and awaits response
    const viewRequest = await makeRequest("./php/viewHoroscope.php", "GET")
    
    // Clears outputDiv and greys out update and delete buttons if viewRequest is false
    if (!viewRequest) {

        outputDiv.innerText = ""
        document.getElementById("updateBtn").disabled = true
        document.getElementById("deleteBtn").disabled = true

    // Outputs horoscope and greys out save button and activates update and delete buttons    
    } else {

        outputDiv.innerText = viewRequest
        document.getElementById("saveBtn").disabled = true
        document.getElementById("deleteBtn").disabled = false
        document.getElementById("updateBtn").disabled = false

    }

    //Clears date input
    dateToSave = document.getElementById("dateInput").value = null

}

// Using fetch to send REST method and body (if set) to set path. Returns response or error
async function makeRequest(path, method, body) {

    try {
        const response = await fetch(path, {
            method,
            body
        })

        return await response.json()
        
    } catch(err) {

        return err

    }

}


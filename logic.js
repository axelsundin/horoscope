window.addEventListener("load", initSite)

document.getElementById("saveBtn").addEventListener("click", saveDate)
document.getElementById("updateBtn").addEventListener("click", updateDate)
document.getElementById("deleteBtn").addEventListener("click", deleteDate)
let dateToSave  = document.getElementById("dateInput")

function initSite() {
    viewRequest()
}

async function saveDate() {

    dateToSave  = document.getElementById("dateInput").value

    dateToSave = Array.from(dateToSave)
    let month = dateToSave.slice(5, 7)
    let day = dateToSave.slice(8, 10)
    month = parseInt(month.join(''))
    day = parseInt(day.join(''))

    if(isNaN(month) && isNaN(day)) {
        return
    } 

    const body = new FormData()
    body.set("month", month)
    body.set("day", day)

    const collectedDate = await makeRequest("./php/addHoroscope.php", "POST", body)

    if(collectedDate) {
        viewRequest()
    }
    
}

async function updateDate() {

    dateToUpdate  = document.getElementById("dateInput").value

    dateToUpdate = Array.from(dateToUpdate)
    let month = dateToUpdate.slice(5, 7)
    let day = dateToUpdate.slice(8, 10)
    month = parseInt(month.join(''))
    day = parseInt(day.join(''))

    if(isNaN(month) && isNaN(day)) {
        return
    } 
    
    const body = new FormData()
    body.set("month", month)
    body.set("day", day)

    const collectedDate = await makeRequest("./php/updateHoroscope.php", "POST", body)
    
    if(collectedDate) {
        viewRequest()
    }

}

async function deleteDate() {

    const deleteRequest = await makeRequest("./php/deleteHoroscope.php", "DELETE")
    if (deleteRequest)
    {
        document.getElementById("saveBtn").disabled = false
    }
    viewRequest()
}

async function viewRequest() {

    const outputDiv = document.getElementById("outputDiv")
    const viewRequest = await makeRequest("./php/viewHoroscope.php", "GET", undefined)
    
    if (!viewRequest) {

        document.getElementById("updateBtn").disabled = true
        document.getElementById("deleteBtn").disabled = true
        outputDiv.innerText = ""

    } else {

        outputDiv.innerText = viewRequest
        document.getElementById("saveBtn").disabled = true
        document.getElementById("deleteBtn").disabled = false
        document.getElementById("updateBtn").disabled = false

    }

    dateToSave  = document.getElementById("dateInput").value = null

}

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


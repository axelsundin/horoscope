window.addEventListener("load", initSite)

document.getElementById("saveBtn").addEventListener("click", saveDate)
document.getElementById("updateBtn").addEventListener("click", updateDate)
document.getElementById("deleteBtn").addEventListener("click", deleteDate)

function initSite() {
    viewRequest()
}

async function saveDate() {

    let dateToSave  = document.getElementById("dateInput").value

    dateToSave = Array.from(dateToSave)
    let month = dateToSave.slice(5, 7)
    let day = dateToSave.slice(8, 10)
    month = parseInt(month.join(''))
    day = parseInt(day.join(''))
    
    const body = new FormData()
    body.set("month", month)
    body.set("day", day)

    const collectedDate = await makeRequest("./php/addHoroscope.php", "POST", body)
    console.log(collectedDate)
    viewRequest()

}

async function updateDate() {

    let dateToUpdate  = document.getElementById("dateInput").value

    dateToUpdate = Array.from(dateToUpdate)
    let month = dateToUpdate.slice(5, 7)
    let day = dateToUpdate.slice(8, 10)
    month = parseInt(month.join(''))
    day = parseInt(day.join(''))
    
    const body = new FormData()
    body.set("month", month)
    body.set("day", day)

    const collectedDate = await makeRequest("./php/updateHoroscope.php", "POST", body)
    console.log(collectedDate)
    viewRequest()
}

async function deleteDate() {

    const deleteRequest = await makeRequest("./php/deleteHoroscope.php", "DELETE")
    console.log(deleteRequest)
    viewRequest()
}

async function viewRequest() {
    const outputDiv = document.getElementById("outputDiv")
    const viewRequest = await makeRequest("./php/viewHoroscope.php", "GET")
    outputDiv.innerText = viewRequest
}

async function makeRequest(path, method, body) {

    try {
        const response = await fetch(path, {
            method,
            body
        })

        return response.json()

    } catch(err) {
        return err
    }

}


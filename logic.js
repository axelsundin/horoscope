window.addEventListener("load", initSite)

document.getElementById("saveBtn").addEventListener("click", saveDate)
document.getElementById("updateBtn").addEventListener("click", updateDate)
document.getElementById("deleteBtn").addEventListener("click", deleteDate)

function initSite() {

}

async function saveDate() {
    console.log("clicked save")

    const dateToSave  = document.getElementById("dateInput").value

    if(!dateToSave.length) {
        console.log("Du måste skriva in ett datum i rätt format")
        return
    }

    const body = new FormData()
    body.set("date", dateToSave)

    const collectedDate = await makeRequest("./requestHandler.php", "POST", body)
    console.log(collectedDate)
    if(typeof collectedDate === 'string') {
        document.getElementById("outputDiv").innerText = collectedDate
    }
}

async function updateDate() {
    console.log("clicked update")

    const dateToUpdate  = document.getElementById("dateInput").value

    if(!dateToUpdate.length) {
        console.log("Du måste skriva in ett datum i rätt format")
        return
    }

    const body = new FormData()
    body.set("date", dateToUpdate)

    const collectedDate = await makeRequest("./requestHandler.php", "POST", body)
    console.log(collectedDate)
    if(typeof collectedDate === 'string') {
        document.getElementById("outputDiv").innerText = collectedDate
    } 
}

async function deleteDate() {
    console.log("clicked delete")

    const deleteRequest = await makeRequest("./requestHandler.php", "DELETE")
    console.log(deleteRequest)
    if(deleteRequest) {
        document.getElementById("outputDiv").innerText = ""
    } 
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
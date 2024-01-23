let events = []
let i = 0

function addEvent(event) {
    const b1 = document.getElementById("title")
    const b2 = document.getElementById("date")
    const ediv = document.getElementById("events-list")

    events.push({id: i, text: b1.value + " " + b2.value.toString()})

    let e = document.createElement("p")
    e.setAttribute("id", "event-" + i)

    let editText = document.createElement("button")
    editText.textContent = "Upravit"
    editText.addEventListener("click", editEvent)

    let deleteText = document.createElement("button")
    deleteText.textContent = "Smazat"
    deleteText.addEventListener("click", deleteEvent)

    e.textContent = events[i].text
    e.append(editText)
    e.append(deleteText)
    ediv.append(e)

    i += 1
}

function deleteEvent(e) {
    const id = e.target.parentNode.id.split("-")[1]
    events = events.filter(event => event.id != id)
    const element = document.getElementById("event-" + id)
    element.remove()
}

function editEvent(e) {
    const id = e.target.parentNode.id.split("-")[1]
    const newText = prompt("Zadejte nový text pro událost:")
    if (newText) {
        events = events.map(event => {
            if (event.id == id) {
                event.text = newText
            }
            return event
        })
        const element = document.getElementById("event-" + id)
        element.childNodes[0].nodeValue = newText
    }
}

// document.body.innerHTML = "<h1>Created by DOM</h1>"

const h1El = document.createElement("h1")

h1El.innerText = "Created by DOM using JS"


document.body.prepend(h1El)
console.log(h1El);
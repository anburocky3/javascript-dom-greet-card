const nameInput = prompt("What is your Name?")
const ageInput = prompt("What is your age?")
const hobbiesInput = prompt("What are your hobbies? Specify with commas.")

const nameEl = document.getElementById("namePlaceholder")
const ageEl = document.getElementById("agePlaceholder")
const hobbiesEL = document.getElementById("hobbiesPlaceholder")

nameEl.innerText = nameInput.toUpperCase()
ageEl.innerText = ageInput

const hobbiesCheck = hobbiesInput.split(", ")

const existingHobbies = []

hobbiesCheck.forEach((hobby) => {
    existingHobbies.push(`<span class="badge text-bg-primary">${hobby}</span>`)
})

console.log(existingHobbies);


hobbiesEL.innerHTML = existingHobbies




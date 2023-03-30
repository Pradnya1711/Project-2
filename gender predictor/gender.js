
let nameInput = document.querySelector(".name-input")
let btn = document.querySelector(".submit-btn")
let name = document.querySelector(".name") 
 let gender = document.querySelector(".gender")
let probability = document.querySelector(".probability")
 let count = document.querySelector(".count")
 let msgTxt = document.querySelector(".msg-txt")
let getGender = async () => { 
    try {
        let inputText = nameInput.value.trim()
let response = await fetch(`https://api.genderize.io?name=${inputText}`)
let data = await response.json()
if (data.gender ===null|| data.gender === undefined)
{
    msgTxt.innerHTML ="<h4>oops! please Enter valid a name..</h4>"
    msgTxt.style.color ="red"
}
else{
    name.innerHTML = `<h4>Name: ${data.name}</h4>`
    gender.innerHTML = `<h4>Gender: ${data.gender}</h4>`
    probability.innerHTML = `<h4>Probability: ${data.probability}</h4>`
    count.innerHTML = `<h4>Count: ${data.count}</h4>`
    msgTxt.innerHTML = "<h4>Hope I detected the gender correctly...</h4>" 
    msgTxt.style.color = "green"
}

    } catch (error) {

        console.log(`${error}`)
        
    }
}
btn.addEventListener("click", getGender)
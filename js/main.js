import {createCard, deleteCard} from "../components/card.js"
import {getUser, addUsers, getData,deleteUsers} from "../api/moduloApi.js"
let cardContainer = document.getElementById('list-people')


const printUsers =  async(sections) =>{
    let letUser = await getUser()
    let userArray = letUser.results
    userArray.forEach(item => {
        let {picture, name, gender, nat, dob, phone} = item
        let {large} = picture
        let {title, first, last} = name
        let {date, age} = dob

        sections.appendChild(createCard(large, title,first,last, gender, nat, date,age, phone, addUsers, printUsersApi))
    })
}
printUsers(cardContainer)

const printUsersApi = async() =>{
    let cardWrapper = document.getElementById('delete-people')
    cardWrapper.innerHTML = ""
    let letUser = await getData()
    console.log(letUser)
    let userArray = Object.keys(letUser)
    userArray.forEach(item => {
        let {name,nat,gender,birthdate,age,phone,picture} = letUser[item]
        cardWrapper.appendChild(deleteCard(name,nat,gender,birthdate,age,phone,picture, item,deleteUsers))

})
}

printUsersApi()

export {printUsers, printUsersApi}

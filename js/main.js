import {createCard, deleteCard} from "../components/card.js"
import {getUser, addUsers, getData} from "../api/moduloApi.js"


const printUsers =  async() =>{
    let cardContainer = document.getElementById('list-people')
    let letUser = await getUser()
    let userArray = letUser.results
    userArray.forEach(item => {
        let {picture, name, gender, nat, dob, phone} = item
         let {large} = picture
        let {title, first, last} = name
        let {date, age} = dob
        let divCol = document.createElement('div')
        divCol.classList.add(..."col-6 col-md-6 col-lg-4 pb-4".split(" "))
        let info = createCard(large, title,first,last, gender, nat, date,age, phone)
        divCol.appendChild(info)
        cardContainer.appendChild(divCol)

    
    })

    
}
printUsers()
const printUsersApi = async() =>{
    let cardWrapper = document.getElementById('delete-people')
    let letUser = await getData()
    console.log(letUser)
    let userArray = Object.keys(letUser)
    userArray.forEach(item => {
        let {name,nat,gender,birthdate,age,phone,picture} = letUser[item]

        let divCol = document.createElement('div')
        divCol.classList.add(..."col-6 col-md-6 col-lg-4 pb-4".split(" "))
        let info = deleteCard(name,nat,gender,birthdate,age,phone,picture)
        divCol.appendChild(info)
        cardWrapper.appendChild(divCol)

})
}

printUsersApi()

export {printUsers, printUsersApi}
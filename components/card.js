import { addUsers, deleteUsers, getData} from "../api/moduloApi.js";
   const createCard = (large, title,first,last, gender, nat, date,age, phone) => {
        // let {large} = picture
        // let {title, first, last} = name
        // let {date, age} = dob
        // Create card
        let divCard = document.createElement("div")
        divCard.classList.add("card")
        let imgCard = document.createElement("img")
        imgCard.classList.add("card-img-top")
        imgCard.src = large
        // card body
        let divCardBody = document.createElement("div")
        divCardBody.classList.add("card-body")
        let cardName = document.createElement("h5")
        cardName.classList.add("card-title")
        let pGender = document.createElement("p")
        pGender.classList.add("card-text")
        let pNat = document.createElement("p")
        pNat.classList.add("card-text")
        let pDate = document.createElement("p")
        pDate.classList.add("card-text")
        let pAge = document.createElement("p")
        pAge.classList.add("card-text")
        let pPhone = document.createElement("p")
        pPhone.classList.add("card-text")
        let btn = document.createElement("a")
        btn.classList.add("btn", "btn-primary")
        // btn.setAttribute("href", link)
        // Create content
        cardName.innerText = `${title}. ${first} ${last}` 
        pGender.innerText = gender
        pNat.innerText = nat
        pDate.innerText = date
        pAge.innerText = age
        pPhone.innerText = phone
        btn.innerText = `Add User`
        btn.addEventListener("click", () =>
        {
           let user = {
            name: `${title}. ${first} ${last}`,
            nat: nat,
            gender: gender,
            birthdate: date,
            age: age,
            phone: phone,
            picture: large
            };
            addUsers(user);
            //if clcik add user show button added user
            btn.innerText = `Added User`
            btn.classList.add("btn", "btn-success")


        })
       
        // Insert content
        divCardBody.append(cardName, pGender, pNat, pDate, pAge, pPhone, btn)
        divCard.append(imgCard, divCardBody)
        return divCard
    }


   const deleteCard = (name,nat,gender,birthdate,age,phone,picture) => {
        // let {large} = picture
        // let {title, first, last} = name
        // let {date, age} = dob
        // Create card
        let divCard = document.createElement("div")
        divCard.classList.add("card")
        let imgCard = document.createElement("img")
        imgCard.classList.add("card-img-top")
        imgCard.src = picture
        // card body
        let divCardBody = document.createElement("div")
        divCardBody.classList.add("card-body")
        let cardName = document.createElement("h5")
        cardName.classList.add("card-title")
        let pGender = document.createElement("p")
        pGender.classList.add("card-text")
        let pNat = document.createElement("p")
        pNat.classList.add("card-text")
        let pDate = document.createElement("p")
        pDate.classList.add("card-text")
        let pAge = document.createElement("p")
        pAge.classList.add("card-text")
        let pPhone = document.createElement("p")
        pPhone.classList.add("card-text")
        let btn = document.createElement("a")
        btn.classList.add("btn", "btn-primary")
        // btn.setAttribute("href", link)
        // Create content
        cardName.innerText =   name
        pGender.innerText = gender
        pNat.innerText = nat
        pDate.innerText = birthdate
        pAge.innerText = age
        pPhone.innerText = phone
        btn.innerText = `Delete User`
        let deleteUser = async () => {
            let users = await getData();
            let arrayUsers = Object.keys(users)
            btn.addEventListener("click", () =>
            {
                arrayUsers.forEach((user) => {
                    if (users[user].name === name) {
                        deleteUsers(user);
                        btn.innerText = `Deleted User`
                        btn.classList.add("btn", "btn-danger")
                    }
                })
            }
            )
        }
        deleteUser()
       
       
       
        // Insert content
        divCardBody.append(cardName, pGender, pNat, pDate, pAge, pPhone, btn)
        divCard.append(imgCard, divCardBody)
        return divCard
    }

    export {createCard, deleteCard}

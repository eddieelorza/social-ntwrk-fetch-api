   const createCard = (large, title,first,last, gender, nat, date,age, phone,addUsers,render) => {
        // let {large} = picture
        // let {title, first, last} = name
        // let {date, age} = dob
        // Create card
        let divCard = document.createElement("div")
        divCard.classList.add(..."card col-12 col-md-4 col-lg-3 m-2".split(" "))
        let divBg = document.createElement("div")
        divBg.classList.add("bg-cover")
       
        let imgCard = document.createElement("img")
        imgCard.classList.add("card-img-top")
        imgCard.src = large
        // card body
        let divCardBody = document.createElement("div")
        divCardBody.classList.add(..."card-body d-flex flex-column justify-content-between".split(" "))
        let cardName = document.createElement("h5")
        cardName.classList.add("card-title", "text-center")
        let divSubBody = document.createElement("div")
        divSubBody.classList.add(..."d-flex justify-content-evenly align-items-center".split(" "))
        let pGender = document.createElement("p")
        pGender.classList.add("card-text")
       
        let pDate = document.createElement("p")
        pDate.classList.add("card-text")
        let pAge = document.createElement("p")
        pAge.classList.add("card-text")
        
        let btn = document.createElement("a")
        btn.classList.add(..."btn btn-white border border-primary rounded-5 text-primary".split(" "))
        let natFlag = document.createElement('img')

        
        // btn.setAttribute("href", link)
        // Create content
        cardName.innerText = `${title}. ${first} ${last}` 
        pGender.innerText = gender
        let dates = moment(date).format("DD/MMM/YY"); 
        pDate.innerText = dates
        pAge.innerText = age

        natFlag.classList.add(...'pe-2 nat-img'.split(" "))
        natFlag.setAttribute("src",`https://www.countryflagicons.com/FLAT/32/${nat}.png` );
        btn.innerText = `Add User`
        btn.addEventListener("click", async() =>
        {
           let user = {
            name: `${title}. ${first} ${last}`,
            nat: nat,
            gender: gender,
            birthdate: date,
            age: age,
            phone: phone,
            picture: large
            } 
            await addUsers(user);
            render()
           
        })
       
        // Insert content
        divSubBody.append(natFlag, pDate)
        divCardBody.append(cardName,divSubBody,btn)
        divCard.append(divBg,imgCard, divCardBody)
        return divCard
    }



   const deleteCard = (name,nat,gender,birthdate,age,phone,picture,item,deleteUsers) => {
        // let {large} = picture
        // let {title, first, last} = name
        // let {date, age} = dob
        // Create card

        let liCard = document.createElement("li")
        liCard.classList.add(..."d-flex flex-column flex-lg-row justify-content-lg-between align-items-center border border-secondary rounded-4 p-3 m-2".split(" "))

        let divCard = document.createElement("div")
        divCard.classList.add(..."d-flex align-items-center info-box".split(" "))

        let imgCard = document.createElement("img")
        imgCard.classList.add("card-img-top")
        imgCard.src = picture
        // card body
        let divCardBody = document.createElement("div")
        divCardBody.classList.add(..."d-flex flex-column info".split(" "))
        let cardName = document.createElement("h3")
        cardName.classList.add("fw-bold")
        let divSubBody = document.createElement("div")
        divSubBody.classList.add(..."d-flex justify-content-between".split(" "))

        let pNat = document.createElement("p")
        pNat.classList.add("card-text")
        let pDate = document.createElement("p")
        pDate.classList.add("card-text")
        let pAge = document.createElement("p")
        pAge.classList.add("card-text")
        let btn = document.createElement("a")
        btn.classList.add(..."btn btn-white border border-secondary rounded-5 text-secondary px-5".split(" "))
        // btn.setAttribute("href", link)
        // Create content
        cardName.innerText =   name
        pNat.innerText = nat
        let dates = moment(birthdate).format("Do MMM  YY"); 
        pDate.innerText = dates
        pAge.innerText = age
        btn.innerText = `Delete User`
            btn.addEventListener("click", (e) =>{
                     deleteUsers(item);
                        //if clcik add user show button added user
                        btn.innerText = `Deleted User`
                        btn.classList.add("btn", "btn-danger")
                        e.currentTarget.parentNode.remove()
                       

                        
            })
       
       
       
        // Insert content
        divSubBody.append(pNat, pDate, pAge)
        divCardBody.append(cardName,divSubBody)
        divCard.append(imgCard, divCardBody)
        liCard.append(divCard,btn)
        
        return liCard
    }

    export {createCard,deleteCard}

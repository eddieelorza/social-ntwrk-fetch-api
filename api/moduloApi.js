
const API_URL = 'https://randomuser.me/api/?results=50&inc=gender,name,nat,dob,picture,phone'
const API_USERS = 'https://social-network-api-ffcdb-default-rtdb.firebaseio.com/'
const COLLECTION = 'users'

///obtener datos de la primera api
const getUser = async() =>{
    let response = await fetch(`${API_URL}`)
    let data = await response.json()
    console.log(data)
    return data;
}
//obtener los datos
const getData = async() =>{
    let response = await fetch(`${API_USERS}/${COLLECTION}/.json`)
    let data = await response.json()
    console.log(data)
    return data;
}

//Va a mandar los datos a la segunda
const addUsers = async (peopleObject) => {
    let response = await fetch(
        `${API_USERS}/${COLLECTION}/.json`,
      {
        method: "POST",
        body: JSON.stringify(peopleObject),
      }
    );
    let data = await response.json();
    console.log(data);
    // printUsers();

   

    return data;
  };

  const deleteUsers = async (peopleKey) => {
    let response = await fetch(
        `${API_USERS}/${COLLECTION}/${peopleKey}/.json`,
        {
        method: "DELETE",
        }
    );
    let data = await response.json();
    
    return data;
    };



  export {getUser, addUsers, getData, deleteUsers}
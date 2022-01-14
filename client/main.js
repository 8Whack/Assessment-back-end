


document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  
  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };

function submitColor(e){
    e.preventDefault()
    let color = document.querySelector('#rainbowInput')
    let bodyObj = {
        color: color.value
    }
    createColor(bodyObj)
    color.value = ''
}

   function createColor(body){
      axios.post('http://localhost:4000/api/rainbow/', body)
      .then((res)=>{
          console.log(res.data)
      })
      .catch((err)=>
      console.log(err))
      }

    function deleteColor(){
        axios.delete('http://localhost:4000/api/rainbow/')
        .then((res)=>{
            console.log(res.data)
        })
    }
    
    globalId = 0
    function submitUser(e){
        e.preventDefault()
        let username = document.querySelector('#username')
        let password = document.querySelector('#password')

        let bodyObj = {
            username: username.value,
            id: globalId,
            password: password.value
        }
        createUser(bodyObj)
        username.value = ''
        password.value = ''
        globalId++
    }
    function createUser(body){
        axios.post('http://localhost:4000/api/user/', body)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>
        console.log(err))
        }

    function updatePassword(e){
        e.preventDefault()
        let newPassword = document.querySelector('#updatePassword')
        let username = document.querySelector('#updateUsername')
        let user = username.value

        objBody = {
            username: username,
            password: newPassword.value
        }
        newPassword.value = ''
        username.value = ''
        axios.put(`http://localhost:4000/api/user/${user}`, objBody)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

document.getElementById('submitColor').addEventListener('click', submitColor)
document.getElementById('deleteColor').addEventListener('click', deleteColor)
document.querySelector('#submitUser').addEventListener('click', submitUser)
document.querySelector('#updatePasswordButton').addEventListener('click', updatePassword)
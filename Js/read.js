 // localstorage config

 let users =  localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo')) :[];

 let results = document.getElementById('results');
 console.log(results)

 //to print the data form the locakstorage
 function printUser() {
    console.log('print users =',users)
    users.forEach(item => {
        results.innerHTML +=`
        
        <tr>
             <td> ${item.id} </td>
             <td> ${item.name} </td>
             <td> ${item.email} </td>
             <td> ${item.gender} </td>
             <td> 
             <a href="./update.html?userId=${item.id}" class="btn btn-success">Edit</a>
             <button onclick="deletUser(${item.id})" class="btn btn-danger">Delete</button>

             </td>

        </tr>
        `;
    });
 };

 printUser()

 //to delet the existing user
  function deleteUser(id) {
 if(confirm (`Are you sure to delete an user id = ${id}?`)) {
    let = index = users.findIndex((item) => item.id === id);
    if(!index === null) {
        alert("user id doesn't exists.");

    }else {
        users.splice(index,1);
        localStorage.setItem('userinfo', JSON.stringify(users))
        alert('user successfully deleted');
        window.location.href = "/index.html";
    }

 } else {
    return;
 } 

}

//logic to read query string form url
const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams,prop) =>searchParams.get(prop)
});

console.log('params =', params.userId);

// localstorage config

let users =  localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo')) :[];

let single = users.find((item) => item.id == params.userId)
console.log('single user =', single)

let userForm = document.getElementById('userform');
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userGender = document.getElementsByName('gender');
let selGender ="";

userName.value = single.name;
userEmail.value = single.email;

  // reading data form storage and selecting the chechbox
  for(let i=0; i < userGender.length; i++){
    if(userGender[i].value === single.gender) {
        selGender = userGender[i].checked = true;
    }
}

 // form Submit Handler

userForm.addEventListener('submit', function(e) {
    e.preventDefault(); // to avoid page refresh

    // to pick value from selected radio refresh
    for(let i=0; i < userGender.length; i++){
        if(userGender[i].checked) {
            selGender = userGender[i].value;
        }
    }
    // object
    let data = {
        id: single.id,
        name: userName.value,
        email: userEmail.value,
        gender : selGender,
    };
    console.log('updated user =', data);
    updateUser(data)
});

 //[0,1,2]
//update the user info
function updateUser(data) {
   let index = users.findIndex((item) => item.id ===data.id)
     console.log('update user id=',index)
}

   //splice(indrx,delcount,data)
   users.splice(index,1,data);
   //users.push(data)
   localStorage.setItem('userinfo', JSON.stringify(users))
   alert('user data updated sucessfully');
   window.location.href = "/index.html";
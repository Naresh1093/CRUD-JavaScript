
let userForm = document.getElementById('userform');
let userName = document.getElementById('name');
let userEmail = document.getElementById('email');
let userGender = document.getElementsByName('gender');
let selGender ="";

// //localstorage config
 let users = localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo')) : []; //(write in read js)

//to generate random id -arrow function
const genRanId = () => {
    let randId = Math.floor(Math.random() *10000);
    return randId;
};

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
        id: genRanId(),
        name: userName.value,
        email: userEmail.value,
        gender : selGender,
    };
    console.log('new user =', data);
    createUser(data)
});

// to create new user
function createUser(user) {
    let exUser = users.find((item) => item.email === user.email);
               console.log('exUser =', exUser);

               if(exUser) {
                       alert('user email already registered.');
                
               } else {
                //save
                users.push(user);
                localStorage.setItem("userinfo", JSON.stringify(users))
                alert('new user created successfully');
                window.location.href = "/CRUD/index.html";
               }

               
}

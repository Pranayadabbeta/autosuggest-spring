// alert("Hello guysss");

console.log("hello from JS!")

var users = [
    {
        "name" : "Daemon Targaryen",
        "gender" : "Male",
        "img" : "image.png"
    },
    {
        "name" : "Rhaenyra Targaryen",
        "gender" : "Female",
        "img" : "rhaenyra.webp"
    }
]

var id = 0;

function toggleUser(){
    id = (id + 1)%2
    // get the elements

    // 1: image
    var userImage = document.getElementById("user-image");
    userImage.src = users[id].img;

    // 2: name
    var userName = document.getElementById("user-name");
    userName.innerHTML = users[id].name;

    // 3: gender
    var userGender = document.getElementById("user-gender");
    userGender.innerHTML = users[id].gender;

}

function randomUser(){
    fetch('https://randomuser.me/api/')
    .then(function(response){
        //convertig raw text to json
        return response.json();

    })
    .then(function(data){

    var userData = data.results[0];
        // 1: image
    var userImage = document.getElementById("user-image");
    userImage.src = userData.picture.large;

    // 2: name
    var userName = document.getElementById("user-name");
    userName.innerHTML = userData.name.first + " " + userData.name.last;

    // 3: gender
    var userGender = document.getElementById("user-gender");
    userGender.innerHTML = userData.gender;

    })
    .catch(function(error){
        console.log(error);
    })
}
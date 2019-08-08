/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */


function myMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}// Your Code Here!

function editPrf() {
    document.getElementById("edit-dropdown").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.edit')) {
        var editdropdowns = document.getElementsByClassName("edit-content");
        var i;
        for (i = 0; i < editdropdowns.length; i++) {
            var openDropdown = editdropdowns[i];
            if (openDropdown.classList.contains('show')) {
            }
        }
    }
}

var firebaseConfig = {
    apiKey: "AIzaSyDxhIg82JXWxzP8Aqfum_3i5cbLkJ3Kxn0",
    authDomain: "middleman-56862.firebaseapp.com",
    databaseURL: "https://middleman-56862.firebaseio.com",
    projectId: "middleman-56862",
    storageBucket: "middleman-56862.appspot.com",
    messagingSenderId: "814613593392",
    appId: "1:814613593392:web:aaa1fe72b5b3f70a"
  };
//initialize firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

$("#form2").submit(function (e) {//when submit button is clicked
    e.preventDefault(); //prevents logged info from deleting @refresh
    console.log("form submitted!")

    var img_input = document.getElementById("prf-img").value; //calls img-input frpm html
    var name_input = document.getElementById("prf-name").value;//calls name-input from html

    var post_input = document.getElementById("prf-bio").value;//calls "post-input" from html 
      
    saveItemToDatabase(img_input, name_input, post_input)

    img_input.value= ""; //clears input 
    name_input.value="";
    post_input.value="";
});


function saveItemToDatabase(img_input, name_input, post_input) {
//save element to database
doc = db.collection("profile").doc("user_profile").set({  //saves to database on  single doc
    image: img_input, //adds to collection
    username: name_input,
    bio: post_input,
})
    .then(function() {
    db.collection("profile").doc("user_profile").get().then(function(doc) {
    replace(img_input, name_input, post_input); //applies function to each 
     });
  });
};

function replace(img_input, name_input, post_input) { //replaces whatever is set with the input
    document.getElementById("AC").src = img_input;    
    document.getElementById("profile-name").innerHTML = name_input;
    document.getElementById("profile-text").innerHTML = post_input;    
    };

function loadProfile() {
    db.collection("profile").doc("user_profile").get().then(function (doc) {
    replace(doc.data().image, doc.data().username, doc.data().bio);
    });
  };

$(document).ready(function () {
    loadProfile()
});


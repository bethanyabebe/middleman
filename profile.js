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
$("#form3").submit(function (e) {
    e.preventDefault();
    console.log("form submitted!")

    var career = document.getElementById("interests");
    var career_text = career.value;

    addNewItem(career_text)

    career.value = "";// Your code here!
});
function addNewItem(career_text) {

    var career_text_elem = document.createElement("p");
    career_text_elem.innerHTML = career_text;
    career.appendChild(career_text_elem);
    document.getElementById("career").appendChild(career_text_elem)

    career_text_elem.addEventListener("click", function () {
        var career_text_id = String(Math.random())//assigns a number to each sticky note
        career_text_elem.id = career_text_id
        document.getElementById(career_text_elem.id).remove()//removes the sticky note
    });

    };

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById('myDropdown2').classList.toggle('show2')
}

// Close the dropdown menu if the user clicks outside of it
$('#button2').click(function(event2) {
  if (!event2.target.matches('.button2')) {
    var dropdownz = document.getElementsByClassName('dropdown2-content')
    var j
    for (j = 0; j < dropdownz.length; j++) {
      var open = dropdownz[j]
      if (open.classList.contains('show2')) {
        open.classList.remove('show2')
      }
    }
  }
});

const btnLogout = document.getElementById('btnLogout');
var profile = document.getElementById('profile');
var log = document.getElementById('login2');


btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    }); 

  firebase.auth().onAuthStateChanged(firebaseUser => {
       if (firebaseUser) {
           console.log(firebaseUser); 
           log.style.display= 'none';
           profile.style.display= 'hidden';
              }
              else {
           console.log('not logged in')
           log.style.display= 'hidden';
           profile.style.display= 'none';
                  }
              })

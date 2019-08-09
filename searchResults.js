var learnMore = document.getElementById("learnMore");
learnMore.style.display= "none"


search1.addEventListener("click", function(e) { 
e.preventDefault()
    var learnMore = document.getElementById("learnMore");
    learnMore.style.display= "block";
    console.log('bruh')
 doc = db.collection("mentorUsers").get()
    
.then(function(doc) {
      db.collection("mentorUsers").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) { 
        retrieveData(doc)
        searchResults(doc)
    });
    });
    });
    });



    function searchResults(doc) {
    console.log("hola3")
  var select = document.getElementById("new")
  var result = select.options[select.selectedIndex].text
     console.log("hola4")
    }
function retrieveData(doc) {
    console.log("hola5")
var box = document.createElement("div");
var name = document.createElement("p");
name.id = "mentorname";
name.innerHTML = doc.data().name;   
    box.appendChild(name); 
var current = document.createElement("p")
current.innerHTML = doc.data().currentProfession;
current.id = "mentorcurrent";
     box.appendChild(current);
var edu = document.createElement("p");
edu.innerHTML = doc.data().educationLevel;
edu.id = "mentoredu"
     box.appendChild(edu);
var bio = document.createElement("p");
bio.innerHTML = doc.data().bio
bio.id = "mentorbio"
    box.appendChild(bio)
var line = document.createElement("p");
line.innerHTML = "======================================"
document.getElementById("container").appendChild(box);
 
};

  

 function reloadResults(){
     console.log("hola1")
  var select = document.getElementById("new")
  var result = select.options[select.selectedIndex].text
   doc = db.collection("mentorUsers").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log("hola2")
        if (result === doc.data().currentProfession) {
            retrieveData(doc)}
        else {
            return "No Results Found"
        }
        retrieveData(doc);       
         
   })
  })
}

$(document).ready(function() {
    console.log("work1")
    reloadResults()
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


 var firebaseConfig = {
    apiKey: "AIzaSyDxhIg82JXWxzP8Aqfum_3i5cbLkJ3Kxn0",
    authDomain: "middleman-56862.firebaseapp.com",
    databaseURL: "https://middleman-56862.firebaseio.com",
    projectId: "middleman-56862",
    storageBucket: "middleman-56862.appspot.com",
    messagingSenderId: "814613593392",
    appId: "1:814613593392:web:9762d421b305e2b0"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
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
}


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





function changeTestimonial(){
  setTimeout(changeTestimonialB, 400); 
  document.getElementById("testimonialtext").classList.add("animation")
}
  function changeTestimonialB(){
  db.collection("Users").doc("Testimonials").get().then(function(doc){
  var testimonialarray = [doc.data().A, doc.data().B, doc.data().C, doc.data().D, doc.data().E, doc.data().F]
  var randomtestimonial = testimonialarray[Math.floor(Math.random()*testimonialarray.length)];
  document.getElementById("testimonialtext").innerHTML = randomtestimonial
  document.getElementById("testimonialtext").classList.remove("animation")
})
}
function getTestimonial(){
db.collection("Users").doc("Testimonials").get().then(function(doc){
  document.getElementById("testimonialtext").innerHTML = doc.data().A
})
}

$(document).ready(function(){
  getTestimonial(); //Loads testimonials when the page loads
  
});

function myMenu() {
  document.getElementById('myDropdown').classList.toggle('show')
}

$('#button').click(function(event) {
  if (!event.target.matches('.button')) {
    var dropdowns = document.getElementsByClassName('dropdown-content')
    var i
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i]
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show')
      }
    }
  }
});


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById('myDropdown2').classList.toggle('show2')
  console.log('hi1')
}

// Close the dropdown menu if the user clicks outside of it
$('#profile').click(function(event2) {
  if (!event2.target.matches('.profile')) {
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
var log = document.getElementById('log');


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


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
const dropdown2 = document.getElementById('dropdown2');
const log = document.getElementById('log');


btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
    }); 

  firebase.auth().onAuthStateChanged(firebaseUser => {
       if (firebaseUser) {
           console.log(firebaseUser); 
           dropdown2.classList.remove('hide')
           log.classList.add('hide')
              }
              else {
           console.log('not logged in')
           dropdown2.classList.add('hide')
           log.classList.remove('hide')
              }
              })


        console.log("456")
        open.classList.remove('show2');
      }
    }
  }
}

/* allows for logout function
btnLogout.addEventListener("click", e=> {
 firebase.auth().signOut();
 })
*/

/* hides/removes logout and login button
    firebase.auth().onAuthStateChanged(firebaseUser => {
       if (firebaseUser) {
           console.log(firebaseUser); 
           btnLogout.classList.remove("hide")
           login1.classList.add("hide")
              }
              else {
           console.log('not logged in')
           btnLogout.classList.add("hide")
              }
              })
    */

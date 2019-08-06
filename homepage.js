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
function logout() {
  document.getElementById("myDropdown2").classList.toggle("show2");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(events) {
  console.log("jp");
  if (!events.target.matches('.button2')) {
    console.log("hekko");
    var dropdownz = document.getElementsByClassName("dropdown2-content");
    var j;
    for (j = 0; j < dropdownz.length; j++) {
      var open = dropdownz[j];
      if (open.classList.contains('show2')) {
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

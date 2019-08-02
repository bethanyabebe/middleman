function myMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

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




$("#signuppage").submit(function(e) {
  e.preventDefault();
  
if(document.getElementById('mentee').checked) {
  window.location.href = "setupmentee.html";
  }

  if(document.getElementById('mentor').checked){
  window.location.href = "setupmentor.html";
  }  


firebase.auth().onAuthStateChanged(firebaseUser => {
if (firebaseUser) {
  console.log(firebaseUser); 
 // btnLogout.classList.remove("hide")
}
else {
  console.log('not logged in')
//  btnLogout.classList.add("hide")
}
})
})



$("#loginpage").submit(function(e) {
  e.preventDefault();
  const emailInput= document.getElementById("emailInput");
  const passInput= document.getElementById("passInput");
  const login= document.getElementById("login");


login.addEventListener("click", e => {
  const email= emailInput.value;
  const password= passInput.value;
  const auth = firebase.auth();

  const check1 = auth.signInWithEmailAndPassword(email, password);
  check1.catch(e => alert(e.message))

 /* btnLogout.addEventListener("click", e => {
    firebase.auth().signOut();
  }) */

})
})

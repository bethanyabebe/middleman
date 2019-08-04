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
})




$("#loginpage").submit(function(e) {
  e.preventDefault();

  const email= document.getElementById("emailInput").value;
  const password= document.getElementById("passInput").value;
  

  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(firebaseUser) {
    window.location.href = "index.html"
  })
  .catch(function(error) {
    alert(error)
  })
})

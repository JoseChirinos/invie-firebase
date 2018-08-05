//console.log(firebase);
//console.log(firebase.auth());

var btnLogin = document.querySelector("#btnLogin");
var btnLogout = document.querySelector("#btnLogout");

/* Verifica si tiene usuario logueado */
firebase.auth().onAuthStateChanged(function(user){
  console.log(user);
  if(user){
    //console.log("tenemos usuario");
    show(btnLogout);
    hidden(btnLogin);
  }else{
    //console.log("no tenemos usuario");
    show(btnLogin);
    hidden(btnLogout);
  }
});
/* Cerrar Session */
btnLogout.addEventListener('click', (evt) => {
  show(btnLogin);
  hidden(btnLogout);
  firebase.auth().signOut();//cerrar sesion
});

/* Iniciar Session */
btnLogin.addEventListener("click",function(e){
  e.preventDefault();
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('public_profile');
  firebase.auth().signInWithPopup(provider)
  .then(function(user){
    //console.log(user);
    show(btnLogout);
    hidden(btnLogin);
  })
  .catch(function(err){
    console.log(err);
    show(btnLogin);
    hidden(btnLogout);
  })
})

function hidden(el){
  el.parentElement.style.display = "none";
}
function show(el){
  el.parentElement.style.display = "inline-block";
}

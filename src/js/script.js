// ESCONDER TUDO DO LOGIN
var btnCad = document.getElementById("btnCad");
var btnP = document.getElementById("btnP");
var btnP2 = document.getElementById("btnP2");
var btnP3 = document.getElementById("btnP3");
var btnP4 = document.getElementById("btnP4");
var btnLogin = document.getElementById("btnMuda4");
var h3 = document.getElementById("h3");
var h3Dois = document.getElementById("h3-2");
var h5 = document.getElementById("h5");
var h5Dois = document.getElementById("h5-2");


btnCad.addEventListener('click', function(){
   
    btnP.style.display = "none";
    btnP2.style.display = "none";
    btnP3.style.display = "block";
    btnP4.style.display = "block";
    h3.style.display = "none";
    h3Dois.style.display = "block";
    h5.style.color = "#b25f28";
    h5Dois.style.color = "#b25f28";

    

});

btnLogin.addEventListener('click', function(){
   
    btnP.style.display = "block";
    btnP2.style.display = "block";
    btnP3.style.display = "none";
    btnP4.style.display = "none";
    h3.style.display = "block";
    h3Dois.style.display = "none";
    h5.style.color = "#9db9f2";
    h5Dois.style.color = "#9db9f2";

    

});


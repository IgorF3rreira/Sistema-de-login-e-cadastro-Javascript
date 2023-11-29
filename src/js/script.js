alert("Um sistema de login simples \nEle não faz varios cadastros \nLembre-se é apenas uma simulação ");



// ESCONDER TUDO DO LOGIN
var btnCad = document.getElementById("btnMuda");
var btnLogin = document.getElementById("btnMuda4");
var btnFazLogin = document.getElementById("btnMuda2");
var btnFazCad = document.getElementById("btnMuda3");
var div = document.getElementById("div");
var body = document.getElementById("body");
var btnP = document.getElementById("btnP");
var btnP2 = document.getElementById("btnP2");
var btnP3 = document.getElementById("btnP3");
var btnP4 = document.getElementById("btnP4");
var h3 = document.getElementById("h3");
var h3Dois = document.getElementById("h3-2");
var h5 = document.getElementById("h5");
var h5Cinco = document.getElementById("h5-5");
var h5Dois = document.getElementById("h5-2");
var h5Tres = document.getElementById("h5-3");
var h5Quatro = document.getElementById("h5-4");
var inpLogin = document.getElementById("login");
var inpSenha = document.getElementById("senha");
var inpId = document.getElementById("id");
var inpEmail = document.getElementById("email");
var inpSenhaCad = document.getElementById("senhaCad");


var carregamento = document.getElementById("aguarde");





btnCad.addEventListener('click', function(){
   
    btnP.style.display = "none";
    btnP2.style.display = "none";
    btnP3.style.display = "block";
    btnP4.style.display = "block";
    h3.style.display = "none";
    h3Dois.style.display = "block";
    h5.style.display = "none";
    h5Cinco.style.display = "none";
    h5Dois.style.display = "block";
    h5Tres.style.display = "block";
    h5Quatro.style.display = "block";
    inpLogin.style.display = "none";
    inpSenha.style.display = "none";
    inpId.style.display = "block";
    inpEmail.style.display = "block";
    inpSenhaCad.style.display = "block";

    body.style.backgroundColor =  "#b25f28";
    div.style.backgroundImage = "url('src/img/outono.gif')";



    

});

btnLogin.addEventListener('click', function(){
   
    btnP.style.display = "block";
    btnP2.style.display = "block";
    btnP3.style.display = "none";
    btnP4.style.display = "none";
    h3.style.display = "block";
    h3Dois.style.display = "none";
    h5.style.display = "block";
    h5Cinco.style.display = "block";
    h5Dois.style.display = "none";
    h5Tres.style.display = "none";
    h5Quatro.style.display = "none";
    inpLogin.style.display = "block";
    inpSenha.style.display = "block";
    inpId.style.display = "none";
    inpEmail.style.display = "none";
    inpSenhaCad.style.display = "none";


    body.style.backgroundColor = "#7e8fb3";
    div.style.backgroundImage = "url('src/img/inverno.gif')";
    
});
        var id = "" ;
        var email = "";
        var senhaCad = "";
        var login ="";
        var senha ="";

btnFazCad.addEventListener('click', function(){

    if(inpId.value === "" || inpEmail.value === "" || inpSenhaCad.value === ""){
        alert("Preencha todos os campos!!");
        inpId.value = "";
        inpEmail.value = "";
        inpSenhaCad.value = "";
    }else{
        id = inpId.value;
        email = inpEmail.value;
        senhaCad = inpSenhaCad.value;
        alert("Cadastro feito com sucesso!!");

        btnP.style.display = "block";
        btnP2.style.display = "block";
        btnP3.style.display = "none";
        btnP4.style.display = "none";
        h3.style.display = "block";
        h3Dois.style.display = "none";
        h5.style.display = "block";
        h5Cinco.style.display = "block";
        h5Dois.style.display = "none";
        h5Tres.style.display = "none";
        h5Quatro.style.display = "none";
        inpLogin.style.display = "block";
        inpSenha.style.display = "block";
        inpId.style.display = "none";
        inpEmail.style.display = "none";
        inpSenhaCad.style.display = "none";
        inpId.value = "";
        inpEmail.value = "";
        inpSenhaCad.value = "";

        body.style.backgroundColor = "#7e8fb3";
        div.style.backgroundImage = "url('src/img/inverno.gif')";
       
    }


});

btnFazLogin.addEventListener('click', function(){

    

    if(inpLogin.value === ""){
        alert("preencha o campo login");
        inpLogin.value = "";
        inpSenha.value = "";
    } else 
    if(inpSenha.value === ""){
        alert("preencha o campo senha");
        inpLogin.value = "";
        inpSenha.value = "";
    } else if(inpLogin.value != id || inpSenha.value != senhaCad){
        alert("usuario ou senha invalido");

    }else if(inpLogin.value == id && inpSenha.value == senhaCad){
        alert("Seja-Bem vindo " + id+ " !");
        window.location.href = "carregamento.html";
        inpLogin.value = "";
        inpSenha.value = "";
        
    }
});


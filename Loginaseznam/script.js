function login() {
    var email = document.getElementById("emailIn").value;
    var heslo = document.getElementById("passwordIn").value;

    if(email == "admin" && heslo == "admin") {
        window.location.href = "kindex.html";
    }else {
        alert("Zadali jste nesprávné přihlašovací údáje ")
    }
}
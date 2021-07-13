const validEmail = "matias@gmail.com";
const validPassword = "123456";
const validNombre = "Matias";


function login () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const nombre = document.getElementById("nombre").value;

    if (email === validEmail && validPassword === password && nombre === validNombre) {
        document.getElementById("error").innerHTML = "<span> Bienvenido al sistema </span>"
        alert("Conectado correctamente")
        
    } else {
        document.getElementById("error").innerHTML = "<span> Usuario Incorrecto </span>"
        alert("Usuario o contraseña incorrectas");
    }
};

                                                                                                                                                                                                           






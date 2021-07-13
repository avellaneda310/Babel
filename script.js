const validarEmail = 'matias@gmail.com';
const validarPassword = '123456';
const validarNombre = 'mato';

                                                                                                                                                                                                           


function login(event) {

  event.prevenDefault();

  console.info("Conectado Correctamente");

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const nombre = document.getElementById("nombre").value;

  if (validarEmail === email && validarPassword === password && validarNombre === nombre) {
    window.location.href = "loginRespuesta.html";
   
  } else {
      alert("Usuario o contraseña incorrectas")
  };
  };



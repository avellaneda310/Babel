const express = require("express");
const app = express();
const mysql = require("mysql2");
const mysqlConfig = require("./config/config");
const connection = mysql.createConnection(mysqlConfig);


connection.connect((error) =>{
    if (error){
        console.error(error);
        process.exit();
    }
    console.log("Conectado correctamente");
})

app.use(express.json());



app.get("/api/health", function(req, res){
    res.json({massage: "App de login corriendo adecuadamente"});
});


app.post("/api/users", (req, res) =>{
    const body = req.body;

    connection.query(`
    insert into \`usuarios\` (\`email\`, \`password\`, \`nombre\`)
    values ("${body.mail}", "${body.password}", "${body.nombre}");
     `,
    (error, result) => {
        if (error){
            console.error(error);
            return res.json({massage: "No pudimos crear un usuario"});
        }
        return res.json({massage: "El usuario a sido creado con exito"})
    });
    
  });

  app.post("/api/login", (req, res) =>{
      const body = req.body;
      console.log(body);
      connection.query(
          `select id, email, nombre, edad from usuarios where email = "${body.email}" and password = "${body.password}"`,
          (error, result) => {
              if (error) {
                  console.error(error);
                  return res.json({massage: "Error inesperado"});
              }
              if (result.length > 0) {
                  return res.json({massage:"Logeado exitosamente", data: result[0]});
              } else {
                  return res.json({massage: "Usuario o contraseña incorrectos"});
              }
          }

      )
  });

app.listen(3000, () =>{
    console.log("El servidor ya arranco");
});
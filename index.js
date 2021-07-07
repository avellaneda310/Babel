const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
   console.log("midelwor")
    next()   
    
});

app.get("/", (req, res) => {
    res.json({message: "app funcionando"})
});

app.listen(3000, () => console.log("Arranco el server"));

app.get("/", function (req, res) {
    res.sendFile("index.html", {
        root: __dirname + "/public"
    })
});

app.use("/", express.static(__dirname + "/public"));
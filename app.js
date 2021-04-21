const express = require("express");
const app = express();

let users = {
    nome = "sergio",
    email = "sergio@protonmail.com"
}

app.get("/", function(req, res) {
    res.send(users)
})

/*app.get("/", function(req, res){
    res.send("Olá, mundo!")
})*/

app.listen(8082, function(){
    console.log("Servidor rodando na url http://localhost:8082")
})
var express = require("express");
var app = express();
var { usuario } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get("/", function(req,res){
    const usuarios = await usuario.findAll();
console.log(usuarios);
});

app.post('/', function(req,res) {
  var resultado = usuario.create();
  res.json(resultado)
}) ;

app.listen(3000, function(){
  console.log("O servidor funcionou!");
});




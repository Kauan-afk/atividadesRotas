const express = require("express")

const app = express()

app.get('/', (require, response) =>{
    response.send("Home")
})

app.get('/cadastrar', (require, response)=>{
    response.send("cadastrar")
})

app.get('/produtos/:item/:quantidade', (require,response)=>{
    response.send("produtos: " + require.params.item + " e a quantidade é: " + require.params.quantidade)
})

app.get("/contato", (require, response) =>{
    response.send("contato")
})

app.listen(8080, ()=>{
    console.log("Servidor ativo!")
})
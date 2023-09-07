const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.sendFile('./static/menu.html',{
        root: __dirname
    })
})
app.get('/about',(req,res)=>{
    res.sendFile('./static/about.html',{
        root: __dirname
    })
})
app.get('/contactos',(req,res)=>{
    res.sendFile('./static/contactos.html',{
        root: __dirname
    })
})
app.get('/productos',(req,res)=>{
    res.sendFile('./static/productos.html',{
        root: __dirname
    })
})
app.use((req,res) => {
    res.status(404).send('No se encontro tu pagina----')
})
app.listen(3000)
console.log('Server on port ${3000}')
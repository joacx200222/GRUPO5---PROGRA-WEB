const express = require("express")
const bodyParser = require("body-parser")
const path = require("path") 

const cors = require('cors')

//const producto = require('./API/basedatos/producto.js')

const usuario = require('./API/basedatos/verificarusuario.js')
const producto = require ('./API/basedatos/producto.js')
//const dashboard = require('./API/basedatos/admin/adminProducto.js')

//const productoAdmin = require('./API/basedatos/admin/adminProducto.js')

const app = express()
const port = 3080

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

const whitelist = ["http://localhost:5173"]
app.use(cors(whitelist))

//mapear APU
//app.use('/api/productos', producto)

app.use('/api/basedatos', usuario)
app.use('/api/productos', producto)

// API admin
//app.use('/api/productos', dashboard)
//app.use('/api/productos', productoAdmin)



// Agregar el servicio de paginas web. PETICIONES LLEGAN
app.get('/', (req, res) => {   //petición de llegada con 2 parametro (req = data que estoy enviando, res = data a devover a cliente)
    res.sendFile( path.join(__dirname,'./static/index.html')) //cuando se llama a ruta
})

// Agregamos API's
app.get( '/api/usuarios', (req, res) => {
    res.json( users ) //devuelve la lista de users
})

app.listen(port, () => {
    console.log(`Server escuchando en el port::${port}`);
});
const fs = require('fs');
const productos = require('./productos/productos.json', 'utf-8')
const process = require('process');
const productosJSON = fs.readFileSync('./productos/productos.json','utf-8')
const accion = process.argv[2]

if(accion === "listar"){
    console.log(typeof productosJSON)

}else if(accion === "agregar"){
    let marca = process.argv[3]
    let categoria = process.argv[4]
    let precio = process.argv[5]

    let nuevoProducto = {
        marca,
        categoria,
        precio,
        stock : true
    }
    productos.push(nuevoProducto)

    console.log(productos)
}else{
    console.log('accion inexistente')
}
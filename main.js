const productos = [  
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },  
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },  
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, 
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },  
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }  ];

    // Parte 1
// 1.
console.log(`productos[0].nombre`);

// 2.
for (const producto of productos) {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
}
// 3.
productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});

// Parte 2
// 4.
const nombres = productos.map(producto => producto.nombre);
console.log(nombres);

// 5.
console.log("Productos de la categoría 'Ropa':");
const productosRopa = productos.filter(producto => producto.categoria === "Ropa");
productosRopa.forEach(producto => {
    console.log(`- ${producto.nombre}: $${producto.precio}`);
  });

// 6.
console.log("Productos con precio mayor a $3000:");
const productosCaros = productos.filter(producto => producto.precio > 3000);
productosCaros.forEach(producto => {
    console.log(`- ${producto.nombre}: $${producto.precio}`);
  });

// 7.
console.log("Producto Gorra");
const gorra = productos.find(producto => producto.nombre === "Gorra");
console.log(gorra);

// Parte 3
// 8 .
const hayMayores10000 = productos.some(producto => producto.precio > 10000);
console.log(hayMayores10000);

// 9 .
const todosMayores1000 = productos.every(producto => producto.precio > 1000);
console.log(todosMayores1000);

// 10 .
console.log(nombres.includes("Campera"));








// Obtener un objeto de tipo Map almacenado en localStorage
function obtenerMap(nombre) {
        const str = localStorage.getItem(nombre);
        if (!str) {
            throw new Error(`No se encontró el objeto con el nombre: ${nombre}`);
        }
        const json = JSON.parse(str);
        const map = new Map(Object.entries(json));
        return map;
}

// Devolver la lista de categorias almacenadas en el localStorage 
function  obtenerCategorias() {
    const map = obtenerMap("categorias");
    return map.values();   
}

// Devolver la lista de banners almacenados en el localStorage
function  obtenerBanners() {
    const map = obtenerMap("banners");
    return map.values();
}

//Devolver la lista de productos almacenados en el localStorage
function obtenerProductos(categoria = "todos"){
    const map = obtenerMap("Productos");
    //return map.values();
    let productos = [];
    if(categoria == null || categoria === "todos"){
        productos = map.values();       
    } else {
        productos = map.values().filter(prod => prod.categoria === categoria);
    }
    return productos;
}

// Funciones para la manipulación del carrito de compras
// Obtener el carrito de compras almacenado en sessionStorage
function obtenerCarrito() {
    const str = sessionStorage.getItem('carrito');
    const carrito = str ? JSON.parse(str) : [];
    return carrito;
}
// Mostrar los productos añadidos al carrito de compras
function mostrarCarrito() {
        const carrito = obtenerCarrito();
        const carritoContainer = document.getElementById('carrito');
        carritoContainer.innerHTML = "";
        let precio = 0;

        carrito.forEach((producto,posicion) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between mb-2';
            li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center w-100">
                    <div>
                        <h6 class="my-0">${producto.nombre} x${producto.cantidad}</h6>
                        <small>$ ${producto.precio * producto.cantidad}</small>
                    </div>
                    <a class="btn btn-danger text-decoration-none text-white" href="#" onclick="eliminarProducto(${posicion})" >
                        <i class="fas fa-times"></i>
                    </a>
                </div>`;
            carritoContainer.appendChild(li);
            precio += producto.precio * producto.cantidad; //precio = precio + producto.precio;
        });
        const totalElement = document.getElementById('total');
        if (totalElement) totalElement.textContent = precio.toFixed(2);
        //document.getElementById("contadorCarrito").textContent = carrito.length;
        const totalUnidades = carrito.reduce((total, item) => total + item.cantidad, 0);
        const spanContador = document.getElementById("contadorCarrito");
        if (spanContador) spanContador.textContent = totalUnidades;   
}

function agregarProducto(producto, actualizarCarrito = true) {
    let carrito = obtenerCarrito();
   // carrito.push(productos);
    const index = carrito.findIndex(item => item.codigo === producto.codigo);
    if (index !== -1) {
        carrito[index].cantidad = (carrito[index].cantidad || 1) + 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    //sessionStorage.setItem("contadorCarrito", carrito.length); 
    
    const totalUnidades = carrito.reduce((total, item) => total + item.cantidad, 0);
    sessionStorage.setItem("contadorCarrito", totalUnidades);

    const spanContador = document.getElementById("contadorCarrito");
    if (spanContador) spanContador.textContent = totalUnidades;

    if(actualizarCarrito === true){                  
        mostrarCarrito();
    }
}  

// Eliminar un producto del carrito de compras
function eliminarProducto(posicion) {
    let carrito = obtenerCarrito();
    carrito.splice(posicion, 1);
    // Actualizar el carrito en sessionStorage
    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    //sessionStorage.setItem("contadorCarrito", carrito.length);
    const totalUnidades = carrito.reduce((total, item) => total + item.cantidad, 0);
    sessionStorage.setItem("contadorCarrito", totalUnidades);

    const spanContador = document.getElementById("contadorCarrito");
    if (spanContador) spanContador.textContent = totalUnidades;
    
    mostrarCarrito();
}

// Vaciar el carrito de compras
function vaciarCarrito() {
   
    sessionStorage.setItem("carrito", JSON.stringify([]));
    sessionStorage.setItem("contadorCarrito", 0);
    
    const spanContador = document.getElementById("contadorCarrito");
    if (spanContador) spanContador.textContent = 0;
    mostrarCarrito();
}
//Obtener producto por código
function obtenerProductoPorCodigo(codigoProducto) {
    const productos = obtenerMap("Productos");
    const respuesta = productos.get(codigoProducto);
    if (!respuesta) {
        throw new Error(`No se encontró el producto con el código: ${codigoProducto}`);
    }
    return respuesta;
}
function cargarFragmento(idElemento, ruta, callback = null) {
    fetch(ruta)
        .then(response => response.text())
        .then(html => {
            document.getElementById(idElemento).innerHTML = html;
            if (callback) callback(); // Ejecuta el callback si se da
        });
}
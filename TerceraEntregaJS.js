class Producto{                                                         //Declaro la clase constructora de productos
    constructor(id, nombre, precio, medida, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.medida = medida;
        this.imagen = imagen;

    }
}

let catalogo=[];                                 //Declaro variables y arrays vacios
let carrito=[];
let totalCarrito = 0;
let medida = "";
let totalProductos = 0;



catalogo.push( new Producto(101,"Escoba",290," ", "./img/escoba.jpg"));                 //Agrego productos al catalogo
catalogo.push( new Producto(102,"Barrendero",450," ","./img/barrendero.jpg"));
catalogo.push( new Producto(201,"Anden 40cm",500,"40","./img/anden.jpg"));
catalogo.push( new Producto(202,"Anden 60cm",710,"60","./img/anden.jpg"));
catalogo.push( new Producto(203,"Anden 80cm",950,"80","./img/anden.jpg"));
catalogo.push( new Producto(204,"Anden 1m",1150,"100","./img/anden.jpg"));
catalogo.push( new Producto(301,"Lava-camion",400," ","./img/lavacamion.jpg"));
catalogo.push( new Producto(401,"Pincel chico",120,"chico","./img/pincel.jpg"));
catalogo.push( new Producto(402,"Pincel grande",190,"grande","./img/pincel.jpg"));

console.log(catalogo);


let contenedorProductos = document.getElementById("contenedorProductos");        //Capturo el div contenedor padre

catalogo.forEach((producto)=>{                                     //Genero  un div por cada producto y lo agrego al html
    let contenido = document.createElement("div")
    contenido.classList = "card"
    contenido.innerHTML = `
    <img src="${producto.imagen}" class="imgCard">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
    `;

    contenedorProductos.append(contenido);

    let comprar = document.createElement("button");            //Creo el boton para comprar y pushear productos al carrito
    comprar.innerText = "Comprar";

    contenido.append(comprar);

    comprar.addEventListener("click", ()=>{
        carrito.push(producto); 
        totalCarrito = totalCarrito + producto.precio;
    })
})



console.log(carrito);                                            //Muestro el array del carrito



let verCarrito = document.getElementById("verCarrito");         //Inserto el carrito
verCarrito.addEventListener("click",()=>{
    const modalHeader = document.createElement("div");
    modalHeader.innerHTML = `
        <h1>CARRITO</h1>
    `;
    contenedorCarrito.append(modalHeader);                              
    
    carrito.forEach((producto)=>{                               //Muestro los productos en el carrito
        let carritoContent = document.createElement("div");
        carritoContent.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
        `;
        contenedorCarrito.append(carritoContent);
    })
    const carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJSON);              //Guardo el carrito convertido a string por JSON en el local storage
    const totalCarritoJSON = JSON.stringify(totalCarrito);
    localStorage.setItem("subtotal", totalCarritoJSON);            //Guardo el subtotal convertido a string por JSON en el local storage

    const subtotalEnLolcalStorage = localStorage.getItem("subtotal");
    const subtotalObjeto = JSON.parse(subtotalEnLolcalStorage);
    contenedorCarrito.append("Subtotal: $"+subtotalObjeto);        //Muestro el total del carrito
    

/*
    let opcionDescuento = document.createElement("div");        //Inserto el input del descuento
    opcionDescuento.innerHTML = `
    <h3>Ingrese su código de descuento</h3>
    <input id="descuento" name="descuento" type="text" placeholder="Ingrese codigo de descuento" class="form-control">
    <button id="aplicarDescuento" type="enviar">ENVIAR</button>
    `;
    contenedorCarrito.append(opcionDescuento);
})

let descuento = document.getElementById("descuento");
let descuentoAplicado = document.getElementById("aplicarDescuento");
descuentoAplicado.addEventListener("click",()=>{
    localStorage.setItem("descuento", descuento)
    */
})

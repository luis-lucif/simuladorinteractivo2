alert ("Bienvenido a Arma tu primer Setup, registrese para continuar");

function registrarse(){
    let usuario = prompt("Ingrese su usuario");
    let password = prompt("Ingrese su contraseña");
    alert("Hola " + usuario + " gracias por registrarse");
}
registrarse();

// TECLADOS
let redDragon = 11590
let hyperX= 8990
let razer = 10000

// PRECIOS ULTIMOS INGRES0S
let tomioka = 15000
let sasuke = 14990
let eleven = 11000

// PRECIOS OFERTAS
let daenerys = 10500 
let luffy = 11050
let harry = 8500

//VALORES SUBTOTALES Y TOTALES

let subtotal = 0;
let valorTotal = 0;

//FUNCIONES
function sumarProductos (producto) {
  subtotal = producto + subtotal  
 };
 function calcularTotal (total) {
  valorTotal = total ;
 };
 function cuotificar (cuotas) {
    return subtotal / cuotas;
  };

 let comprar = true;
 let carritoFinalizado = false;

 let categorias = prompt (
    "Que estas buscando? \n 1-Teclados \n 2-Mouse \n 3-Joystick"
);

switch (categorias) {
    case "1":
        alert("Teclados");
        while (comprar) {
 
            let producto = prompt("Ingrese la marca del teclado:\n 1-redDragon\n 2-hyperX\n 3-razer \n 4-FINALIZAR COMPRA");
           
            if (producto === "4") {
              calcularTotal (subtotal);
              alert("El valor total de la compra es de $" + subtotal);
              comprar = false;
              carritoFinalizado = true;
            }
            else if (producto == "1") {
              sumarProductos (redDragon);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("teclado redDragon fue agregado al carrito");
            }
            else if (producto == "2") {
              sumarProductos (hyperX);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("teclado hyperX fue agregado al carrito");
            }
            else if (producto === "3") {
              sumarProductos (razer);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("teclado razer fue agregado al carrito");
            }
           }
        
        break;

        case "2":
        alert("Seleccionaste Ultimos Ingresos");
        while (comprar) {
 
            let producto = prompt("Ingrese el nombre de la figura que desea agregar al carrito:\n 1-Sasuke Diorama\n 2-Eleven Stranger things FUNKO\n 3-Tomioka Diorama Demon Slayer \n 4-FINALIZAR COMPRA");
           
            if (producto === "4") {
              calcularTotal (subtotal);
              alert("El valor total de la compra es de $" + valorTotal +".");
              comprar = false;
              carritoFinalizado = true;
            }
            else if (producto == "1") {
              sumarProductos (sasuke);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("Figura sasuke fue agregada al carrito");
            }
            else if (producto == "2") {
              sumarProductos (eleven);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("Figura eleven fue agregada al carrito");
            }
            else if (producto == "3") {
              sumarProductos (tomioka);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("Figura tomioka fue agregada al carrito");
            }
           }
        break;  

        case "3":
        alert("Seleccionaste Ofertas de la semana, elige cual agregar al carrito");
        while (comprar) {
 
            let producto = prompt("Ingrese el nombre de la figura que desea agregar al carrito:\n 1-Daenerys Targaryen FUNKO \n 2-Luffy One Piece \n 3-Harry Potter Funko \n 4-FINALIZAR COMPRA");
           
            if (producto === "4") {
              calcularTotal (subtotal);
              alert("El valor total de la compra es de $" + subtotal);
              comprar = false;
              carritoFinalizado = true;
            }
            else if (producto == "1") {
              sumarProductos (daenerys);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("Figura Daenerys Targaryen fue agregada al carrito");
            }
            else if (producto == "2") {
              sumarProductos (luffy);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("Figura Luffy fue agregada al carrito");
            }
            else if (producto === "3") {
              sumarProductos (harry);
              console.log("Producto añadido: "+producto+ ". Subtotal = $"+subtotal);
              alert("Figura Harry Potter fue agregada al carrito");
            }
           }
        break;

    default:
        alert("Opcion no valida");
        break;
}
//METODO DE PAGO
if (carritoFinalizado) {

  let formaPago = prompt("Seleccione como desea abonar su compra, usando la palabra correspondiente: \n MERCADOPAGO \n TRANSFERENCIA \n CREDITO");
  while (formaPago !== "MERCADOPAGO" && formaPago !== "TRANSFERENCIA" && formaPago !== "CREDITO") {
    formaPago = prompt("Ingrese una forma de pago válida:\nMERCADOPAGO\nTRANSFERENCIA\nCREDITO");
  }
  
  switch (formaPago) {
    case "MERCADOPAGO":
    alert("Continue la operacion desde la app abonando un total de: $"+valorTotal+".");  
    break;  
    case "TRANSFERENCIA":
    alert("Se debitaran $"+valorTotal+" de su cuenta bancaria.");
    break;
    case "CREDITO":
    let cuotas = 0;
    let cuotasAprobado = true;
    cuotas = parseInt(prompt("Elija cantidad de cuotas: \n1\n3\n6\n12"));
    while (cuotasAprobado) {
    if (cuotas === 1 || cuotas === 3 || cuotas === 6 || cuotas === 12 ) {
      alert("Su pago será de "+cuotas+" cuotas de $"+cuotificar(cuotas)+"." );
      cuotasAprobado= false;
    }
    else {
      cuotas = parseInt(prompt("Ingrese un número de cuotas válido: 1, 3, 6 o 12 cuotas."));
    }
    let creditCard = prompt("Ingrese número de tarjeta de crédito");
    alert("Su tarjeta "+creditCard+" ha sido aprobada. Muchas gracias por su compra!");
  }
    break;
  }
  let envio = prompt("Indique su direccion para el envio");
  alert("Su envio ha sido programado para mañana en el horario de 9 am a 2 pm a la direccion de " + envio);
  }







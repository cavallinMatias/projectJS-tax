let bienvenida = prompt("Ingrese su nombre a continuación: ")
alert("Bienvenido/a a SUPERIVA " + bienvenida)

class superIVA{
    constructor(precio, precio2){
    this.precio = precio
    this.precio2 = precio2;
}

calcularIVA(){
    this.precio2 = this.precio * 21 / 100
    console.log("Considerando un IVA de " + this.precio2)
}
totalIVA(){
    this.precio = this.precio2 + this.precio
    console.log("Usted pagara un total de " + this.precio)
}

}

let producto1 = new superIVA (parseInt(prompt("Establezca el precio de su producto/servicio")), " ");

console.log(producto1)
producto1.calcularIVA()
producto1.totalIVA()

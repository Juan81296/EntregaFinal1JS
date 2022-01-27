alert("Bienvenido a tu simulador de prestamos online, presione ENTER para continuar")
class prestamos{
    constructor(dni,monto,cuotas,jubilado){
        this.dni = dni;
        this.monto = monto;
        this.cuotas = cuotas;
        this.jubilado = jubilado;
    }

    esJubilado(){
        if(this.jubilado == "si"){
            let descuento = this.monto * 0.10;
            return descuento;
        }
        return 0;
    }
    intereses(){
        if (this.cuotas == 6){
            return this.monto * 0.20;
        }
        else if(this.cuotas == 12){
            return this.monto * 0.40;
        }
        else if(this.cuotas == 24){
            return this.monto * 0.80;
        }
        else if(this.cuotas == 36){
            return this.monto * 0.99;
        }
    }

}

let listaDeUsuarios = [];

for ( let i=0 ; i <5 ; i++){

    let dni = prompt("Ingrese su DNI");
    let monto = prompt("Ingrese el monto de su prestamo");
    let cuotas = prompt("Ingrese la cantidad de cuotas, 6, 12, 24 o 36");
    let jubilado = prompt("Es usted jubilado/a ? Ingrese si o no");

    listaDeUsuarios.push(new prestamos(dni,monto,cuotas, jubilado));
    break;


}

for ( let usuario of listaDeUsuarios){

    if(usuario.esJubilado()){
         alert("Presione ENTER para conocer el monto total a devolver.")
         alert(parseInt(usuario.monto) +parseInt(usuario.intereses()) - parseInt(usuario.esJubilado()));
    }
    else{
        alert("Presione ENTER para conocer el monto total a devolver.")
        alert(parseInt(usuario.monto) + parseInt(usuario.intereses()));
    }

}

    function detallesPrestamo(){

    let monto = document.getElementById("monto");
    
    let nuevoLi = document.createElement("li");

    nuevoLi.innerHTML = `${monto.value}`;
    
    lista.appendChild( nuevoLi);
    

}



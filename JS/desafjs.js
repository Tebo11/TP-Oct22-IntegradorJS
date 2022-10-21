var esteban="hola"
console.log(esteban)

function calculoimporte (){
    let importe=0
    let cantidad=document.getElementById("cantidad").value
    let categoria=document.getElementById("Categoría").value
    console.log(categoria)
    console.log(cantidad)
    
    if (cantidad>0) {
        switch (categoria) {
            case "Estudiante":
                importe=cantidad*200*0.2
                break;
            case "Trainee":
                importe=cantidad*200*0.5
                break;
            case "Junior":
                importe=cantidad*200*0.85
                break;
            default:
                break;
        }
    } else {
        // ingrese cantidad
        console.log(esteban)
    }
    console.log(importe)
    return document.getElementById("importeapagar").innerHTML=`Total a pagar: $ ${importe}`
}

function borrado(){
    console.log(esteban)
    document.getElementById("cantidad").value=""
    document.getElementById("Categoría").value="Estudiante"
    document.getElementById("correo").value=""
    document.getElementById("nombre").value=""
    document.getElementById("apellido").value=""
    document.getElementById("importeapagar").innerHTML=`Total a pagar: $ `
}


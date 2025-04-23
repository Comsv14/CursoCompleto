let empleados = [];

function Empleado(legajo, nombre, apellidos, fechaNacimiento, cargo){
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.cargo = cargo;
}
function aniadirEmpleado(){
    this.legajo = extraerDato("idLegajo");
    this.nombre = extraerDato("idNombre");
    this.apellidos = extraerDato("idApellidos");
    this.fechaNacimiento = extraerDato("idFechaNacimiento");
    this.cargo = extraerDato("idCargo");

    let empleado = new Empleado(legajo, nombre, apellidos, fechaNacimiento, cargo);
    empleados.push(empleado);

    let texto=("Empleado añadido correctamente");
    let elementoSalida = document.getElementById("mensajeAniadido");
    elementoSalida.innerHTML = texto;

}
function extraerDato(elemento){
    let miElemento = document.getElementById(elemento);
    let miTexto = miElemento.value;

    return miTexto;
}


function mostrarEmpleados(){
    let nempleado = 1;
    let lista = "";
    
    empleados.forEach(empleado => {
    let glegajo = empleado.legajo;
    let gnombre = empleado.nombre;
    let gapellidos = empleado.apellidos;
    let gnacimiento = empleado.fechaNacimiento;
    let gcargo = empleado.cargo;
    
    lista += "<h2>Empleado nº " + nempleado + "</h2> Legajo: " + glegajo + "<br> Nombre: " + gnombre + "<br> Apellidos: " + gapellidos + "<br> Fecha de Nacimiento: " + gnacimiento + "<br> Cargo: " + gcargo + "<br><br>";
    nempleado++;
    });
    
    let elementoSalida = document.getElementById("listaEmpleados");
    elementoSalida.innerHTML = lista;
    }

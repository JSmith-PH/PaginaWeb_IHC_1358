function Saludar() {
    var nombre=document.getElementById('txtNombre').value;
    alert("Hola "+nombre+" Bienvenido!!");
}

function Resetear() {
    var cajadetexto = document.getElementById('txtNombre');
    cajadetexto.value="";
    cajadetexto.focus();
}
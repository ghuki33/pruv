var inputs = document.getElementsByClassName('formulario-content'); //FORMULARIO
for(var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if (this.value.length >= 1){
            this.nextElementSibling.classList.add('fijar');
        }else{
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}
//////////////////////////////////////////////////
function validar(){
    var nombre, correo, mensaje, expresion;
    //INPUTS
    nombre = document.getElementById('user').value;
    correo = document.getElementById('email').value;
    mensaje = document.getElementById('mensaje').value;

    if(nombre == ""){
        alert('El campo de nombre está vacío.');
    }
}
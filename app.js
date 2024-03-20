const boton = document.querySelector('button')
const color = document.getElementById('color')


function generarColorHexAleatorio(){  
    let digitos='0123456789ABCDEF';
    let colorHex='#';

    for(let i = 0; i < 6;  i++){
        let indicieAleatorio=Math.floor(Math.random()* 16); //se multiplica por 16 por los digitos de la variable let digitos.// 
        colorHex += digitos[indicieAleatorio]
       

    }

    return colorHex;
}




boton.addEventListener('click', function(){
    let colorAleatorio = generarColorHexAleatorio();
    color.textContent= colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio
}) 
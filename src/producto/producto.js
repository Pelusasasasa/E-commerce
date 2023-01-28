
const valorar = document.querySelector('.valorar ul');

const descripcion = document.querySelector('.descripcion');
const valoracion = document.querySelector('.valoracion');

valorar.addEventListener('click',e=>{
    let seleccionado = document.querySelector('.seleccionado');
    seleccionado.classList.remove('seleccionado')
    seleccionado = e.target;
    seleccionado.classList.add('seleccionado');

    console.log(seleccionado.innerHTML)

    if (seleccionado.innerHTML === "Descripcion") {
        descripcion.classList.remove('none');
        valoracion.classList.add('none');
    }else{
        descripcion.classList.add('none');
        valoracion.classList.remove('none');
    }
});
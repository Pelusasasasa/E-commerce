let productos;
const codigoTraido = location.search.slice(1);

window.addEventListener('load',async e=>{
    await fetch('../productos.json').then(async (response)=>  productos = (await response.json()));
    let producto = productos.find(producto => producto.codigo === codigoTraido);
    llenarinputs(producto);
});

const valorar = document.querySelector('.valorar ul');

const descripcion = document.querySelector('.descripcion');
const informacionAdicional = document.querySelector('.informacionAdicional');
const valoracion = document.querySelector('.valoracion');

//Valores de los prudocutos
const descripcionProducto = document.getElementById('descripcionProducto');
const img = document.getElementById('img');
const codigo = document.getElementById('codigo');
const precio = document.getElementById('precio');


valorar.addEventListener('click',e=>{
    let seleccionado = document.querySelector('.seleccionado');
    seleccionado.classList.remove('seleccionado')
    seleccionado = e.target;
    seleccionado.classList.add('seleccionado');

    if (seleccionado.innerHTML === "Descripcion") {
        descripcion.classList.remove('none');
        informacionAdicional.classList.add('none');
        valoracion.classList.add('none');
    }else if(seleccionado.innerHTML === "Informacion Adicional"){
        
    }else{
        descripcion.classList.add('none');
        informacionAdicional.classList.add('none');
        valoracion.classList.remove('none');
    }
});

const llenarinputs = async(producto)=>{
    img.src = producto.imagen;
    descripcionProducto.innerHTML = producto.descripcion;
    codigo.innerHTML = producto.codigo;
    precio.innerHTML = producto.precio.toFixed(2);
    descripcion.children[1].innerHTML = producto.observaciones;
}
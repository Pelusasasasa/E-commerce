const tarjetas = document.querySelector('.tarjetas');

tarjetas.addEventListener('click',e=>{
    if (e.target.nodeName === "BUTTON") {
        location.href = `producto/producto.html?${e.target.id}`
    }
});
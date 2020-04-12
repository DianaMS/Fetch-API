const boton = document.getElementById('boton');
const contenedor = document.getElementById('contenedor');
const tabla = document.querySelector('.tabla');
tabla.classList.add('hide');
boton.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
    .then( data => data.json())
    .then( data =>{
        tabla.classList.remove('hide');
        contenedor.innerHTML += `
        <tr class="elemento">
            <th class="fila"><img class=" imagen" src=${data.results[0].picture.medium}></th>
            <th class="fila">${data.results[0].name.last}</th> 
            <th class="fila">${data.results[0].email}</th>   
            <th class="fila">${data.results[0].location.state}</th> 
        </tr>      
        `;
    })
});

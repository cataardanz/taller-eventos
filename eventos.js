document.addEventListener('DOMContentLoaded', (event) => {
    const div = document.getElementById('div-bttn');
    const button = div.querySelector('button'); // seleccionamos el button para luego trabajar con addEventL

    div.addEventListener('click', () => {
        alert('¡Hola! Soy el div');
    });

    button.addEventListener('click', (event) => {
        event.stopPropagation(); // Detiene la propagación del evento click
    });
});
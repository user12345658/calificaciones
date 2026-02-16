document.getElementById('btnCalcular').addEventListener('click', () => {

    const nombre = document.getElementById('nombre').value;
    const unidad1 = document.getElementById('unidad1').value;
    const unidad2 = document.getElementById('unidad2').value;
    const unidad3 = document.getElementById('unidad3').value;

    if (!nombre || !unidad1 || !unidad2 || !unidad3) {
        alert('Por favor completa todos los campos');
        return;
    }

    fetch('/calcular-promedio', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            nombre,
            unidad1,
            unidad2,
            unidad3
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('promedio').value = data.promedio.toFixed(2);
        document.getElementById('estatus').value = data.estatus;
    })
    .catch(err => console.error('Error:', err));

});

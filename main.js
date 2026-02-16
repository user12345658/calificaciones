// Espera a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {

    const btn = document.getElementById('btnCalcular');

    btn.addEventListener('click', () => {

        // Obtener valores
        const nombre = document.getElementById('nombre').value.trim();
        const unidad1 = parseFloat(document.getElementById('unidad1').value);
        const unidad2 = parseFloat(document.getElementById('unidad2').value);
        const unidad3 = parseFloat(document.getElementById('unidad3').value);

        // Validación
        if (!nombre || isNaN(unidad1) || isNaN(unidad2) || isNaN(unidad3)) {
            alert('Por favor completa todos los campos correctamente');
            return;
        }

        // Calcular promedio (sin servidor)
        const promedio = (unidad1 + unidad2 + unidad3) / 3;

        // Determinar estatus
        let estatus = '';
        if (promedio >= 6) {
            estatus = 'Aprobado';
        } else {
            estatus = 'Reprobado';
        }

        // Mostrar resultados en los inputs
        document.getElementById('promedio').value = promedio.toFixed(2);
        document.getElementById('estatus').value = estatus;

    });

});

document.addEventListener('DOMContentLoaded', () => {

  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }


  const precios = {
    Nutricion: { semestre: 15000, anio: 28000, total: 112000 },
    Negocios: { semestre: 18000, anio: 34000, total: 136000 },
    Programacion: { semestre: 20000, anio: 38000, total: 152000 },
    Medicina: { semestre: 25000, anio: 48000, total: 192000 },
    Leyes: { semestre: 17000, anio: 32000, total: 128000 },
    Administracion: { semestre: 16000, anio: 30000, total: 120000 }
  };

  const carreraSelect = document.getElementById('carrera-select');
  const planSelect = document.getElementById('plan-select');
  const becaInput = document.getElementById('beca-input');
  const calcularBtn = document.getElementById('calcular-btn');
  const resultadoCalculo = document.getElementById('resultado-calculo');

  if (calcularBtn) {
    calcularBtn.addEventListener('click', () => {
      const carrera = carreraSelect.value;
      const plan = planSelect.value;
      const beca = parseFloat(becaInput.value) || 0;

      if (!carrera || !plan) {
        resultadoCalculo.textContent = 'Por favor selecciona carrera y plan.';
        resultadoCalculo.style.color = 'red';
        return;
      }
      if (beca < 0 || beca > 100) {
        resultadoCalculo.textContent = 'Por favor ingresa un porcentaje de beca válido (0-100).';
        resultadoCalculo.style.color = 'red';
        return;
      }

      const precioBase = precios[carrera]?.[plan];
      if (precioBase === undefined) {
        resultadoCalculo.textContent = 'No hay datos para la carrera o plan seleccionado.';
        resultadoCalculo.style.color = 'red';
        return;
      }

      const precioFinal = precioBase * (1 - beca / 100);
      resultadoCalculo.textContent = `El precio con beca es: $${precioFinal.toLocaleString('es-MX')}`;
      resultadoCalculo.style.color = 'var(--azul-medio)';
    });
  }


  const form = document.getElementById('cita-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const telefono = form.telefono.value.trim();
      const telefonoPattern = /^[0-9]{10}$/;
      if (!telefonoPattern.test(telefono)) {
        alert('Por favor ingresa un número de teléfono válido de 10 dígitos.');
        form.telefono.focus();
        return;
      }

      if (!form.checkValidity()) {
        alert('Por favor completa todos los campos requeridos correctamente.');
        return;
      }

      alert('¡Cita agendada con éxito! Nos pondremos en contacto contigo pronto.');
      form.reset();
    });
  }
});


window.addEventListener('load', () => {
  const animacionLibro = document.getElementById('animacion-libro');
  const contenidoPrincipal = document.getElementById('contenido-principal');

  if (animacionLibro && contenidoPrincipal) {
    setTimeout(() => {
      animacionLibro.style.display = 'none';
      contenidoPrincipal.style.display = 'block';
    }, 3000);
  }
});



document.getElementById('quiz-form').addEventListener('submit', function(event){
  event.preventDefault();

  const area = document.getElementById('area').value;
  const horario = document.getElementById('horario').value;

  let resultado = '';

  if(area === 'salud') {
    if(horario === 'manana') {
      resultado = `
        <h3>Te recomendamos:</h3>
        <ul>
          <li><strong>Medicina</strong> - Lunes a sábado, 7:00 - 13:00</li>
          <li><strong>Nutrición</strong> - Lunes a viernes, 8:00 - 14:00</li>
        </ul>`;
    } else {
      resultado = `
        <h3>Te recomendamos:</h3>
        <ul>
          <li><strong>Nutrición</strong> - Lunes a viernes, 8:00 - 14:00</li>
        </ul>`;
    }
  } else if(area === 'negocios') {
    resultado = `
      <h3>Te recomendamos:</h3>
      <ul>
        <li><strong>Negocios Internacionales</strong> - Lunes a viernes, 9:00 - 15:00</li>
        <li><strong>Administración de Empresas</strong> - Lunes a viernes, 8:00 - 14:00</li>
      </ul>`;
  } else if(area === 'tecnologia') {
    resultado = `
      <h3>Te recomendamos:</h3>
      <ul>
        <li><strong>Programación</strong> - Lunes a viernes, 14:00 - 20:00</li>
      </ul>`;
  } else if(area === 'derecho') {
    resultado = `
      <h3>Te recomendamos:</h3>
      <ul>
        <li><strong>Leyes</strong> - Lunes a viernes, 10:00 - 16:00</li>
      </ul>`;
  } else {
    resultado = `<p>Por favor, selecciona un área para ayudarte.</p>`;
  }

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = resultado;
  resultDiv.classList.remove('hidden');
});



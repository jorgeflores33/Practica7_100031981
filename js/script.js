'use strict';

/* a) Variables y salida: reemplaza los dos datos pendientes antes de entregar. */
const alumno = {
  nombre: 'Jorge Alejandro Flores Juárez',
  matricula: 'PENDIENTE',
  carrera: 'Licenciatura en Sistemas Computacionales',
  semestre: 'PENDIENTE'
};

document.getElementById('btnDatos').addEventListener('click', function () {
  const { nombre, matricula, carrera, semestre } = alumno;
  document.getElementById('parDatos').textContent =
    `Nombre: ${nombre}\nMatrícula: ${matricula}\nCarrera: ${carrera}\nSemestre: ${semestre}`;
  console.log('Datos del alumno:', alumno);
});

/* b) Calificaciones: validación, ciclo for, promedio y estructura if/else. */
function calcularPromedio(calificaciones) {
  let suma = 0;
  for (let i = 0; i < calificaciones.length; i++) {
    suma += calificaciones[i];
  }
  console.log('Suma de parciales:', suma);
  return suma / calificaciones.length;
}

document.getElementById('formCalc').addEventListener('submit', function (evento) {
  evento.preventDefault();
  const salida = document.getElementById('parCalc');
  const calificaciones = [];
  for (let i = 1; i <= 3; i++) {
    const campo = document.getElementById(`p${i}`);
    const valor = Number(campo.value);
    if (campo.value.trim() === '' || !Number.isFinite(valor) || valor < 0 || valor > 100) {
      salida.textContent = 'Ingresa los tres parciales con números entre 0 y 100.';
      salida.style.color = '#ac2b39';
      campo.focus();
      return;
    }
    calificaciones.push(valor);
  }
  console.log('Calificaciones capturadas:', calificaciones);
  const promedio = calcularPromedio(calificaciones);
  console.log('Promedio calculado:', promedio);
  if (promedio >= 70) {
    salida.textContent = `Promedio: ${promedio.toFixed(2)} — Aprobado`;
    salida.style.color = '#146c43';
  } else {
    salida.textContent = `Promedio: ${promedio.toFixed(2)} — Reprobado`;
    salida.style.color = '#ac2b39';
  }
});

/* c) Lista dinámica: creación segura de elementos y limpieza. */
const lista = document.getElementById('miLista');
const inputItem = document.getElementById('inputItem');
const estadoLista = document.getElementById('estadoLista');

document.getElementById('formLista').addEventListener('submit', function (evento) {
  evento.preventDefault();
  const valor = inputItem.value.trim();
  if (valor === '') {
    estadoLista.textContent = 'Escribe un elemento antes de agregarlo.';
    inputItem.focus();
    return;
  }
  const elemento = document.createElement('li');
  elemento.className = 'list-group-item';
  elemento.textContent = valor;
  lista.appendChild(elemento);
  estadoLista.textContent = `Elementos en la lista: ${lista.children.length}`;
  inputItem.value = '';
  inputItem.focus();
  console.log('Elemento agregado:', valor);
});

document.getElementById('btnLimpiar').addEventListener('click', function () {
  lista.replaceChildren();
  estadoLista.textContent = 'La lista está vacía.';
  console.log('Lista limpiada.');
});

/* d) Cambio de estilos: función reutilizable y eventos. */
function cambiarFondo(color) {
  document.getElementById('sec-estilos').style.backgroundColor = color;
  console.log('Color de fondo:', color);
}

const botonesColor = document.querySelectorAll('[data-color]');
botonesColor.forEach(function (boton) {
  boton.addEventListener('click', function () {
    cambiarFondo(boton.dataset.color);
    botonesColor.forEach(function (otro) {
      otro.setAttribute('aria-pressed', String(otro === boton));
    });
    document.getElementById('estadoColor').textContent =
      boton.textContent === 'Restaurar' ? 'Fondo original.' : `Fondo seleccionado: ${boton.textContent}.`;
  });
});

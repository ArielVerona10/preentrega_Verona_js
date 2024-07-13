const nota = Number(prompt("Ingrese su primera nota"))
const nota2 = Number(prompt("Ingrese su segunda nota"))
const promedio = (nota + nota2) / 2

if (promedio >= 70) {
    alert("Aprobado")
} else if (promedio >= 40) {
    alert("Necesita recuperar")
} else {
    alert("Desaprobado")
}

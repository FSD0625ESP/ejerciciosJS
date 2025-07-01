# Ejercicio 1: Estructuras Condicionales (if-else)

## Enunciado

En este ejercicio, practicarás el uso de estructuras condicionales `if`, `else if` y `else` para tomar decisiones en tu código según diferentes condiciones.

### Instrucciones:

1. Crea una función llamada `calificarNota` que reciba una puntuación numérica (0-100) y devuelva una calificación según la siguiente escala:

   - 90-100: "Sobresaliente"
   - 80-89: "Notable"
   - 70-79: "Bien"
   - 60-69: "Suficiente"
   - 0-59: "Insuficiente"
   - Si la nota está fuera del rango 0-100, devuelve "Nota inválida"

2. Crea una función llamada `determinarDiaSemana` que reciba un número del 1 al 7 y devuelva el nombre del día de la semana correspondiente (1 para "Lunes", 2 para "Martes", etc.). Si el número está fuera de rango, devuelve "Número inválido".

3. Crea una función llamada `puedeConducir` que reciba la edad de una persona y un booleano que indique si tiene licencia de conducir. La función debe devolver:
   - "Puede conducir" si la persona tiene al menos 18 años y tiene licencia.
   - "Necesita licencia" si la persona tiene al menos 18 años pero no tiene licencia.
   - "Demasiado joven" si la persona es menor de 18 años.

## Código

```javascript
// Escribe tu código debajo de esta línea
// INICIO

// Tu código aquí

// FIN
```

## Comprobación

Para comprobar tu solución, abre el archivo `01-if-else.html` en tu navegador y revisa la consola para ver si has pasado todas las pruebas.

## Resultado esperado

Al ejecutar las pruebas, deberías ver en la consola:

```
✓ La función calificarNota asigna correctamente las calificaciones
✓ La función determinarDiaSemana devuelve correctamente el día de la semana
✓ La función puedeConducir evalúa correctamente si una persona puede conducir
```

## Pistas

- Utiliza estructuras `if`, `else if` y `else` para evaluar las diferentes condiciones.
- Recuerda que el orden de las condiciones es importante. Las condiciones se evalúan de arriba a abajo.
- Para comprobar múltiples condiciones, puedes usar operadores lógicos como `&&` (AND) y `||` (OR).
- Asegúrate de que tus funciones devuelvan los valores exactos que se especifican en las instrucciones.

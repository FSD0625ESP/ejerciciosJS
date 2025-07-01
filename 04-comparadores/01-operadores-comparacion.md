# Ejercicio 1: Operadores de Comparación

## Enunciado

En este ejercicio, practicarás el uso de operadores de comparación en JavaScript para evaluar condiciones y devolver valores booleanos.

### Instrucciones:

1. Crea una función llamada `esMayor` que reciba dos números como parámetros y devuelva `true` si el primer número es mayor que el segundo, o `false` en caso contrario.
2. Crea una función llamada `esIgual` que reciba dos valores como parámetros y devuelva `true` si son exactamente iguales (mismo valor y mismo tipo), o `false` en caso contrario.
3. Crea una función llamada `esIgualValor` que reciba dos valores como parámetros y devuelva `true` si tienen el mismo valor (independientemente del tipo), o `false` en caso contrario.
4. Crea una función llamada `estaEnRango` que reciba tres parámetros: un valor, un mínimo y un máximo. La función debe devolver `true` si el valor está entre el mínimo y el máximo (inclusive), o `false` en caso contrario.

## Código

```javascript
// Escribe tu código debajo de esta línea
// INICIO

// Tu código aquí

// FIN
```

## Comprobación

Para comprobar tu solución, abre el archivo `01-operadores-comparacion.html` en tu navegador y revisa la consola para ver si has pasado todas las pruebas.

## Resultado esperado

Al ejecutar las pruebas, deberías ver en la consola:

```
✓ La función esMayor compara correctamente si un número es mayor que otro
✓ La función esIgual compara correctamente si dos valores son exactamente iguales
✓ La función esIgualValor compara correctamente si dos valores tienen el mismo valor
✓ La función estaEnRango comprueba correctamente si un valor está dentro de un rango
```

## Pistas

- Para comparar si un valor es mayor que otro, utiliza el operador `>`.
- Para comparar si dos valores son exactamente iguales (mismo valor y tipo), utiliza el operador `===`.
- Para comparar si dos valores tienen el mismo valor (independientemente del tipo), utiliza el operador `==`.
- Para comprobar si un valor está en un rango, puedes usar la expresión `valor >= minimo && valor <= maximo`.

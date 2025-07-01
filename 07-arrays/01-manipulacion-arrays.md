# Ejercicio 1: Manipulación de Arrays

## Enunciado

En este ejercicio, practicarás la manipulación de arrays en JavaScript utilizando diferentes métodos y técnicas.

### Instrucciones:

1. Crea una función llamada `obtenerPrimeroYUltimo` que reciba un array como parámetro y devuelva un nuevo array que contenga solo el primer y último elemento del array original.

2. Crea una función llamada `eliminarDuplicados` que reciba un array como parámetro y devuelva un nuevo array sin elementos duplicados.

3. Crea una función llamada `filtrarPorLongitud` que reciba un array de strings y un número como parámetros, y devuelva un nuevo array que contenga solo los strings cuya longitud sea mayor o igual al número proporcionado.

4. Crea una función llamada `sumarArrays` que reciba dos arrays de números de la misma longitud y devuelva un nuevo array donde cada elemento sea la suma de los elementos correspondientes de los arrays de entrada.

## Código

```javascript
// Escribe tu código debajo de esta línea
// INICIO

// Tu código aquí

// FIN
```

## Comprobación

Para comprobar tu solución, abre el archivo `01-manipulacion-arrays.html` en tu navegador y revisa la consola para ver si has pasado todas las pruebas.

## Resultado esperado

Al ejecutar las pruebas, deberías ver en la consola:

```
✓ La función obtenerPrimeroYUltimo devuelve correctamente el primer y último elemento
✓ La función eliminarDuplicados elimina correctamente los elementos duplicados
✓ La función filtrarPorLongitud filtra correctamente los strings por longitud
✓ La función sumarArrays suma correctamente los elementos correspondientes
```

## Pistas

- Para obtener el primer elemento de un array, puedes usar `array[0]`.
- Para obtener el último elemento de un array, puedes usar `array[array.length - 1]`.
- Para eliminar duplicados, puedes usar un `Set` o el método `filter()` junto con `indexOf()`.
- Para filtrar elementos de un array basándote en una condición, puedes usar el método `filter()`.
- Para crear un nuevo array basado en elementos de otros arrays, puedes usar el método `map()`.

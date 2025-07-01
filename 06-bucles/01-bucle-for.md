# Ejercicio 1: Bucles For

## Enunciado

En este ejercicio, practicarás el uso de bucles `for` para repetir operaciones y procesar datos de manera eficiente.

### Instrucciones:

1. Crea una función llamada `sumarNumeros` que reciba un número entero positivo `n` como parámetro y devuelva la suma de todos los números desde 1 hasta `n` (inclusive).

2. Crea una función llamada `contarPares` que reciba un array de números y devuelva la cantidad de números pares que contiene.

3. Crea una función llamada `multiplicarArray` que reciba un array de números y un multiplicador, y devuelva un nuevo array donde cada elemento sea el resultado de multiplicar el elemento original por el multiplicador.

4. Crea una función llamada `crearPatron` que reciba un número `n` y devuelva una cadena de texto con el siguiente patrón (para n=5):
   ```
   *
   **
   ***
   ****
   *****
   ```

## Código

```javascript
// Escribe tu código debajo de esta línea
// INICIO

// Tu código aquí

// FIN
```

## Comprobación

Para comprobar tu solución, abre el archivo `01-bucle-for.html` en tu navegador y revisa la consola para ver si has pasado todas las pruebas.

## Resultado esperado

Al ejecutar las pruebas, deberías ver en la consola:

```
✓ La función sumarNumeros calcula correctamente la suma de 1 hasta n
✓ La función contarPares cuenta correctamente la cantidad de números pares
✓ La función multiplicarArray multiplica correctamente cada elemento del array
✓ La función crearPatron genera correctamente el patrón de asteriscos
```

## Pistas

- Para la función `sumarNumeros`, utiliza un bucle `for` que vaya desde 1 hasta `n` y acumula la suma.
- Para la función `contarPares`, recuerda que un número es par si el resto de dividirlo entre 2 es 0 (`numero % 2 === 0`).
- Para la función `multiplicarArray`, puedes crear un nuevo array y usar un bucle `for` para llenarlo con los valores multiplicados.
- Para la función `crearPatron`, puedes usar un bucle anidado o concatenar asteriscos en cada iteración.

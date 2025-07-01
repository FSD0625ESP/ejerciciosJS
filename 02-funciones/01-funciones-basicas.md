# Ejercicio 1: Funciones Básicas

## Enunciado

En este ejercicio, practicarás la creación y uso de funciones en JavaScript, incluyendo diferentes formas de declaración, parámetros y valores de retorno.

### Instrucciones:

1. Crea una función declarativa llamada `saludar` que reciba un nombre como parámetro y devuelva un saludo personalizado (por ejemplo, "¡Hola, Juan!").

2. Crea una función expresiva (asignada a una variable) llamada `calcularCuadrado` que reciba un número como parámetro y devuelva su cuadrado.

3. Crea una función de flecha (arrow function) llamada `esPar` que reciba un número como parámetro y devuelva `true` si es par o `false` si es impar.

4. Crea una función llamada `aplicarOperacion` que reciba dos números y una función como parámetros. Esta función debe aplicar la función recibida a los dos números y devolver el resultado. Luego, crea una función de flecha llamada `sumar` que reciba dos números y devuelva su suma, y pásala como argumento a `aplicarOperacion` junto con dos números.

## Código

```javascript
// Escribe tu código debajo de esta línea
// INICIO

// Tu código aquí

// FIN
```

## Comprobación

Para comprobar tu solución, abre el archivo `01-funciones-basicas.html` en tu navegador y revisa la consola para ver si has pasado todas las pruebas.

## Resultado esperado

Al ejecutar las pruebas, deberías ver en la consola:

```
✓ La función saludar devuelve un saludo personalizado
✓ La función calcularCuadrado calcula correctamente el cuadrado de un número
✓ La función esPar determina correctamente si un número es par
✓ La función aplicarOperacion aplica correctamente la función recibida a los números
```

## Pistas

- Una función declarativa se define con la palabra clave `function` seguida del nombre de la función.
- Una función expresiva se define asignando una función anónima a una variable.
- Una función de flecha (arrow function) tiene la sintaxis `(parametros) => { cuerpo }` o `(parametros) => expresion`.
- Las funciones pueden recibir otras funciones como parámetros, lo que se conoce como "callbacks" o "funciones de orden superior".

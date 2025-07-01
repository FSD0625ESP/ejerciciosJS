# Ejercicio 1: Objetos Básicos

## Enunciado

En este ejercicio, practicarás la creación y manipulación de objetos en JavaScript, incluyendo propiedades, métodos y diferentes formas de acceder a ellos.

### Instrucciones:

1. Crea un objeto llamado `persona` con las siguientes propiedades:

   - `nombre`: Tu nombre
   - `edad`: Tu edad
   - `profesion`: Tu profesión
   - `hobbies`: Un array con al menos tres hobbies

2. Añade un método llamado `presentarse` al objeto `persona` que devuelva una cadena de texto con el formato: "Hola, me llamo [nombre], tengo [edad] años y soy [profesion]. Me gusta [hobbies separados por comas]."

3. Crea una función llamada `agregarHobby` que reciba un objeto persona y un nuevo hobby como parámetros, y añada el hobby al array de hobbies de la persona.

4. Crea una función llamada `esMayorQue` que reciba dos objetos persona como parámetros y devuelva `true` si la primera persona es mayor que la segunda, o `false` en caso contrario.

## Código

```javascript
// Escribe tu código debajo de esta línea
// INICIO

// Tu código aquí

// FIN
```

## Comprobación

Para comprobar tu solución, abre el archivo `01-objetos-basicos.html` en tu navegador y revisa la consola para ver si has pasado todas las pruebas.

## Resultado esperado

Al ejecutar las pruebas, deberías ver en la consola:

```
✓ El objeto persona tiene todas las propiedades requeridas
✓ El método presentarse devuelve la cadena de texto correcta
✓ La función agregarHobby añade correctamente un nuevo hobby
✓ La función esMayorQue compara correctamente las edades de dos personas
```

## Pistas

- Para crear un objeto, puedes usar la notación literal de objetos: `{ propiedad1: valor1, propiedad2: valor2 }`.
- Para añadir un método a un objeto, puedes definirlo como una propiedad cuyo valor es una función.
- Para acceder a las propiedades de un objeto, puedes usar la notación de punto (`objeto.propiedad`) o la notación de corchetes (`objeto['propiedad']`).
- Para añadir un elemento a un array, puedes usar el método `push()`.

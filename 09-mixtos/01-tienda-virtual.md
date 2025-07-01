# Ejercicio 1: Tienda Virtual

## Enunciado

En este ejercicio, crearás un sistema básico para gestionar una tienda virtual, combinando varios conceptos de JavaScript como objetos, arrays, funciones y estructuras de control.

### Instrucciones:

1. Crea un array llamado `inventario` que contenga al menos 5 objetos, cada uno representando un producto con las siguientes propiedades:

   - `id`: Un número único para identificar el producto
   - `nombre`: El nombre del producto
   - `precio`: El precio del producto
   - `stock`: La cantidad disponible del producto
   - `categoria`: La categoría a la que pertenece el producto (por ejemplo, "electrónica", "ropa", etc.)

2. Crea un objeto llamado `tienda` con las siguientes propiedades y métodos:

   - `nombre`: El nombre de tu tienda
   - `inventario`: El array de productos que creaste anteriormente
   - `carrito`: Un array vacío que representará el carrito de compras
   - `buscarProducto`: Un método que reciba un ID y devuelva el producto correspondiente o `null` si no existe
   - `agregarAlCarrito`: Un método que reciba un ID de producto y una cantidad, y añada el producto al carrito si hay suficiente stock
   - `calcularTotal`: Un método que calcule y devuelva el total de los productos en el carrito
   - `realizarCompra`: Un método que "procese" la compra, actualizando el stock de los productos y vaciando el carrito

3. Crea una función llamada `filtrarPorCategoria` que reciba el inventario y una categoría como parámetros, y devuelva un array con los productos que pertenecen a esa categoría.

4. Crea una función llamada `ordenarPorPrecio` que reciba el inventario y un booleano `ascendente` como parámetros, y devuelva un nuevo array con los productos ordenados por precio (ascendente o descendente según el valor del booleano).

## Código

```javascript
// Escribe tu código debajo de esta línea
// INICIO

// Tu código aquí

// FIN
```

## Comprobación

Para comprobar tu solución, abre el archivo `01-tienda-virtual.html` en tu navegador y revisa la consola para ver si has pasado todas las pruebas.

## Resultado esperado

Al ejecutar las pruebas, deberías ver en la consola:

```
✓ El inventario contiene al menos 5 productos con todas las propiedades requeridas
✓ El método buscarProducto encuentra correctamente un producto por su ID
✓ El método agregarAlCarrito añade correctamente productos al carrito
✓ El método calcularTotal calcula correctamente el total del carrito
✓ El método realizarCompra actualiza correctamente el stock y vacía el carrito
✓ La función filtrarPorCategoria filtra correctamente los productos por categoría
✓ La función ordenarPorPrecio ordena correctamente los productos por precio
```

## Pistas

- Utiliza objetos literales para crear los productos y la tienda.
- Para buscar un elemento en un array basándote en una condición, puedes usar el método `find()`.
- Para actualizar el stock, recuerda restar la cantidad comprada del stock actual.
- Para ordenar un array, puedes usar el método `sort()`.
- Para no modificar el array original al ordenar o filtrar, crea una copia usando `[...array]` o `array.slice()`.

---
title: "Post de prueba: prosa y código"
description: "Texto de relleno para juzgar la tipografía y los bloques de código en las dos palettes."
date: "2026-10-07"
lang: es
---

*Este post es relleno. Existe para ver cómo se leen la prosa, las citas y el código con la tipografía y las palettes del sitio.*

Un párrafo normal tiene que leerse cómodo a lo largo, con **negritas** de vez en cuando, alguna *itálica* y código en línea como `useState` o `Array.prototype.map`. La medida de la línea, el interlineado y el contraste se notan más en párrafos largos que en titulares, así que este se alarga un poco más de lo necesario.

## Una sección con código

Antes del código, una cita:

> "Una cita corta, para ver cómo se separa del texto sin necesidad de una caja."

Un bloque con comentarios, strings, números y palabras clave:

```js
// Calcula el total de un pedido con impuesto.
function totalConImpuesto(items, tasa = 0.16) {
  const subtotal = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0);
  return Math.round(subtotal * (1 + tasa) * 100) / 100;
}

const pedido = [{ precio: 120, cantidad: 2 }, { precio: 45.5, cantidad: 1 }];
totalConImpuesto(pedido); // 334.18
```

Y otro más corto, en una línea larga para probar el scroll horizontal:

```js
const mensaje = `Pedido listo: ${pedido.length} productos, total ${totalConImpuesto(pedido)} MXN, entrega estimada en dos días hábiles`;
```

## Una lista con código adentro

- **Primer punto** — texto corto.
- **Segundo punto** — con un bloque anidado:
  ```js
  const contador = () => {
    let n = 0;
    return () => ++n;
  };
  ```
- **Tercer punto** — y `código en línea` dentro de una lista.

## Cierre

Un último párrafo para ver el espacio antes del separador y del footer.

---

*Fin del post de prueba.*

---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Presentando Vue Fluid DnD'
pubDate: 2024-04-26
description: 'En este artículo presenta a <strong>Vue Fluid DnD</strong> como una alternativa a funcionalidades drag and drop en <strong>Vue 3</strong>'
image:
    src: '/images/vue-fluid-dnd-cover.webp'
    alt: 'Vue logo'
---

En las aplicaciones web que usan frameworks reactivos como **vue**, **react**, **angular**, etc es muy común la necesidad de organizar listas u otras colecciones de elementos ordenándolas o añadiendo, eliminando o trasladando elementos en estas.
El ecosistemas de vue no es tan rico como el de react, existen buenas soluciones drag and drop para vue pero la mayoría son un wrapper de otra librería, no tienen suficiente mantenimiento o no tienen soporte para **Vue3**.
Con [**Vue Fluid DnD**](https://fluid-dnd.netlify.app/)presentamos una nueva solución inspiradas en la facilidad de uso [drag and drop from formkit](https://drag-and-drop.formkit.com/), las animaciones de [**react-beautiful-dnd**](https://react-beautiful-dnd.netlify.app/), etc.

## Vue Fluid DnD en acción

-   Primero instalaremos [vue-fluid-dnd](https://www.npmjs.com/package/vue-fluid-dnd) en nuestro proyecto:

```bash
npm i vue-fluid-dnd
```

-   Importamos la librería y hacemos uso de su sencilla api para pasarle como parámetro la lista de números a ordenar:

```vue
<script setup lang="ts">
	import { ref } from 'vue';
	import { useDragAndDrop } from 'vue-fluid-dnd';

	const list = ref([1, 2, 3]);
	const { parent } = useDragAndDrop(list);
</script>
```

-   La variable `parent` contiene la referencia al contenedor de los elementos a ordenar, el cual se pasa por referencia al elemento `ul`, y por cada elemento se pasa la posición de este en la lista (`index`):

```html
<template>
	<ul ref="parent" class="number-list">
		<li class="number" v-for="(element, index) in list" :index="index">
			{{ element }}
		</li>
	</ul>
</template>
```

-   Se añade algunos estilos a nuestra lista

```css
.number {
  border-style: solid;
  padding-left: 5px;
  margin-top: 0.25rem;
  border-width: 2px;
  border-color: black;
}
.number-list {
  display: block;
  padding-inline: 25px;
}
```

-   El ejemplo luce así:

![number list](/images/number-list.webp)

-   Gracias a **Vue Fluid DnD** se puede arrastrar los elementos y ordenar la lista:

![number list dragging elements](/images/number-list-dragged.webp)

## Beneficios de usar **Vue Fluid DnD**

**Ligero**: **Vue Fluid DnD** no tiene ninguna dependencias, esto la convierte en una librería bastante ligera, fiable y más robusta ya que no hereda ningún error dependencias externas.

**Sencillo**: La api de **Vue Fluid DnD** es simple y bastante fácil de usar. También es flexible a futuras funcionalidades y cambios que se planea añadir en un futuro.

**Atractivo**: **Vue Fluid DnD** desde principio fue concebido para enriquecer las funcionalidades de **drag and drop** con elegantes animaciones a la hora de reorganizar los elementos en la aplicación. Se promete más personalización en este apartado en un futuro.

## Conclusiones

En este artículo se hace una introducción a **Vue Fluid DnD** como alternativa a herramientas **drag and drop** en el ecosistema de **Vue 3**. Se muestra un ejemplo de su uso y se repasa brevemente las ventajas de dicha herramienta.
Si te interesa que este proyecto siga adelante puedes dejar una estrella en el [repositorio](https://github.com/carlosjorger/fluid-dnd) o mejor aún probar **Vue Fluid DnD** y darme algún feedback a través de un _issues_, un _pull request_ o escribirme a mi [correo personal](rodriguezcuelloc@gmail.com).

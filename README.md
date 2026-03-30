# 🎨 Generador de Paletas de Colores

Aplicación web interactiva que permite generar paletas de colores aleatorias en formato HEX o HSL.

## 🚀 Funcionalidades

- Generación de paletas aleatorias (6, 8 o 9 colores)
- Selección de formato de color (HEX o HSL)
- Bloqueo de colores 🔒
- Copia del código al portapapeles 📋
- Diseño responsive

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (DOM)

## ▶️ Cómo usar la aplicación

1. Selecciona el tamaño de la paleta (6, 8 o 9)
2. Selecciona el formato de color (HEX o HSL)
3. Haz clic en "Generar paleta"
4. Puedes bloquear colores con el ícono 🔒
5. Haz clic sobre un color para copiar su código

## 🌐 Demo en vivo

👉 https://titol2003.github.io/ProyectoM1_NicoleOspinaQuiroga/

## ⚙️ Decisiones técnicas

- Uso de `Math.random()` para generación de colores
- Uso de `dataset` para almacenar información de cada color
- Manejo de estado con un array (`lockedColors`)
- Manipulación dinámica del DOM con JavaScript
- Uso de `navigator.clipboard` para copiar colores

## 📦 Cómo ejecutar el proyecto

1. Clonar el repositorio:

```bash
git clone https://github.com/titol2003/ProyectoM1_NicoleOspinaQuiroga.git
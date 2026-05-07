# Clase 36 - MongoDB con Mongoose

Este proyecto es una introducción al uso de Mongoose para interactuar con una base de datos MongoDB desde Node.js.

## Descripción

El script `index.js` realiza las siguientes acciones:
1. Se conecta a una instancia local de MongoDB (`mongodb://localhost:27017/personas`).
2. Define un esquema para la colección `User` con los campos `nombre`, `apellido` y `email` (único y requerido).
3. Inserta un nuevo usuario en la colección.
4. Recupera todos los documentos de la colección y los muestra en la consola.

## Requisitos

- [Node.js](https://nodejs.org/) instalado.
- [MongoDB](https://www.mongodb.com/) ejecutándose localmente en el puerto 27017.

## Instalación

1. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

## Uso

Para ejecutar el script, asegúrate de que MongoDB esté en ejecución y luego corre:
```bash
node index.js
```

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Mongoose**: Modelado de objetos para MongoDB.

# </script>

## Descripción del proyecto:

BEYOND IMAGINATION nace del crecimiento del mundo de la programación buscando ser una academia de aprendizaje online competente tanto en nivel como así también en precios. El proyecto cuenta con un sistema de compra funcional con restado de stock en tiempo real.

<p align="center">
══════════════════════════════════════════════════════
</p>

## Clonado rápido de repositorio:

Para clonar rápidamente el repositorio ubíquese con su consola de preferencia (Powershell, Git Bash, etc) en la carpeta donde quiera que se clone el proyecto completo, una vez ubicado, copie y pegue el siguiente comando dentro de la consola y presione ENTER.

```
git clone https://github.com/juanigarciadev/first-react-app
```

<p align="center">
══════════════════════════════════════════════════════
</p>

## Dependencias usadas en el proyecto:

- [Material UI](https://mui.com/) (usado para la rápida aplicacion de componentes tales como un desplegable para la sección de FAQS o para los campos de los formularios)

- [Firebase](https://firebase.google.com/) (usado para la base de datos del e-commerce)

- [Formik](https://formik.org/) (usado para la creacion de formularios)

- [Yup](https://www.npmjs.com/package/yup) (usado para la validación de los formularios)

- [React Icons](https://react-icons.github.io/react-icons) (usado para agregar los iconos que se necesiten en el proyecto)

- [React Countup](https://www.npmjs.com/package/react-countup) (usado para hacer el contador de usuarios, cursos y porcentaje de completado)

- [Toastify]() (usado para notificarle al usuario cuando algo fue agregado al carrito)

- [SASS]() (usado para estilar con CSS de una manera más cómoda y sectorizada permitiendo así también la anidación de estilos)

### Instalación de dependencias e iniciado de proyecto:

Para instalar estas dependencias y que el proyecto funcione correctamente coloque en su consola de preferencia estando ubicado/a en la carpeta raíz del proyecto:

```
npm install
```

Una vez instaladas todas las dependencias, copie y pegue el siguiente comando en su consola de preferencia estando ubicado/a en la carpeta raíz del proyecto:

```
npm start
```

<p align="center">
══════════════════════════════════════════════════════
</p>

### Para usar este proyecto con productos propios se necesitan variables de entorno, para ello, se deberá crear el archivo .env en la ruta raíz del proyecto y asignarle lo siguiente:

- REACT_APP_APIKEY=
- REACT_APP_AUTHDOMAIN=
- REACT_APP_PROJECTID=
- REACT_APP_STORAGEBUCKET=
- REACT_APP_MESSAGINGSENDERID=
- REACT_APP_APPID=

<p align="center">
══════════════════════════════════════════════════════
</p>

### Sintaxis para la correcta creación de productos:

Los productos deberán contener las siguientes propiedades creandolas en Firebase dentro de una colección llamada "products". La ID del documento (producto) dentro de la colección tiene que ser generada automáticamente por Firebase.

- title: (string, nombre del producto, se admiten mayúsculas).
- category: (string, frontend o backend, no se admiten mayusculas).
- img: (string, url de la foto del producto, preferentemente subida a [Cloudinary](https://cloudinary.com/)).
- description: (string, descripción oficial del producto).
- shortDescription: (string, misma descripción que la primera pero acortada para su vista en el carrito).
- contains: (array, mínimo y máximo 5 temas o características del producto).
- new: (boolean, en true saldría una etiqueta de "New" en la card del producto, en false no saldría nada).
- price: (number, precio del producto)
- stock: (number, stock disponible del producto)

<p align="center">
 <img width="50px" src="https://res.cloudinary.com/diruiumfk/image/upload/v1680216082/beyond-imagination_zfxqv7.png" alt="BEYOND IMAGINATION Logo Mini"/>
</p>

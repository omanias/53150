# CoderHouse
## Comision 53150 Programación Backend
### PRIMERA PREENTREGA DE PROYECTO FINAL

#### Se debe entregar:

Desarrollar el servidor basado en Node.JS y Express, que escuche en el puerto 8080 y disponga de dos grupos de rutas: /products y /carts. Dichos endpoints estarán implementados con el router de Express, con las siguientes especificaciones:

---

Para el manejo de productos, el cual tendrá su router en /api/products/ , configurar las siguientes rutas:

La ruta raíz **GET** "_/_" deberá listar todos los productos de la base. (Incluyendo la limitación ?limit del desafío anterior
La ruta **GET** "_/:pid_" deberá traer sólo el producto con el id proporcionado.

La ruta raíz **POST** "_/_" deberá agregar un nuevo producto con los campos:

* **_id:_** Number/String (A tu elección, el id NO se manda desde body, se autogenera como lo hemos visto desde los primeros entregables, asegurando que NUNCA se repetirán los ids en el archivo.

* **_title_**: String,
* **_description_**: String
* **_code_**: String
* **_price_**: Number
* **_status_**: Boolean
* **_stock_**: Number
* **_category_**: String
* **_thumbnails_**: Array de Strings que contenga las rutas donde están almacenadas las imágenes referentes a dicho producto

Status es true por defecto.
Todos los campos son obligatorios, a excepción de thumbnails

La ruta **PUT** "_/:pid_" deberá tomar un producto y actualizarlo por los campos enviados desde body. NUNCA se debe actualizar o eliminar el id al momento de hacer dicha actualización.

La ruta **DELETE** "_/:pid_" deberá eliminar el producto con el pid indicado. 

---

Para el carrito, el cual tendrá su router en /api/carts/, configurar dos rutas:

La ruta raíz **POST** "_/_" deberá crear un nuevo carrito con la siguiente estructura:

* **_Id_**:Number/String (A tu elección, de igual manera como con los productos, debes asegurar que nunca se dupliquen los ids y que este se autogenere).

products: Array que contendrá objetos que representen cada producto

La ruta **GET** "_/:cid_" deberá listar los productos que pertenezcan al carrito con el parámetro cid proporcionados.

La ruta **POST** "_/:cid/product/:pid_" deberá agregar el producto al arreglo “products” del carrito seleccionado, agregándose como un objeto bajo el siguiente formato:

* **product**: SÓLO DEBE CONTENER EL ID DEL PRODUCTO (Es crucial que no agregues el producto completo)
* **quantity**: debe contener el número de ejemplares de dicho producto. El producto, de momento, se agregará de uno en uno.

Además, si un producto ya existente intenta agregarse al producto, incrementar el campo quantity de dicho producto. 

La persistencia de la información se implementará utilizando el file system, donde los archivos “productos,json” y “carrito.json”, respaldan la información.

No es necesario realizar ninguna implementación visual, todo el flujo se puede realizar por Postman o por el cliente de tu preferencia.

**_NO OLVIDES ADJUNTAR CAPTURAS DE PANTALLA DE POSTMAN_**
# Documentación de Ayuda

Este proyecto es fue iniciado dentro del curso de ReactJS de Coderhouse

## Antes Ejecutar

El proyecto depende de muchas librerías externas para diferentes usos, es por eso que antes de ejecutar se te mencionará
lo que debes de tomar en cuenta:

### `npm install`
Una ves optenido el paquete, debemos ejecutar este comando mencionado dentro del proyecto para así descargar las dependencias y librerías que se usarán.

### `Conexión de Firebase`
Antes de iniciar la ejecución del proyecto, esta debe tener todas las credenciales y accesos correctos, esta puedes generarlo creando un archivo
".env" en el mismo nivel que el ".env.examplo" y dentro de dicho archivo también puedes usar como referencia a como debe llenarse las credenciales.

## Para Ejecutar

### `npm start`
Al momento de ejecutar el comando mencionado, este se correrá inmediatamente, compilando todo tus archivos.
Se activará un servidor local en la cual estará almacenado en: [http://localhost:3000](http://localhost:3000), esta puedes observarlo en cualquier navegador.


## Funciones de Consumo Local
Dentro de la dirección "Services/products.js", podrás encontrar la data local de uso para el desarrollo de este software. Tener en cuenta también las funcionalidades que existen:
- getItems
- getItem
- getItemById
- getCategories
- getItemsByCategoryId

### `getItems`
Dentro de esta función, puedes obtener todos los items pertenecientes del objeto de Productos.

### `getItem`
Con esta función se obtiene el item en específico, declarando estáticamente le identificador del que deseas.

### `getItemById`
Con esta función se obtiene el item consultado por el "id" solicitado, esto hace que la consulta sea dinámico.

### `getCategories`
Dentro de esta función podrás obtener todos los items almacenados en el objeto de las Categorías.

### `getItemsByCategoryId`
Dentro de esta función podrás obtener todos los items almacenados en el objeto de los Productos que pertenescan a la misma categoría enviada en los parámentros.


## Funciones de Consumo Externo
Dentro de la dirección "Services/firebase.js", podrás encontrar la forma correcta de incrustar una conexión de Firebase y funciones que nse usando globlamente dentro de los componentes :
- getCategories
- getProducts
- getProductById


### `getCategories`
Dentro de esta función, puedes obtener todas las categorías almacenadas en el Firestore.

### `getProducts`
Con esta función podemos obtener todos los productos almacenados en la nube, adicionalmente verifica si los traesde una categoría específica.

### `getProductById`
Con esta función podemos obtener un elemento específico de la lista almcenada de los productos.



## Arquitectura de Componentes
Dentro de la carpeta de "components" tendremos armada la siguiente estructura:
- Header
    - CartWidget 
    - NavBar
- Body
    - Cart
    - CompleteBuy
    - Item
    - ItemCount
    - ItemDetail
    - ItemDetailContainer
    - ItemList
    - ItemListContainer
- Loader


## Context para el carrito de Compras
Para mantener una burbuja de datos al carrito mientras se navega por la web, se utilizó a "cartContext.js" ubicado en la carpeta "./context/", de igual manera para las notificaiones se utilizó el "NotificationContext.js" ubicado en la misma carpeta.

### `CartContext.js`
Dentro de este context podemos configurar las funciones y valores que tendrá el carrito globalmente. Dentro de estas encontramos:
- addItem: Función por la cual podemos agregar un elemento al carrito.
- removeItem: Función por la cual quitamos del carrito un elemento específico.
- clear: Función para limpiar todo el carrito y mantenerlo vacío.
- isInCart: Con esta función verificamos si el producto a verificar, existe o no dentro del carrito.
- updateCounter: Con esta función verificamos que el contador que nos muestra se actualice cada ves que se presenta un cambio.
- getTotalPay: Con esta funcion obtenemos el total a pagar del carrito.

## Context para la Notificación
Para mantener una funcionalidad global de notificaciones por las acciones a realizar, creamos un "context" llamado "NotificationContext.js". ubicado en la carpeta "./context/". Este context se asocia junto al component "Notification.js" para poder mostrar el tipo de mensaje y el mesanje mismo.

## Proceso de Confirmar Carrito
Dentro del proceso posterior a armar el carrito, al momento de enviar la confirmación se realiza unas validaciones para el stock y verificar si se logra realizar o no. Este proceso lo encontramos dento del componente "Cart.js"

### `confirmOrder.js`
Dentro de esta funcion, realizamos concretamente el desarrollo de:
- Armar el objeto a registrar.
- Primero verificamos que la cantidad que se solicita en el carrito no supere a la del stock. De acuerdo a la verificación se valida si se realiza o no.
    - Utilizamos el "batch" de firebase para tener estos datos antes de realizar un update
- Una ves todo est ok, se reliza un "commit" (otra funcionalidad de firebase) en la cual decimos que si se relices los cambios de update y agreguemos luego una orden nueva a la colección.


Cabe recalcar que dentro de cada carpeta se encuentan los JS y CSS de cada componente, a excepción de las carpetas "Header y Body" que son solo carpetas contenedoras.

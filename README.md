# E-Commerce

### `Tienda Online`
Proyecto Final  
Este es un e-commerce ficticio realizado para el desafio final
de coderhouse.  
Algunos de los requisitos son:  
Inicio: Al momento de ingresar a la app en la ruta base ‘/’  
Flow: Al clickear un ítem del listado debe navegar a la ruta /item/:id, donde id es el id del item (generado por firebase), y ver la descripción del producto ( foto, precio, selector de cantidad). Si se ingresa a /item/:id y el producto no existe en firebase, debemos responder un mensaje adecuado que indique algo relacionado a que el producto no existe.  
Firebase:Implementar al menos dos colecciones  
El cart debe ser accesible durante toda la experiencia y tener una indicación de la cantidad de items incluidos agregados (ej. si hay un ítem con dos unidades y un ítem con una unidad, debe decir ‘tres’).  
Checkout mínimo:  
Items con sus cantidades  
Total de la orden  
Input para nombre, apellido y teléfono  
Input para email y lógica de repetir el email 2 veces (a excepción de que realicen el desafío extra de auth, en ese caso no sería necesario)  

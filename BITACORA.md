***BITACORA\_KAROL TORRES***



**1. ¿Por qué usar un id único en lugar de identificar al personaje por su nombre?¿Que pasaría si dos personajes se llaman igual?**



El id único se utiliza como identificador único para cada personaje, de esa manera el código puede identificar a cada personaje de manera individual y realizar las acciones (editar, eliminar o abrir detalles) sin afectar a otro personaje por error. Un ejemplo de una posible falla si no tuviéramos id únicos seria cuando tenemos dos personajes con el mismo nombre, el código no podría identificarlos y podría afectar a ambos o al equivocado, sin embargo, con un id único esto no sucedería.



**2. ¿La búsqueda debe ejecutarse en cada tecla o al presionar Enter? ¿ Como cambia la experiencia con 10 vs. 1,000 personajes?**



Para colecciones pequeñas (como es el caso) es mejor utilizar la búsqueda por cada tecla, ya que el filtrado es instantáneo y la experiencia para el usuario se siente mas natural y fluida. Mientras que para colecciones mas grandes y complejas como lo puede ser una colección de 1,000 personajes podría ser mas recomendable una búsqueda a través de Enter, ya que al tener tantos personajes el rendimiento de la pagina podría verse afectado si el filtrado es en tiempo real.



**3. ¿Qué ocurre si alguien modifica manualmente localStorage desde la consola y deja un JSON invalido? La aplicación no debe romperse.**



Para este caso dentro del código se uso try/catch, justamente para evitar que un JSON dañado o invalido detuviera el código, usamos try/catch como validación de los datos extraídos desde el localStorage, si los datos del JSON no son validos, try/catch lo detecta e ignora los datos provenientes del JSON y únicamente muestra los datos de los personajes originales.



**4. ¿Qué pasa si la URL de la imagen no existe? Propón un comportamiento de respaldo (por ejemplo, mostrar iniciales).**



Si la imagen no existe o no es posible cargarla es remplazada por una imagen de respaldo con fondo gris que indica "sin imagen". De esta manera las cards nunca se quedan con la imagen rota, sino que se queda con un respaldo que indica que no existe la imagen.



**5. ¿Es seguro guardar información sensible en localStorage? ¿Quién más puede leerla? ¿Qué datos nunca guardarías ahí?**



No, no es seguro guardar información sensible en localStorage, ya que cualquier script que corra en el mismo origen (dispositivo) y cualquier persona con acceso a su navegador puede ver la información guardada desde las herramientas de desarrollador. Por lo que nunca se debe de guardar información sensible como contraseñas, datos bancarios o información personal.



**6. Tu aplicación vive en GitHub Pages. Si un compañero abre tu URL, ¿vera tus personajes? Explica porque y que implica para el diseño de la aplicación.**



No, ya que localStorage funciona de forma local en cada navegador y origen. Los datos se encuentran dentro del dispositivo y no en GitHub. Si un compañero abre la URL del proyecto vera únicamente los 8 personajes originales que existen dentro del código, no  será capaz de ver los personajes que yo agregue, elimine o edite posteriormente. Esto pasa ya que no existe una sincronización entre dispositivos, por lo que incluso los datos se perderán si es que se borra el navegador del dispositivo.


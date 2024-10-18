SHOW DATABASES;
USE tienda;

SHOW TABLES;

SELECT * FROM articulos;

SELECT * FROM fabricantes;

SELECT * FROM articulos WHERE clave_articulo = 5;

SELECT * FROM articulos WHERE nombre="Teclado";

SELECT * FROM articulos WHERE nombre="Memoria RAM" OR "Memoria USB";

SELECT * FROM articulos WHERE nombre="Memoria RAM" AND "Memoria USB";

SELECT * FROM articulos WHERE nombre="Memoria RAM" OR nombre="Memoria USB";

SELECT * FROM articulos WHERE nombre LIKE "M%";

SELECT nombre FROM articulos WHERE precio = 100;

SELECT nombre FROM articulos WHERE precio > 100;

SELECT * FROM articulos WHERE precio >= 100 AND precio <= 350;

SELECT * FROM articulos WHERE precio BETWEEN 100 AND 350;

SELECT * FROM articulos WHERE precio >= 50 AND precio <= 200;

SELECT * FROM articulos WHERE precio BETWEEN 50 AND 200;

SELECT AVG(precio) FROM articulos;

SELECT SUM(precio) FROM articulos;

SELECT AVG(precio) FROM articulos WHERE clave_fabricante = 3;

SELECT nombre, precio FROM articulos ORDER BY nombre;

SELECT * FROM articulos ORDER BY precio DESC;

SELECT nombre, precio FROM articulos WHERE precio > 250 ORDER BY precio DESC, nombre;

#Con este comando podemos obtener los datos de una tabla y su relación con otra, todo depende de la clave foranea
SELECT * FROM articulos, fabricantes WHERE articulos.clave_fabricante = fabricantes.clave_fabricante;

#Con este comando me devuelve un listado de los articulos con su fabricante, todo depende de la llave foranea
SELECT articulos.clave_articulo, articulos.nombre, fabricantes.nombre FROM articulos, fabricantes WHERE articulos.clave_fabricante=fabricantes.clave_fabricante;

#Con este comando me traigo el nombre y precio de los articulos donde el nombre del fabricante sea Logitech, se debe hacer la relacion con la tabla fabricante para saber que articulos tienen relacion con fabricantes
SELECT articulos.nombre, articulos.precio FROM articulos, fabricantes WHERE fabricantes.nombre = "Logitech" AND articulos.clave_fabricante = fabricantes.clave_fabricante ORDER BY nombre ASC;

#Con este comando me traigo informacion de articulos y fabicante en orden descendente y donde el nombre del fabricante sea Lexar o Kingston
SELECT articulos.nombre, articulos.precio, fabricantes.nombre FROM articulos, fabricantes WHERE fabricantes.nombre = "Lexar" OR fabricantes.nombre = "Kingston" AND articulos.clave_fabricante = fabricantes.clave_fabricante ORDER BY precio DESC;

#Agrego un nuevo articulo
INSERT INTO articulos VALUES(11,"Altavoces", 120, 2);

#Actualizamos el articulo con id 8
UPDATE articulos SET nombre= "Impresora Laser" WHERE clave_articulo = 8;

#Actualizo el precio de todos los productos con un descuento del 10 por ciento
UPDATE articulos SET precio= precio * 0.10;

#Actualizo el precio de los articulos le resto 10, donde el precio sea mayor o igual a 300;
UPDATE articulos SET precio = precio - 10 WHERE precio >= 300;

#Elimino el ariculo con clave 6
DELETE FROM articulos WHERE clave_articulo= 6;


#Eliminar un constraint
ALTER TABLE articulos DROP CONSTRAINT nombre_constraint;
#Codigo de Constraint articulos
ALTER TABLE articulos ADD CONSTRAINT `articulos_ibfk_1` FOREIGN KEY (`clave_fabricante`) REFERENCES `fabricantes` (`clave_fabricante`)
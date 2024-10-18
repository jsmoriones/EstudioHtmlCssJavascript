USE hospitaldb;

#Obtener el número de citas por especialidad
SELECT especialidad.nombre_especialidad, COUNT(especialidad.nombre_especialidad) FROM cita, medico, especialidad
WHERE medico.id_medico = cita.id_medico AND especialidad.id_especialidad = medico.id_especialidad
GROUP BY nombre_especialidad;






/*
Explicación: Con la palabra reservada SELECT extraemos los datos que deseamos entregar a los usuarios...
en este caso entregamos el nombre_espacialidad, seguido hacemos uso de la función COUNT esta funcion nos permite contar los resltados con igual valor
un ejemplo seria contar las lineas que tienen el texto manzana.
Seguido tenemos la palabra reservada FROM donde agregamos el nombre de las tablas con las que vamos a trabajar en este caso serian las tablas cita,medico,especialidad
Ahora tenemos la palabra reservada WHERE que nos permite realizar la condicion de la consulta
Realizamos la conexion entre tablas. De la tabla medico(No Dependiente) unimos el id_medico con la tabla cita(Dependiente)
Con la palabra servada AND hacemos obligatoria otra condicion en este caso, la tabla especialidad(No Dependiente) con el atributo id_especialidad unimos la tabla medico(No dependiente)
Seguido de ello hacemos uso de la funcion GROUP BY que nos permite agrupar los campos que no hacen uso de ninguna funcion como por ejemplo nombre_especialidad
*/





#Mostrar todos los pacientes y un indicador de si tienen o no una cita programada
SELECT CONCAT(paciente.nombre, " ", paciente.apellido) AS "Nombre Completo",
CASE WHEN paciente.id_paciente = cita.id_paciente THEN "Tiene Cita" ELSE "No Tiene Cita" END AS "Reservado"
FROM paciente LEFT JOIN cita ON paciente.id_paciente = cita.id_paciente;






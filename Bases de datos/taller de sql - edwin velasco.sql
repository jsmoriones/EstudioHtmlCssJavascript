USE hospitaldb;
SELECT * FROM medico;
SELECT * FROM medico WHERE medico.area = "Consulta Externa";
SELECT COUNT(nombre) FROM paciente;
SELECT medico.nombre, medico.apellido, medico.area, especialidad.nombre_especialidad FROM medico, especialidad WHERE medico.id_especialidad = especialidad.id_especialidad;
SELECT paciente.nombre, paciente.apellido, cita.fecha, cita.hora FROM paciente, cita WHERE paciente.id_paciente = cita.id_paciente;
SELECT paciente.nombre, paciente.apellido, cita.fecha, cita.hora FROM paciente, cita WHERE paciente.nombre = "Jaime Vicente" AND paciente.id_paciente = cita.id_paciente;
SELECT cita.fecha, cita.hora, medico.nombre, medico.apellido, medico.area, especialidad.nombre_especialidad, paciente.nombre, paciente.apellido FROM cita, medico, especialidad, paciente WHERE medico.id_medico = cita.id_medico AND paciente.id_paciente = cita.id_paciente AND especialidad.id_especialidad = medico.id_especialidad;
###################
SELECT medico.nombre, count(cita.hora) FROM cita, medico WHERE medico.id_medico = cita.id_medico GROUP BY nombre;
SELECT medico.nombre, count(cita.hora) FROM cita, medico WHERE medico.id_medico = cita.id_medico GROUP BY nombre ORDER BY count(cita.hora);
###################

SELECT cita.hora, cita.fecha, paciente.nombre, paciente.apellido, medico.nombre, medico.apellido, especialidad.nombre_especialidad FROM cita, paciente, medico, especialidad WHERE medico.id_medico = cita.id_medico AND paciente.id_paciente = cita.id_paciente AND especialidad.id_especialidad = medico.id_especialidad;

#Codigo necesario
SELECT cita.fecha, cita.hora, especialidad.nombre_especialidad FROM cita, medico, especialidad WHERE medico.id_medico = cita.id_medico AND especialidad.id_especialidad = medico.id_especialidad;


#Obtener el número de citas por especialidad
SELECT especialidad.nombre_especialidad, COUNT(especialidad.nombre_especialidad) FROM cita, medico, especialidad
WHERE medico.id_medico = cita.id_medico AND especialidad.id_especialidad = medico.id_especialidad
GROUP BY nombre_especialidad;



#Imprimir la sumatoria de todas las citas por especialidad
SELECT especialidad.nombre_especialidad, COUNT(especialidad.nombre_especialidad), SUM( COUNT(especialidad.nombre_especialidad) ) OVER() FROM cita, medico, especialidad WHERE medico.id_medico = cita.id_medico AND especialidad.id_especialidad = medico.id_especialidad GROUP BY nombre_especialidad;

SELECT * FROM paciente WHERE apellido LIKE "G%" order by nombre;
SELECT * FROM medico WHERE area = "Consulta Externa" OR "Emergencias";
SELECT * FROM medico WHERE area IN ("Consulta Externa", "Emergencias");
SELECT * FROM cita WHERE cita.fecha BETWEEN "2024-08-20" AND "2024-08-22";
SELECT DISTINCT(especialidad.nombre_especialidad) FROM especialidad, medico WHERE especialidad.id_especialidad = medico.id_especialidad;



#Obtengo los pacientes que tienen cita
SELECT paciente.nombre, paciente.apellido FROM paciente, cita WHERE paciente.id_paciente = cita.id_paciente;

#Obtengo los medicos que tienen citas
SELECT medico.nombre, cita.fecha FROM medico, cita WHERE medico.id_medico = cita.id_medico;

#Obtengo los medicos que se especilizan en cardiologia
SELECT * FROM medico, especialidad WHERE medico.id_especialidad = especialidad.id_especialidad AND especialidad.nombre_especialidad = "Cardiología";

#PRUEBA DE FUEGO
#Obtener los nombres de los pacientes que tienen citas con médicos que se especializan en "Cardiología";
SELECT paciente.nombre, paciente.apellido FROM paciente, cita WHERE paciente.id_paciente = cita.id_paciente
AND cita.id_medico
IN (SELECT medico.id_medico FROM medico, especialidad WHERE medico.id_especialidad = especialidad.id_especialidad AND especialidad.nombre_especialidad = "Cardiología");

#Obtener todos los médicos y, si tienen una cita, mostrar los detalles de la cita; si no, mostrar que no tienen citas programadas.
SELECT medico.*, cita.fecha, cita.hora FROM cita LEFT JOIN medico ON medico.id_medico = cita.id_medico;

SELECT medico.*, if(cita.id_medico = medico.id_medico, CONCAT("Fecha: ", cita.fecha," Hora:",cita.hora), "No tiene") AS "Info Cita"
FROM medico LEFT JOIN cita ON cita.id_medico = medico.id_medico;

SELECT COUNT(paciente.nombre) AS "# de Pacientes", medico.nombre FROM medico, paciente INNER JOIN cita ON paciente.id_paciente = cita.id_paciente WHERE medico.id_medico = cita.id_medico GROUP BY nombre;
SELECT CONCAT(paciente.nombre, " ", paciente.apellido) AS "Nombre Completo",
CASE WHEN paciente.id_paciente = cita.id_paciente THEN "Tiene Cita" ELSE "No Tiene Cita" END AS "Reservado" FROM paciente LEFT JOIN cita ON paciente.id_paciente = cita.id_paciente;
SELECT MIN(cita.fecha) AS "Primera Cita", MAX(cita.fecha) AS "Ultima Cita", paciente.nombre FROM paciente INNER JOIN cita ON paciente.id_paciente = cita.id_paciente GROUP BY nombre;
SELECT CONCAT(medico.nombre, " ", medico.apellido) AS "Nombre Completo del Médico" FROM medico WHERE EXISTS (SELECT cita.fecha, cita.hora FROM cita WHERE cita.id_medico = medico.id_medico);
SELECT CONCAT(paciente.nombre, " ", paciente.apellido) AS "Nombres Completos de Pacientes" FROM paciente UNION SELECT CONCAT(medico.nombre, " ", medico.apellido) AS "Nombres Completos de Medicos" FROM medico;



















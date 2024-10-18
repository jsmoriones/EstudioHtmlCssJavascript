CREATE DATABASE qfinder;
USE qfinder;

/* TABLA EMPRESA */
CREATE TABLE empresa(
	idEmpresa INT AUTO_INCREMENT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    nit CHAR(11) NOT NULL,
    ubicacion VARCHAR(50) NOT NULL,
    contacto CHAR(10) NOT NULL,
    fechaRegistro DATETIME DEFAULT now(),
    correo VARCHAR(35) NOT NULL,
    PRIMARY KEY(idEmpresa)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/* TABLA AUXILIAR */
CREATE TABLE auxiliar(
	idAuxiliar INT AUTO_INCREMENT NOT NULL,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    identificacion INT(10) NOT NULL,
    contacto CHAR(25) NOT NULL,
    fechaRegistro DATETIME DEFAULT now(),
    documentos VARCHAR(60) NOT NULL,
    correo VARCHAR(35) NOT NULL,
    idEmpresa INT NOT NULL,
    PRIMARY KEY(idAuxiliar),
    FOREIGN KEY (idEmpresa) REFERENCES empresa(idEmpresa)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/* TABLA ACUDIENTE */
CREATE TABLE acudiente(
	idAcudiente INT AUTO_INCREMENT NOT NULL,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    identificacion INT(10) NOT NULL,
    contacto CHAR(10) NOT NULL,
    fechaRegistro DATETIME DEFAULT now(),
    correo VARCHAR(35) NOT NULL,
    direccion VARCHAR(25) NOT NULL,
    PRIMARY KEY(idAcudiente)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/* TABLA PACIENTE */
CREATE TABLE paciente(
	idPaciente INT AUTO_INCREMENT NOT NULL,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    dependencia VARCHAR(30) NOT NULL,
    edad INT(3) NOT NULL,
    fechaRegistro DATETIME DEFAULT now(),
    idAcudiente INT NOT NULL,
    PRIMARY KEY (idPaciente),
    FOREIGN KEY (idAcudiente) REFERENCES acudiente(idAcudiente)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/* TABLA HISTORIAL */
CREATE TABLE historial(
	idHistorial INT AUTO_INCREMENT NOT NULL,
    idPaciente INT NOT NULL UNIQUE,
    creacion DATETIME DEFAULT now(),
    detalle TEXT NOT NULL,
    PRIMARY KEY (idHistorial),
    FOREIGN KEY (idPaciente) REFERENCES paciente(idPaciente)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/* TABLA NOTAS */
CREATE TABLE nota(
	idNota INT NOT NULL AUTO_INCREMENT,
    fechaHora DATETIME NOT NULL,
    descripcion TEXT NOT NULL,
    comentarios TEXT,
    titulo VARCHAR(100) NOT NULL,
    idPaciente INT NOT NULL,
    idAuxiliar INT NOT NULL,
    PRIMARY KEY (idNota),
    FOREIGN KEY (idPaciente) REFERENCES paciente(idPaciente),
    FOREIGN KEY (idAuxiliar) REFERENCES auxiliar(idAuxiliar)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


/* Registros de Empresas */
INSERT INTO empresa (nombre, nit, ubicacion, contacto, correo) VALUES ("Zona Gadget", "9999999994", "CRA 11a # 17 AB 56", "8546639545", "zonagadget@gmail.com");
INSERT INTO empresa (nombre, nit, ubicacion, contacto, correo) VALUES ("Tech Market", "9999999513", "Calle 10 # 5-51", "6055454", "techmarket@gmail.com");
INSERT INTO empresa (nombre, nit, ubicacion, contacto, correo) VALUES ("Planeta Digital", "9999999789", "Calle 53 No 10-60/46, Piso 2", " 592-6001", "planetadigital@gmail.com");
INSERT INTO empresa (nombre, nit, ubicacion, contacto, correo) VALUES ("Genius Store", "9999999456", "Calle 10 # 5-51", "3814000", "geniusstore@gmail.com");
INSERT INTO empresa (nombre, nit, ubicacion, contacto, correo) VALUES ("Robot Shop", "9999999123", "Calle 9 # 9 – 62, Leticia, Barrio Centro", "345-5500", "robotstore@gmail.com");
INSERT INTO empresa (nombre, nit, ubicacion, contacto, correo) VALUES ("All Circuit", "9999999456", "Calle 19 # 80A-40. Barrio Belén La Nubia", "885-0663", "allcircuit@gmail.com");
INSERT INTO empresa (nombre, nit, ubicacion, contacto, correo) VALUES ("Nova Tech", "9999999789", "Carrera 21 # 17 -63", "351 -3401", "novatech@gmail.com");
INSERT INTO empresa (nombre, nit, ubicacion, contacto, correo) VALUES ("Happy Computer", "9999999159", "Carrera 42 # 54-77 Barrio El Recreo", "605-5454", "happycomputer@gmail.com");

SELECT * FROM empresa;

/* Registros de Auxiliar */

INSERT INTO auxiliar(nombres, apellidos, identificacion, contacto, documentos, correo, idEmpresa) VALUES ("MERCEDES MARIA", "LÓPEZ GONZÁLEZ", "4414169", "Calle10#11", "456328536.pdf", "mercedeesm@gmail.com", 2);
INSERT INTO auxiliar(nombres, apellidos, identificacion, contacto, documentos, correo, idEmpresa) VALUES ("BYRON DAVID", "CEVALLOS TRUJILLO", "9859830", "Cra56#12", "45656.pdf", "byrond@gmail.com", 2);
INSERT INTO auxiliar(nombres, apellidos, identificacion, contacto, documentos, correo, idEmpresa) VALUES ("GONZALO LUIS", "BALCAZAR CAMPOVERDE", "10258284", "Cll53#25", "10258284.pdf", "GONZALOBALCAZAR@gmail.com", 2);
INSERT INTO auxiliar(nombres, apellidos, identificacion, contacto, documentos, correo, idEmpresa) VALUES ("FERNANDA NOEMI", "CAMPOS MENDIETA", "10283450", "CRA#20B29", "10283450.pdf", "FERNANDACAMPOS@gmail.com", 3);
INSERT INTO auxiliar(nombres, apellidos, identificacion, contacto, documentos, correo, idEmpresa) VALUES ("JAIME EDUARDO", "CÁRDENAS MOLINA", "16071773", "Tra9#29", "16071773.pdf", "JAIMECÁRDENAS@gmail.com", 3);
INSERT INTO auxiliar(nombres, apellidos, identificacion, contacto, documentos, correo, idEmpresa) VALUES ("CARLOS DANIEL", "VILLAVICENCIO PESANTEZ", "16072419", "Cra20B29", "16072419.pdf", "CARLOSVILLAVICENCIO@gmail.com", 3);
INSERT INTO auxiliar(nombres, apellidos, identificacion, contacto, documentos, correo, idEmpresa) VALUES ("MARLENE ESTEFANIA", "NOVILLO JARA", "16074108", "Cll7#19", "16074108.pdf", "MARLENENOVILLO@gmail.com", 4);
INSERT INTO auxiliar(nombres, apellidos, identificacion, contacto, documentos, correo, idEmpresa) VALUES ("JOHANNA SOFIA", "PEREZ CABRERA", "16075877", "Cll4#19B6", "16075877.pdf", "JOHANNAPEREZ@gmail.com", 4);
INSERT INTO auxiliar(nombres, apellidos, identificacion, contacto, documentos, correo, idEmpresa) VALUES ("MARTHA PATRICIA", "MORALES HARRIS", "16077704", "Cra8#155", "16077704.pdf", "MARTHAMORALES@gmail.com", 5);
INSERT INTO auxiliar(nombres, apellidos, identificacion, contacto, documentos, correo, idEmpresa) VALUES ("DIANA LUCÍA", "IÑIGUEZ IÑIGUEZ", "16078105", "Cll28#2", "16078105.pdf", "DIANAIÑIGUEZ@gmail.com", 5);
INSERT INTO auxiliar(nombres, apellidos, identificacion, contacto, documentos, correo, idEmpresa) VALUES ("JAIME VICENTE", "CHUCHUCA SERRANO", "16078225", "Cll25#608", "16078225.pdf", "JAIMECHUCHUCA@gmail.com", 6);
INSERT INTO auxiliar(nombres, apellidos, identificacion, contacto, documentos, correo, idEmpresa) VALUES ("SAHIRA MARIBEL", "MARTINEZ CEPEDA", "16079995", "Cll10#809", "16079995.pdf", "SAHIRAMARTINEZ@gmail.com", 6);
INSERT INTO auxiliar(nombres, apellidos, identificacion, contacto, documentos, correo, idEmpresa) VALUES ("XAVIER EDUARDO", "MONTALVO APONTE", "24332500", "Cra12#1900", "24332500.pdf", "XAVIERMONTALVO@gmail.com", 6);
INSERT INTO auxiliar(nombres, apellidos, identificacion, contacto, documentos, correo, idEmpresa) VALUES ("ALEX RUBEN", "COBOS VELOZ", "24335463", "Cll5#448", "24347523.pdf", "ALEXCOBOS@gmail.com", 7);
INSERT INTO auxiliar(nombres, apellidos, identificacion, contacto, documentos, correo, idEmpresa) VALUES ("MIREYA KATERINE", "PAZMIÑO ARREGUI", "24606525", "Cll16#328", "24606525.pdf", "MIREYAPAZMIÑO@gmail.com", 8);

SELECT * FROM auxiliar;
/*DELETE FROM auxiliar WHERE idAuxiliar = 1;*/

/* Registros Pacientes */
INSERT INTO paciente(nombres, apellidos, dependencia, edad, idAcudiente) VALUES ("DANILO FERNANDO", "GARCÍA GARCÍA", "Alzheimer", 85, 1);
INSERT INTO paciente(nombres, apellidos, dependencia, edad, idAcudiente) VALUES ("OSWALDO ERNESTO", "LOPEZ BRAVO", "Esclerosis lateral amiotrófica", 60, 2);
INSERT INTO paciente(nombres, apellidos, dependencia, edad, idAcudiente) VALUES ("JUAN JOSE", "ORTEGA VINTIMILLA", "Ataxia de Friedreich", 78, 3);
INSERT INTO paciente(nombres, apellidos, dependencia, edad, idAcudiente) VALUES ("GEOVANNY RAMIRO", "CABEZAS VELASCO", "Enfermedad de Huntington", 92, 4);
INSERT INTO paciente(nombres, apellidos, dependencia, edad, idAcudiente) VALUES ("MARLENE ALEXANDRA", "NARVAEZ CALVACHI", "Demencia con cuerpos de Lewy", 78, 5);
INSERT INTO paciente(nombres, apellidos, dependencia, edad, idAcudiente) VALUES ("LENIN EDUARDO", "SAGUAY SANAGUANO", "Enfermedad de Parkinson", 68, 6);
INSERT INTO paciente(nombres, apellidos, dependencia, edad, idAcudiente) VALUES ("HERNÁN SEBASTIÁN", "LÓPEZ MONTERO", "Atrofia muscular espinal", 72, 7);
INSERT INTO paciente(nombres, apellidos, dependencia, edad, idAcudiente) VALUES ("PEDRO", "GUARACA CUÑAS", "Ataxia de Friedreich", 69, 8);
INSERT INTO paciente(nombres, apellidos, dependencia, edad, idAcudiente) VALUES ("RAQUEL ALEJANDRA", "ARCOS CABEZAS", "Alzheimer", 82, 9);
INSERT INTO paciente(nombres, apellidos, dependencia, edad, idAcudiente) VALUES ("GEORGINA PIEDAD", "PANCHEZ HERNANDEZ", "Atrofia muscular espinal.", 90, 5);

SELECT * FROM paciente;


/* Registros Acudientes */
INSERT INTO acudiente(nombres, apellidos, identificacion, contacto, correo, direccion) VALUES ("KARINA MONSERRATH", "MASACHE ALVARADO", 30239947, "273-1018", "KARINA@gmail.com", "Cll45#12");
INSERT INTO acudiente(nombres, apellidos, identificacion, contacto, correo, direccion) VALUES ("DIEGO JAVIER", "CAJAS LOGROÑO", 30239992, " 273-4522", "DIEGO@gmail.com", "Cll56#89");
INSERT INTO acudiente(nombres, apellidos, identificacion, contacto, correo, direccion) VALUES ("RICARDO ISRAEL", "VALENCIA CUVIÑA", 30304907, "672-6200", "RICARDO@gmail.com", "CRA89#12");
INSERT INTO acudiente(nombres, apellidos, identificacion, contacto, correo, direccion) VALUES ("LILLI LUCIA", "ROMERO PACHECO", 30393296, "745-8449", "LILLI@gmail.com", "CRA78#20");
INSERT INTO acudiente(nombres, apellidos, identificacion, contacto, correo, direccion) VALUES ("SUSANA DEL ROCIO", "ANDRADE SOTO", 30397734, "421-7794", "SUSANA@gmail.com", "CRA87#12");
INSERT INTO acudiente(nombres, apellidos, identificacion, contacto, correo, direccion) VALUES ("JOSÉ ELIECER", "CHICAIZA RONQUILLO", 30399657, "421-7817", "ELIECER@gmail.com", "CLL45#69");
INSERT INTO acudiente(nombres, apellidos, identificacion, contacto, correo, direccion) VALUES ("EDGAR GUILLERNO", "GUASCA TULMO", 34001147, "420-9244", "GUILLERNO@gmail.com", "CLL74#15");
INSERT INTO acudiente(nombres, apellidos, identificacion, contacto, correo, direccion) VALUES ("GUSTAVO PATRICIO", "MENA ZAPATA", 52033236, "722-9393", "PATRICIO@gmail.com", "CRA73#19");
INSERT INTO acudiente(nombres, apellidos, identificacion, contacto, correo, direccion) VALUES ("LOURDES DEL ROCÍO", "LARA VALENCIA ", 52355683, "871-2112", "LOURDES@gmail.com", "CLL47#92");

SELECT * FROM acudiente;
/*ALTER TABLE acudiente ADD COLUMN contrasenia VARCHAR(10) NOT NULL DEFAULT "00000";*/
/*DELETE FROM acudiente WHERE idAcudiente = 12;*/

/* Registro Historial */
INSERT INTO historial (idPaciente, detalle) VALUES (2, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
INSERT INTO historial (idPaciente, detalle) VALUES (3, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
INSERT INTO historial (idPaciente, detalle) VALUES (4, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
INSERT INTO historial (idPaciente, detalle) VALUES (5, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
INSERT INTO historial (idPaciente, detalle) VALUES (6, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
INSERT INTO historial (idPaciente, detalle) VALUES (7, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
INSERT INTO historial (idPaciente, detalle) VALUES (8, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
INSERT INTO historial (idPaciente, detalle) VALUES (9, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
INSERT INTO historial (idPaciente, detalle) VALUES (10, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
INSERT INTO historial (idPaciente, detalle) VALUES (11, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");

SELECT * FROM historial;


/* Registro de Notas */
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 2, 5);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 3, 6);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 4, 7);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 5, 8);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 6, 9);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 7, 10);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 8, 11);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 9, 12);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 10, 13);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 11, 14);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 2, 5);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 3, 6);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 4, 7);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 6, 9);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 8, 11);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 8, 11);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 8, 11);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 11, 14);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 11, 14);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 11, 14);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 2, 5);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 7, 10);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 2, 5);
INSERT INTO nota(descripcion, comentarios, titulo, idPaciente, idAuxiliar) VALUES ("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh viverra non semper suscipit posuere a pede.", "Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.", "Aliquam tincidunt mauris eu risus.", 2, 5);

SELECT * FROM nota;


/* CONSULTAS SQL */
SELECT * FROM acudiente WHERE correo = "" AND contrasenia = "";
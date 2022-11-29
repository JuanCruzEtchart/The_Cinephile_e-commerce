-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 29-11-2022 a las 09:23:48
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `the_cinephile`
--
CREATE DATABASE IF NOT EXISTS `the_cinephile` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `the_cinephile`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actors`
--

CREATE TABLE `actors` (
  `id` int(11) NOT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `biography_link` varchar(500) DEFAULT NULL,
  `actors_photo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `actors`
--

INSERT INTO `actors` (`id`, `full_name`, `biography_link`, `actors_photo`) VALUES
(1, 'Marlon Brando', 'https://en.wikipedia.org/wiki/Marlon_Brando', '????\0JFIF\0\0\0\0\0\0??\0?\0\n\Z\Z\Z\Z\Z\Z\Z\Z\Z\Z\Z\Z!.%!+!\Z&8&+/1555\Z$;@;4?.451'),
(2, NULL, NULL, NULL),
(3, NULL, NULL, NULL),
(4, 'Pepito', 'https://stackoverflow.com/questions/14704559/how-to-insert-image-in-mysql-databasetable', NULL),
(5, 'Carlitos', 'http://localhost:3030/product/create/productionTeam', NULL),
(6, 'A', 'http://localhost:3030/product/create/productionTeam', NULL),
(7, 'b', 'http://localhost:3030/product/create/productionTeam', NULL),
(8, 'c', 'http://localhost:3030/product/create/productionTeam', 'photo1669334238965-.jpg'),
(9, 'Leo Messi', 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio', 'photo1669358186580-.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actor_character`
--

CREATE TABLE `actor_character` (
  `id` int(11) NOT NULL,
  `actor_id` int(11) DEFAULT NULL,
  `character_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `actor_character`
--

INSERT INTO `actor_character` (`id`, `actor_id`, `character_id`) VALUES
(7, 1, 2),
(8, 9, 5),
(9, 4, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actor_product`
--

CREATE TABLE `actor_product` (
  `id` int(11) NOT NULL,
  `actor_id` int(10) DEFAULT NULL,
  `product_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `actor_product`
--

INSERT INTO `actor_product` (`id`, `actor_id`, `product_id`) VALUES
(14, 4, 11),
(15, 5, 11),
(16, 4, 12),
(17, 8, 12),
(18, 9, 13),
(19, 1, 14),
(20, 4, 14),
(21, 1, 15),
(22, 4, 15),
(23, 1, 16),
(24, 1, 17),
(25, 1, 18),
(27, 1, 19),
(29, 4, 20),
(30, 1, 21),
(31, 4, 21),
(32, 1, 22),
(33, 4, 22),
(34, 1, 23),
(35, 5, 23),
(36, 9, 24),
(37, 1, 24),
(40, 9, 26),
(41, 1, 26),
(42, 5, 27),
(43, 9, 27),
(44, 1, 28),
(45, 4, 28),
(46, 1, 29),
(47, 4, 29),
(48, 1, 30),
(49, 4, 30),
(50, 1, 31),
(51, 5, 31),
(58, 1, 34),
(59, 1, 35),
(60, 4, 35),
(61, 1, 36),
(62, 4, 36),
(77, 1, 44),
(78, 5, 44),
(79, 9, 44),
(80, 1, 45),
(81, 4, 45),
(82, 9, 45);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `characters`
--

CREATE TABLE `characters` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `characters`
--

INSERT INTO `characters` (`id`, `name`) VALUES
(1, 'Iron Man'),
(2, 'Batman'),
(3, 'Thomas Shelby'),
(4, 'Messi'),
(5, 'aaaaaaa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `directors`
--

CREATE TABLE `directors` (
  `id` int(10) NOT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `biography_link` varchar(500) DEFAULT NULL,
  `directors_photo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `directors`
--

INSERT INTO `directors` (`id`, `full_name`, `biography_link`, `directors_photo`) VALUES
(1, 'Francis Ford Coppola', 'https://en.wikipedia.org/wiki/Francis_Ford_Coppola', NULL),
(2, 'Vince Gilligan', 'https://en.wikipedia.org/wiki/Vince_Gilligan', NULL),
(3, 'Carlitos', 'https://en.wikipedia.org/wiki/Diane_Keaton', NULL),
(4, 'asdad', 'https://digitalhouse.zoom.us/my/aulavirtual10 ', NULL),
(5, 'a', 'http://localhost:3030/product/create/productionTeam', NULL),
(6, 'a', 'http://localhost:3030/product/create/productionTeam', 'photo1669334311461-.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int(10) NOT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Acción'),
(2, 'Crimen'),
(3, 'Drama'),
(4, 'Infantil'),
(5, 'Terror'),
(6, 'Aventura'),
(7, 'Ciencia Ficción'),
(8, 'Fantasía'),
(9, 'Musical'),
(10, 'Bélico'),
(11, 'Comedia'),
(12, 'Sitcom'),
(13, 'Sátira'),
(14, 'Suspenso'),
(15, 'Documental'),
(16, 'Animación');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) NOT NULL,
  `type` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `release_year` smallint(4) DEFAULT NULL,
  `rating` varchar(30) DEFAULT NULL,
  `length` varchar(30) DEFAULT NULL,
  `imdb_score` decimal(3,1) DEFAULT NULL,
  `imdb_total_reviews` varchar(30) DEFAULT NULL,
  `tomato_score` int(3) DEFAULT NULL,
  `trailer_link` varchar(500) DEFAULT NULL,
  `purchase_price` decimal(6,2) DEFAULT NULL,
  `rental_price` decimal(6,2) DEFAULT NULL,
  `synopsis` text DEFAULT NULL,
  `director_id` int(10) DEFAULT NULL,
  `screenwriter_id` int(10) DEFAULT NULL,
  `product_image` varchar(100) DEFAULT NULL,
  `background_image` varchar(100) DEFAULT NULL,
  `genre1_id` int(10) DEFAULT NULL,
  `genre2_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `type`, `name`, `release_year`, `rating`, `length`, `imdb_score`, `imdb_total_reviews`, `tomato_score`, `trailer_link`, `purchase_price`, `rental_price`, `synopsis`, `director_id`, `screenwriter_id`, `product_image`, `background_image`, `genre1_id`, `genre2_id`) VALUES
(1, '', 'El Padrino', 1972, 'R', '2h 55m', '9.0', '1,8 M', 97, 'https://www.youtube.com/watch?v=UaVTIH8mujA', '1559.00', '499.00', 'Don Vito Corleone es el jefe de una de las cinco familias que ejercen el mando de la \r\nCosa Nostra en Nueva York en los años 40. Don Corleone tiene cuatro hijos; una \r\nchica, Connie, y tres varones, Santino, o Sonny, como le gusta que le llamen, Michael \r\ny Freddie, al que envían exiliado a Las Vegas, dada su incapacidad para asumir \r\npuestos de mando en la ”Familia”. Cuando otro capo, Sollozzo, al rechazar el \r\nPadrino intervenir en el negocio de estupefacientes, intenta asesinar a éste, \r\nempieza una cruenta lucha de violentos episodios entre los distintos grupos.', 1, 1, '?PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0?\0\0Y\0\0\0?1?\0\0\0 \0IDATx^??ٓ$?u?yc?ȵr?-??P????@iZ?=??6?1?MO??4o????4??L?i', NULL, 2, 3),
(3, '', 'El Padrino', 1972, 'R', '2h 55m', '9.0', '1,8 M', 97, 'https://www.youtube.com/watch?v=UaVTIH8mujA', '1559.00', '499.00', 'Don Vito Corleone es el jefe de una de las cinco familias que ejercen el mando de la \r\nCosa Nostra en Nueva York en los años 40. Don Corleone tiene cuatro hijos; una \r\nchica, Connie, y tres varones, Santino, o Sonny, como le gusta que le llamen, Michael \r\ny Freddie, al que envían exiliado a Las Vegas, dada su incapacidad para asumir \r\npuestos de mando en la ”Familia”. Cuando otro capo, Sollozzo, al rechazar el \r\nPadrino intervenir en el negocio de estupefacientes, intenta asesinar a éste, \r\nempieza una cruenta lucha de violentos episodios entre los distintos grupos.', 1, 1, NULL, NULL, 7, 3),
(4, '', 'El Padrino', 1972, 'R', '2h 55m', '9.0', '1,8 M', 97, 'https://www.youtube.com/watch?v=UaVTIH8mujA', '1559.00', '499.00', 'Don Vito Corleone es el jefe de una de las cinco familias que ejercen el mando de la \r\nCosa Nostra en Nueva York en los años 40. Don Corleone tiene cuatro hijos; una \r\nchica, Connie, y tres varones, Santino, o Sonny, como le gusta que le llamen, Michael \r\ny Freddie, al que envían exiliado a Las Vegas, dada su incapacidad para asumir \r\npuestos de mando en la ”Familia”. Cuando otro capo, Sollozzo, al rechazar el \r\nPadrino intervenir en el negocio de estupefacientes, intenta asesinar a éste, \r\nempieza una cruenta lucha de violentos episodios entre los distintos grupos.', 1, 1, NULL, NULL, 2, 3),
(11, '', 'Iron Man', 2007, 'R', '2h 55m', '9.2', '1,8 M', 97, 'https://stackoverflow.com/questions/31258158/how-to-implement-search-feature-using-sequelizejs', '1500.00', '1600.00', 'Milanesa', 1, 2, 'productImage1669354269086-.jpg', 'backgroundImage1669354269087-.jpg', 1, 6),
(12, '', 'Iron Man', 2007, 'R', '2h 55m', '9.2', '1,8 M', 97, 'https://stackoverflow.com/questions/31258158/how-to-implement-search-feature-using-sequelizejs', '1500.00', '1600.00', 'Milanesa', 1, 2, 'productImage1669354269086-.jpg', 'backgroundImage1669354269087-.jpg', 1, 6),
(13, '', 'Mundial', 2022, 'G', '2h 55m', '10.0', '1,8 M', 100, 'https://www.youtube.com/watch?v=UaVTIH8mujA', '5.00', '500.00', 'Hola', 2, 1, 'productImage1669358277670-.jpg', 'backgroundImage1669358277683-.jpg', 2, 7),
(14, '', 'Iron Man', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669435419301-.jpg', 'backgroundImage1669435419317-.jpg', 1, 3),
(15, '', 'Iron Man', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669435419301-.jpg', 'backgroundImage1669435419317-.jpg', 1, 3),
(16, '', 'Iron Man', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669435419301-.jpg', 'backgroundImage1669435419317-.jpg', 1, 3),
(17, '', 'Iron Man', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669435419301-.jpg', 'backgroundImage1669435419317-.jpg', 1, 3),
(18, '', 'Iron Man', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669435419301-.jpg', 'backgroundImage1669435419317-.jpg', 1, 3),
(19, '', 'Iron Man', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669435419301-.jpg', 'backgroundImage1669435419317-.jpg', 1, 3),
(20, '', 'Iron Man', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669435419301-.jpg', 'backgroundImage1669435419317-.jpg', 1, 3),
(21, '', 'Iron Man', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669435419301-.jpg', 'backgroundImage1669435419317-.jpg', 1, 3),
(22, 'Película', 'Iron Maaan', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669445228288-.jpg', 'backgroundImage1669445228288-.jpg', 1, 3),
(23, 'Serie de TV', 'Iron ManTV', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669445872864-.jpg', 'backgroundImage1669445872882-.jpg', 1, 3),
(24, 'Serie de TV', 'Iron a', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669446065005-.jpg', 'backgroundImage1669446065089-.jpg', 1, 3),
(26, 'Película', 'Iron a', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669531133987-.jpg', 'backgroundImage1669531133991-.jpg', 1, 3),
(27, 'Película', 'Iron a', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669531133987-.jpg', 'backgroundImage1669531133991-.jpg', 1, 3),
(28, 'Película', 'Iron a', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669531351800-.jpg', 'backgroundImage1669531351806-.jpg', 1, 3),
(29, 'Película', 'Iron a', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669531351800-.jpg', 'backgroundImage1669531351806-.jpg', 1, 3),
(30, 'Película', 'Iron a', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669531351800-.jpg', 'backgroundImage1669531351806-.jpg', 1, 3),
(31, 'Serie de TV', 'Iron aAA', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669536164993-.jpg', 'backgroundImage1669536164994-.jpg', 1, 3),
(34, 'Película', 'Iron Man', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669435419301-.jpg', 'backgroundImage1669435419317-.jpg', 1, 3),
(35, 'Película', 'Iron Man', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669435419301-.jpg', 'backgroundImage1669435419317-.jpg', 1, 3),
(36, 'Película', 'Iron Man', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 2, 2, 'productImage1669435419301-.jpg', 'backgroundImage1669435419317-.jpg', 1, 3),
(41, 'Serie de TV', 'Prueba', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 3, 1, 'productImage1669708507505-.jpg', 'backgroundImage1669708507507-.jpg', 1, 3),
(42, 'Serie de TV', 'Prueba', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 3, 1, 'productImage1669708507505-.jpg', 'backgroundImage1669708507507-.jpg', 1, 3),
(44, 'Serie de TV', 'Prueba', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 3, 1, 'productImage1669708733395-.jpg', 'backgroundImage1669708733446-.jpg', 1, 3),
(45, 'Serie de TV', 'Prueba', 2005, 'R', '2h 55m', '8.0', '1,8 M', 80, 'http://localhost/phpmyadmin/index.php?route=/table/structure&db=the_cinephile&table=actor_character', '1500.00', '1500.00', 'Hola!', 3, 1, 'productImage1669708733395-.jpg', 'backgroundImage1669708733446-.jpg', 1, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_character`
--

CREATE TABLE `product_character` (
  `id` int(11) NOT NULL,
  `product_id` int(10) DEFAULT NULL,
  `character_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product_character`
--

INSERT INTO `product_character` (`id`, `product_id`, `character_id`) VALUES
(1, 14, NULL),
(2, 14, NULL),
(3, 15, 1),
(4, 15, 2),
(5, 16, 1),
(6, 17, 2),
(7, 18, 2),
(9, 19, 1),
(11, 20, 1),
(12, 21, 1),
(13, 21, 2),
(14, 22, 1),
(15, 22, 2),
(16, 23, 1),
(17, 23, 2),
(18, 24, 1),
(19, 24, 2),
(22, 26, 2),
(23, 26, 1),
(24, 27, 1),
(25, 27, 2),
(26, 28, 1),
(27, 28, 2),
(28, 29, 2),
(29, 29, 1),
(30, 30, 2),
(31, 30, 1),
(32, 31, 1),
(33, 31, 2),
(40, 34, 2),
(41, 35, 1),
(42, 35, 3),
(43, 36, 3),
(44, 36, 1),
(59, 44, 2),
(60, 44, 1),
(61, 44, 3),
(62, 45, 2),
(63, 45, 3),
(64, 45, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `screenwriters`
--

CREATE TABLE `screenwriters` (
  `id` int(11) NOT NULL,
  `full_name` varchar(100) DEFAULT NULL,
  `biography_link` varchar(500) DEFAULT NULL,
  `screenwriter_photo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `screenwriters`
--

INSERT INTO `screenwriters` (`id`, `full_name`, `biography_link`, `screenwriter_photo`) VALUES
(1, 'Mario Puzo', 'https://en.wikipedia.org/wiki/Mario_Puzo', ''),
(2, 'Vince Gilligan', 'https://en.wikipedia.org/wiki/Vince_Gilligan', ''),
(4, 'carlit', 'https://en.wikipedia.org/wiki/Diane_Keaton', NULL),
(5, 'a', 'http://localhost:3030/product/create/productionTeam', 'photo1669334319003-.png');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `actor_character`
--
ALTER TABLE `actor_character`
  ADD PRIMARY KEY (`id`),
  ADD KEY `actor_id` (`actor_id`),
  ADD KEY `character_id` (`character_id`);

--
-- Indices de la tabla `actor_product`
--
ALTER TABLE `actor_product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `actor_id` (`actor_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indices de la tabla `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `directors`
--
ALTER TABLE `directors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genre1_id` (`genre1_id`),
  ADD KEY `genre2_id` (`genre2_id`),
  ADD KEY `director_id` (`director_id`),
  ADD KEY `screenwriter_id` (`screenwriter_id`);

--
-- Indices de la tabla `product_character`
--
ALTER TABLE `product_character`
  ADD PRIMARY KEY (`id`),
  ADD KEY `character_id` (`character_id`),
  ADD KEY `movie_id` (`product_id`);

--
-- Indices de la tabla `screenwriters`
--
ALTER TABLE `screenwriters`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actors`
--
ALTER TABLE `actors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `actor_character`
--
ALTER TABLE `actor_character`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `actor_product`
--
ALTER TABLE `actor_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT de la tabla `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `directors`
--
ALTER TABLE `directors`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de la tabla `product_character`
--
ALTER TABLE `product_character`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

--
-- AUTO_INCREMENT de la tabla `screenwriters`
--
ALTER TABLE `screenwriters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actor_character`
--
ALTER TABLE `actor_character`
  ADD CONSTRAINT `actor_character_ibfk_1` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`),
  ADD CONSTRAINT `actor_character_ibfk_2` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`);

--
-- Filtros para la tabla `actor_product`
--
ALTER TABLE `actor_product`
  ADD CONSTRAINT `actor_product_ibfk_1` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`),
  ADD CONSTRAINT `actor_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`genre1_id`) REFERENCES `genres` (`id`),
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`genre2_id`) REFERENCES `genres` (`id`),
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`director_id`) REFERENCES `directors` (`id`),
  ADD CONSTRAINT `products_ibfk_4` FOREIGN KEY (`screenwriter_id`) REFERENCES `screenwriters` (`id`);

--
-- Filtros para la tabla `product_character`
--
ALTER TABLE `product_character`
  ADD CONSTRAINT `product_character_ibfk_1` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`),
  ADD CONSTRAINT `product_character_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

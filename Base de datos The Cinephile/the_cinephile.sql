-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-01-2023 a las 09:41:14
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
(1, 'Marlon Brando', 'https://en.wikipedia.org/wiki/Marlon_Brando', 'photo1669785564417-.jpg'),
(2, 'Al Pacino', 'https://en.wikipedia.org/wiki/Al_Pacino', 'photo1669785579035-.jpg'),
(3, 'Diane Keaton', 'https://en.wikipedia.org/wiki/Diane_Keaton', 'photo1669785592469-.jpg'),
(4, 'James Caan', 'https://en.wikipedia.org/wiki/James_Caan', 'photo1669785609059-.jpg'),
(5, 'John Cazale', 'https://en.wikipedia.org/wiki/John_Cazale', 'photo1669785629518-.jpg'),
(6, 'Robert Duvall', 'https://en.wikipedia.org/wiki/Robert_Duvall', 'photo1669785651535-.png'),
(7, 'Richard S. Castellano', 'https://en.wikipedia.org/wiki/Richard_S._Castellano', 'photo1669785665694-.jpg'),
(17, 'Cillian Murphy', 'https://en.wikipedia.org/wiki/Cillian_Murphy', 'photo1669787007554-.jpg'),
(18, 'Paul Anderson', 'https://en.wikipedia.org/wiki/Paul_Anderson_(actor)', 'photo1669787027577-.jpg'),
(19, 'Tom Hardy', 'https://en.wikipedia.org/wiki/Tom_Hardy', 'photo1669787065018-.jpg'),
(20, 'Helen McCrory', 'https://en.wikipedia.org/wiki/Helen_McCrory', 'photo1669787089815-.jpg'),
(21, 'Sophie Rundle', 'https://en.wikipedia.org/wiki/Sophie_Rundle', 'photo1669787105990-.jpg'),
(22, 'Joe Cole', 'https://en.wikipedia.org/wiki/Joe_Cole_(actor)', 'photo1669787119754-.jpg'),
(23, 'Finn Cole', 'https://en.wikipedia.org/wiki/Finn_Cole', 'photo1669787175078-.jpg'),
(24, 'Anya Taylor-Joy', 'https://en.wikipedia.org/wiki/Anya_Taylor-Joy', 'photo1669787185548-.jpg'),
(25, 'Natasha O\'Keeffe', 'https://en.wikipedia.org/wiki/Natasha_O%27Keeffe', 'photo1669787196892-.jpg'),
(26, 'Martin Sheen', 'https://en.wikipedia.org/wiki/Martin_Sheen', 'photo1669787568809-.jpg'),
(27, 'Dennis Hopper', 'https://en.wikipedia.org/wiki/Dennis_Hopper', 'photo1669787582320-.jpg'),
(28, 'Laurence Fishburne', 'https://en.wikipedia.org/wiki/Laurence_Fishburne', 'photo1669787599968-.jpg'),
(29, 'Harrison Ford', 'https://en.wikipedia.org/wiki/Harrison_Ford', 'photo1669787616002-.jpg'),
(30, 'Jerry Ziesmer', 'https://en.wikipedia.org/wiki/Jerry_Ziesmer', 'photo1669787631521-.jpg'),
(31, 'Sam Bottoms', 'https://en.wikipedia.org/wiki/Sam_Bottoms', 'photo1669787645638-.jpg'),
(32, 'Frederic Forrest', 'https://en.wikipedia.org/wiki/Frederic_Forrest', 'photo1669787658382-.jpg'),
(33, 'Robert De Niro', 'https://en.wikipedia.org/wiki/Robert_De_Niro', 'photo1669788033441-.jpg'),
(34, 'Talia Shire', 'https://en.wikipedia.org/wiki/Talia_Shire', 'photo1669788051821-.jpg'),
(35, 'Michael V. Gazzo', 'https://en.wikipedia.org/wiki/Michael_V._Gazzo', 'photo1669788065939-.jpg'),
(36, 'Bruno Kirby', 'https://en.wikipedia.org/wiki/Bruno_Kirby', 'photo1669788080398-.jpg'),
(37, 'Lee Strasberg', 'https://en.wikipedia.org/wiki/Lee_Strasberg', 'photo1669788100540-.jpg'),
(38, 'Gary Oldman', 'https://en.wikipedia.org/wiki/Gary_Oldman', 'photo1669788571062-.jpg'),
(39, 'Winona Ryder', 'https://en.wikipedia.org/wiki/Winona_Ryder', 'photo1669788586232-.jpg'),
(40, 'Anthony Hopkins', 'https://en.wikipedia.org/wiki/Anthony_Hopkins', 'photo1669788597746-.jpg'),
(41, 'Keanu Reeves', 'https://en.wikipedia.org/wiki/Keanu_Reeves', 'photo1669788610846-.jpg'),
(42, 'Richard E. Grant', 'https://en.wikipedia.org/wiki/Richard_E._Grant', 'photo1669788625934-.jpg'),
(43, 'Monica Bellucci', 'https://en.wikipedia.org/wiki/Monica_Bellucci', 'photo1669788636763-.jpg'),
(44, 'Sadie Frost', 'https://en.wikipedia.org/wiki/Sadie_Frost', 'photo1669788652501-.jpg'),
(45, 'Cary Elwes', 'https://en.wikipedia.org/wiki/Cary_Elwes', 'photo1669788665941-.jpg'),
(46, 'Tom Waits', 'https://en.wikipedia.org/wiki/Tom_Waits', 'photo1669788679792-.jpg'),
(47, 'Billy Campbell', 'https://en.wikipedia.org/wiki/Billy_Campbell', 'photo1669788692353-.jpg'),
(48, 'Jodie Foster', 'https://en.wikipedia.org/wiki/Jodie_Foster', 'photo1669790992900-.jpg'),
(49, 'Cybill Shepherd', 'https://en.wikipedia.org/wiki/Cybill_Shepherd', 'photo1669791009444-.jpg'),
(50, 'Albert Brooks', 'https://en.wikipedia.org/wiki/Albert_Brooks', 'photo1669791021716-.jpg'),
(51, 'Harvey Keitel', 'https://en.wikipedia.org/wiki/Harvey_Keitel', 'photo1669791037186-.jpg'),
(52, 'Peter Boyle', 'https://en.wikipedia.org/wiki/Peter_Boyle', 'photo1669791051186-.jpg'),
(53, 'Bryan Cranston', 'https://en.wikipedia.org/wiki/Bryan_Cranston', 'photo1669791721607-.jpg'),
(54, 'Aaron Paul', 'https://en.wikipedia.org/wiki/Aaron_Paul', 'photo1669791733125-.jpg'),
(55, 'Anna Gun', 'https://en.wikipedia.org/wiki/Anna_Gunn', 'photo1669791746081-.jpg'),
(56, 'Dean Norris', 'https://en.wikipedia.org/wiki/Dean_Norris', 'photo1669791782497-.jpg'),
(57, 'RJ Mitte', 'https://en.wikipedia.org/wiki/RJ_Mitte', 'photo1669791799578-.jpg'),
(58, 'Bob Odenkirk', 'https://en.wikipedia.org/wiki/Bob_Odenkirk', 'photo1669791811119-.jpg'),
(59, 'Jonathan Banks', 'https://en.wikipedia.org/wiki/Jonathan_Banks', 'photo1669791824316-.jpg'),
(60, 'Giancarlo Esposito', 'https://en.wikipedia.org/wiki/Giancarlo_Esposito', 'photo1669791844557-.jpg'),
(61, 'Betsy Brandt', 'https://en.wikipedia.org/wiki/Betsy_Brandt', 'photo1669791855715-.jpg'),
(62, 'Steven Michael Quezada', 'https://en.wikipedia.org/wiki/Steven_Michael_Quezada', 'photo1669791871457-.jpg'),
(63, 'Rhea Seehorn', 'https://en.wikipedia.org/wiki/Rhea_Seehorn', 'photo1669792271258-.jpg'),
(64, 'Michael Mando', 'https://en.wikipedia.org/wiki/Michael_Mando', 'photo1669792284977-.jpg'),
(65, 'Patrick Fabian', 'https://en.wikipedia.org/wiki/Patrick_Fabian', 'photo1669792296352-.jpg'),
(66, 'Tony Dalton', 'https://en.wikipedia.org/wiki/Tony_Dalton', 'photo1669792308658-.jpg'),
(67, 'Michael McKean', 'https://en.wikipedia.org/wiki/Michael_McKean', 'photo1669792323632-.jpg'),
(68, 'Lavell Crawford', 'https://en.wikipedia.org/wiki/Lavell_Crawford', 'photo1669792335064-.jpg'),
(69, 'Wagner Moura', 'https://en.wikipedia.org/wiki/Wagner_Moura', 'photo1669792721241-.jpg'),
(70, 'Pedro Pascal', 'https://en.wikipedia.org/wiki/Pedro_Pascal', 'photo1669792734652-.jpg'),
(71, 'Boyd Holbrook', 'https://en.wikipedia.org/wiki/Boyd_Holbrook', 'photo1669792749107-.jpg'),
(72, 'Alberto Ammann', 'https://en.wikipedia.org/wiki/Alberto_Ammann', 'photo1669792879231-.jpg'),
(73, 'Andrea Londo', 'https://en.wikipedia.org/wiki/Andrea_Londo', 'photo1669792896797-.jpg'),
(74, 'Paulina Gaitán', 'https://es.wikipedia.org/wiki/Paulina_Gaitán', 'photo1669792915196-.jpg'),
(75, 'Joanna Christie', 'https://en.wikipedia.org/wiki/Joanna_Christie', 'photo1669792931594-.jpg'),
(76, 'Steve Carrel', 'https://en.wikipedia.org/wiki/Steve_Carell', 'photo1669793365811-.jpg'),
(77, 'John Krasinski', 'https://en.wikipedia.org/wiki/John_Krasinski', 'photo1669793376637-.jpg'),
(78, 'Jenna Fischer', 'https://en.wikipedia.org/wiki/Jenna_Fischer', 'photo1669793388654-.jpg'),
(79, 'Rainn Wilson', 'https://en.wikipedia.org/wiki/Rainn_Wilson', 'photo1669793411093-.jpg'),
(80, 'Ellie Kemper', 'https://en.wikipedia.org/wiki/Ellie_Kemper', 'photo1669793422064-.jpg'),
(81, 'B. J. Novak', 'https://en.wikipedia.org/wiki/B._J._Novak', 'photo1669793435465-.jpg'),
(82, 'Ed Helms', 'https://en.wikipedia.org/wiki/Ed_Helms', 'photo1669793445074-.jpg'),
(83, 'Angela Kinsey', 'https://en.wikipedia.org/wiki/Angela_Kinsey', 'photo1669793457771-.jpg'),
(84, 'Oscar Nuñez', 'https://es.wikipedia.org/wiki/Óscar_Núñez_(actor_cubano)', 'photo1669793469571-.jpg'),
(85, 'Creed Bratton', 'https://en.wikipedia.org/wiki/Creed_Bratton', 'photo1669793481445-.jpg'),
(88, 'Robert Downey Jr.', 'https://es.wikipedia.org/wiki/Robert_Downey_Jr.', 'photo1672810420246-.jpg'),
(89, 'Gwyneth Paltrow', 'https://es.wikipedia.org/wiki/Gwyneth_Paltrow', 'photo1672810461202-.jpg'),
(90, 'Terrence Howard', 'https://en.wikipedia.org/wiki/Terrence_Howard', 'photo1672810509064-.jpg'),
(91, 'Jeff Bridges', 'https://en.wikipedia.org/wiki/Jeff_Bridges', 'photo1672810587503-.jpg'),
(92, 'Leslie Bibb', 'https://en.wikipedia.org/wiki/Leslie_Bibb', 'photo1672810633715-.jpg'),
(93, 'Clark Gregg', 'https://en.wikipedia.org/wiki/Clark_Gregg', 'photo1672810750451-.jpg'),
(94, 'Matthew McConaughey', 'https://en.wikipedia.org/wiki/Matthew_McConaughey', 'photo1674426219509-.jpg'),
(95, 'Anne Hathaway', 'https://en.wikipedia.org/wiki/Anne_Hathaway', 'photo1674426282010-.jpg'),
(96, 'Jessica Chastain', 'https://en.wikipedia.org/wiki/Jessica_Chastain', 'photo1674426465606-.jpg'),
(97, 'Michael Caine', 'https://en.wikipedia.org/wiki/Michael_Caine', 'photo1674426618415-.jpg'),
(98, 'Timothée Chalamet', 'https://en.wikipedia.org/wiki/Timoth%C3%A9e_Chalamet', 'photo1674426688890-.jpg'),
(99, 'Wes Bentley', 'https://en.wikipedia.org/wiki/Wes_Bentley', 'photo1674426912732-.jpg'),
(100, 'Casey Affleck', 'https://en.wikipedia.org/wiki/Casey_Affleck', 'photo1674426961030-.jpg'),
(101, 'John Lithgow', 'https://en.wikipedia.org/wiki/John_Lithgow', 'photo1674427107806-.jpg'),
(102, 'Woody Harrelson', 'https://en.wikipedia.org/wiki/Woody_Harrelson', 'photo1674441288293-.jpg'),
(103, 'Michelle Monaghan', 'https://en.wikipedia.org/wiki/Michelle_Monaghan', 'photo1674441416988-.jpeg'),
(104, 'Mahershala Ali', 'https://en.wikipedia.org/wiki/Mahershala_Ali', 'photo1674441485539-.jpg'),
(105, 'Rachel McAdams', 'https://en.wikipedia.org/wiki/Rachel_McAdams', 'photo1674441520865-.jpg'),
(106, 'Colin Farrell', 'https://en.wikipedia.org/wiki/Colin_Farrell', 'photo1674441568230-.jpg'),
(107, 'Vince Vaughn', 'https://en.wikipedia.org/wiki/Vince_Vaughn', 'photo1674441615703-.jpg'),
(108, 'Jonathan Groff', 'https://en.wikipedia.org/wiki/Jonathan_Groff', 'photo1674448624831-.jpeg'),
(109, 'Holt McCallany', 'https://en.wikipedia.org/wiki/Holt_McCallany', 'photo1674448694628-.jpg'),
(110, 'Anna Torv', 'https://en.wikipedia.org/wiki/Anna_Torv', 'photo1674448793050-.jpg'),
(111, 'Cameron Britton', 'https://en.wikipedia.org/wiki/Cameron_Britton', 'photo1674448862163-.jpg'),
(112, 'Hannah Gross', 'https://en.wikipedia.org/wiki/Hannah_Gross', 'photo1674448940828-.jpg'),
(113, 'Stacey Roca', 'https://en.wikipedia.org/wiki/Stacey_Roca', 'photo1674449101580-.jpg'),
(114, 'Chloe Pirrie', 'https://en.wikipedia.org/wiki/Chloe_Pirrie', 'photo1674456176027-.jpg'),
(115, 'Bill Camp', 'https://en.wikipedia.org/wiki/Bill_Camp', 'photo1674456226577-.jpg'),
(116, 'Marcin Dorocinski', 'https://en.wikipedia.org/wiki/Marcin_Doroci%C5%84ski', 'photo1674456277001-.jpg'),
(117, 'Marielle Heller', 'https://en.wikipedia.org/wiki/Marielle_Heller', 'photo1674456308128-.jpg'),
(118, 'Thomas Brodie-Sangster', 'https://en.wikipedia.org/wiki/Thomas_Brodie-Sangster', 'photo1674456338301-.jpg'),
(119, 'Moses Ingram', 'https://en.wikipedia.org/wiki/Moses_Ingram', 'photo1674456393327-.jpg'),
(120, 'Leonardo DiCaprio', 'https://en.wikipedia.org/wiki/Leonardo_DiCaprio', 'photo1674458703997-.jpg'),
(121, 'Joseph Gordon-Levitt', 'https://en.wikipedia.org/wiki/Joseph_Gordon-Levitt', 'photo1674458753915-.jpg'),
(122, 'Elliot Page', 'https://en.wikipedia.org/wiki/Elliot_Page', 'photo1674458803159-.jpg'),
(123, 'Ken Watanabe', 'https://en.wikipedia.org/wiki/Ken_Watanabe', 'photo1674458838938-.jpg'),
(124, 'Dileep Rao', 'https://en.wikipedia.org/wiki/Dileep_Rao', 'photo1674458891976-.jpg'),
(125, 'Christian Bale', 'https://en.wikipedia.org/wiki/Christian_Bale', 'photo1674459571408-.jpg'),
(126, 'Hugh Jackman', 'https://en.wikipedia.org/wiki/Hugh_Jackman', 'photo1674459637645-.jpg'),
(127, 'Scarlett Johansson', 'https://en.wikipedia.org/wiki/Scarlett_Johansson', 'photo1674459706708-.jpg'),
(128, 'Piper Perabo', 'https://en.wikipedia.org/wiki/Piper_Perabo', 'photo1674459761307-.jpg'),
(129, 'Rebecca Hall', 'https://en.wikipedia.org/wiki/Rebecca_Hall', 'photo1674459796867-.jpg'),
(130, 'David Bowie', 'https://en.wikipedia.org/wiki/David_Bowie', 'photo1674459863694-.jpg'),
(131, 'Andy Serkis', 'https://en.wikipedia.org/wiki/Andy_Serkis', 'photo1674459898856-.jpg'),
(132, 'Samantha Mahurin', 'https://www.imdb.com/name/nm2195817/', 'photo1674459977818-.jpg');

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
(10, 1, 1),
(11, 2, 2),
(12, 3, 3),
(13, 4, 4),
(14, 5, 5),
(15, 6, 6),
(16, 7, 7),
(17, 17, 13),
(18, 18, 14),
(19, 19, 15),
(20, 20, 16),
(21, 21, 17),
(22, 22, 18),
(23, 23, 19),
(24, 24, 20),
(25, 25, 21),
(26, 1, 22),
(27, 6, 24),
(28, 26, 23),
(29, 27, 25),
(30, 28, 26),
(31, 29, 27),
(32, 30, 28),
(33, 31, 29),
(34, 32, 30),
(35, 2, 2),
(36, 33, 1),
(37, 3, 3),
(38, 6, 6),
(39, 5, 5),
(40, 34, 31),
(41, 35, 32),
(42, 36, 7),
(43, 37, 33),
(44, 38, 34),
(45, 39, 35),
(46, 40, 36),
(47, 41, 37),
(48, 43, 39),
(49, 42, 38),
(50, 44, 40),
(51, 45, 41),
(52, 46, 42),
(53, 47, 43),
(54, 33, 44),
(55, 48, 45),
(56, 49, 46),
(57, 50, 47),
(58, 51, 48),
(59, 52, 49),
(60, 53, 50),
(61, 54, 51),
(62, 55, 52),
(63, 56, 53),
(64, 57, 54),
(65, 58, 55),
(66, 59, 56),
(67, 60, 57),
(68, 61, 58),
(69, 62, 59),
(70, 58, 55),
(71, 63, 60),
(72, 59, 56),
(73, 64, 61),
(74, 65, 62),
(75, 66, 63),
(76, 67, 64),
(77, 60, 57),
(78, 69, 66),
(79, 70, 67),
(80, 71, 68),
(81, 72, 69),
(82, 74, 71),
(83, 73, 70),
(84, 75, 72),
(85, 76, 73),
(86, 77, 74),
(87, 78, 75),
(88, 79, 76),
(89, 80, 77),
(90, 81, 78),
(91, 82, 79),
(92, 83, 80),
(93, 84, 81),
(94, 85, 82),
(95, 54, 36),
(96, 2, 17),
(97, 2, 15),
(98, 71, 34),
(99, 58, 72),
(100, 54, 17),
(101, 81, 31),
(102, 40, 7),
(103, 2, 17),
(104, 88, 99),
(105, 89, 25),
(106, 90, 101),
(107, 91, 102),
(108, 93, 104),
(109, 92, 103),
(110, 72, 79),
(111, 61, 64),
(112, 36, 27),
(113, 36, 46),
(114, 61, 22),
(115, 55, 7),
(116, 2, 41),
(117, 36, 103),
(118, 24, 41),
(119, 24, 23),
(120, 50, 17),
(121, 50, 79),
(122, 71, 27),
(123, 71, 7),
(124, 33, 99),
(125, 89, 100),
(126, 90, 101),
(127, 33, 82),
(128, 88, 99),
(129, 91, 102),
(130, 89, 100),
(131, 90, 101),
(132, 92, 103),
(133, 93, 104),
(134, 94, 105),
(135, 95, 106),
(136, 96, 107),
(137, 97, 109),
(138, 98, 47),
(139, 99, 110),
(140, 101, 111),
(141, 94, 112),
(142, 102, 114),
(143, 106, 117),
(144, 105, 118),
(145, 107, 116),
(146, 104, 113),
(147, 103, 115),
(148, 108, 119),
(149, 110, 121),
(150, 109, 120),
(151, 112, 122),
(152, 111, 123),
(153, 113, 124),
(154, 24, 125),
(155, 114, 126),
(156, 115, 127),
(157, 116, 128),
(158, 118, 50),
(159, 117, 129),
(160, 119, 130),
(161, 120, 132),
(162, 121, 133),
(163, 122, 134),
(164, 123, 135),
(165, 19, 136),
(166, 124, 137),
(167, 17, 138),
(168, 125, 139),
(169, 126, 140),
(170, 127, 141),
(171, 97, 142),
(172, 128, 143),
(173, 132, 145),
(174, 129, 144),
(175, 130, 146),
(176, 131, 147);

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
(83, 1, 46),
(84, 2, 46),
(85, 3, 46),
(86, 4, 46),
(87, 5, 46),
(88, 6, 46),
(89, 7, 46),
(90, 17, 47),
(91, 18, 47),
(92, 19, 47),
(93, 20, 47),
(94, 21, 47),
(95, 22, 47),
(96, 23, 47),
(97, 24, 47),
(98, 25, 47),
(99, 1, 48),
(100, 26, 48),
(101, 6, 48),
(102, 27, 48),
(103, 28, 48),
(104, 29, 48),
(105, 30, 48),
(106, 31, 48),
(107, 32, 48),
(108, 2, 49),
(109, 33, 49),
(110, 3, 49),
(111, 6, 49),
(112, 5, 49),
(113, 34, 49),
(114, 35, 49),
(115, 36, 49),
(116, 37, 49),
(117, 38, 50),
(118, 39, 50),
(119, 40, 50),
(120, 41, 50),
(121, 42, 50),
(122, 43, 50),
(123, 44, 50),
(124, 45, 50),
(125, 46, 50),
(126, 47, 50),
(127, 33, 51),
(128, 48, 51),
(129, 49, 51),
(130, 50, 51),
(131, 51, 51),
(132, 52, 51),
(133, 53, 52),
(134, 54, 52),
(135, 55, 52),
(136, 56, 52),
(137, 57, 52),
(138, 58, 52),
(139, 59, 52),
(140, 60, 52),
(141, 61, 52),
(142, 62, 52),
(143, 58, 53),
(144, 63, 53),
(145, 59, 53),
(146, 64, 53),
(147, 65, 53),
(148, 66, 53),
(149, 60, 53),
(150, 67, 53),
(151, 69, 54),
(152, 70, 54),
(153, 71, 54),
(154, 72, 54),
(155, 73, 54),
(156, 74, 54),
(157, 75, 54),
(158, 76, 55),
(159, 77, 55),
(160, 78, 55),
(161, 79, 55),
(162, 80, 55),
(163, 81, 55),
(164, 82, 55),
(165, 83, 55),
(166, 84, 55),
(167, 85, 55),
(201, 88, 88),
(202, 89, 88),
(203, 91, 88),
(204, 90, 88),
(205, 92, 88),
(206, 93, 88),
(207, 94, 89),
(208, 95, 89),
(209, 96, 89),
(210, 97, 89),
(211, 98, 89),
(212, 99, 89),
(213, 101, 89),
(214, 94, 90),
(215, 102, 90),
(216, 106, 90),
(217, 105, 90),
(218, 104, 90),
(219, 107, 90),
(220, 103, 90),
(221, 108, 91),
(222, 109, 91),
(223, 110, 91),
(224, 112, 91),
(225, 111, 91),
(226, 113, 91),
(227, 24, 92),
(228, 114, 92),
(229, 115, 92),
(230, 116, 92),
(231, 117, 92),
(232, 118, 92),
(233, 119, 92),
(234, 120, 93),
(235, 121, 93),
(236, 122, 93),
(237, 123, 93),
(238, 19, 93),
(239, 124, 93),
(240, 17, 93),
(241, 125, 94),
(242, 126, 94),
(243, 127, 94),
(244, 97, 94),
(245, 128, 94),
(246, 129, 94),
(247, 132, 94),
(248, 130, 94),
(249, 131, 94);

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
(36, 'Abraham Van Helsing'),
(17, 'Ada Shelby'),
(104, 'Agent Coulson'),
(15, 'Alfie Solomons'),
(139, 'Alfred Borden'),
(126, 'Alice Harmon'),
(147, 'Alley'),
(129, 'Alma Wheatley'),
(79, 'Andy Bernard'),
(80, 'Angela Martin'),
(118, 'Ani Bezzerides'),
(134, 'Ariadne'),
(133, 'Arthur'),
(41, 'Arthur Holmwood'),
(14, 'Arthur Shelby'),
(131, 'Benny Watts'),
(125, 'Beth Harmon'),
(46, 'Betsy'),
(120, 'Bill Tench'),
(106, 'Brand'),
(23, 'Captain Benjamin L. Willard'),
(108, 'CASE'),
(103, 'Christine Everhart'),
(64, 'Chuck McGill'),
(7, 'Clemenza'),
(132, 'Cobb'),
(27, 'Colonel Lucas'),
(22, 'Colonel Walter E. Kurtz'),
(31, 'Connie Corleone'),
(72, 'Connie Murphy'),
(105, 'Cooper'),
(82, 'Creed Bratton'),
(142, 'Cutter'),
(122, 'Debbie Mitford'),
(111, 'Donald'),
(110, 'Doyle'),
(38, 'Dr. Jack Seward'),
(34, 'Dracula'),
(76, 'Dwight Schrute'),
(136, 'Eames'),
(123, 'Edmund Kemper'),
(77, 'Erin Hannon'),
(116, 'Frank Semyon'),
(32, 'Frankie Pentangeli'),
(5, 'Fredo Corleone'),
(20, 'Gina Gray'),
(57, 'Gus Fring'),
(53, 'Hank Schrader'),
(69, 'Hélmer Herrera'),
(119, 'Holden Ford'),
(62, 'Howard Hamlin'),
(65, 'Huell Babineaux'),
(33, 'Hyman Roth'),
(45, 'Iris'),
(67, 'Javier Peña'),
(30, 'Jay \'Chef\' Hicks'),
(28, 'Jerry'),
(145, 'Jess'),
(51, 'Jesse Pinkman'),
(74, 'Jim Halpert'),
(18, 'John Shelby'),
(130, 'Jolene'),
(37, 'Jonathan Harker'),
(143, 'Julia McCullough'),
(3, 'Key Adams'),
(60, 'Kim Wexler'),
(63, 'Lalo Salamanca'),
(29, 'Lance B. Johnson'),
(24, 'Lieutenant Colonel Bill Kilgore'),
(21, 'Lizzie Shelby'),
(40, 'Lucy Westenra'),
(115, 'Maggie Hart'),
(70, 'María Salazar'),
(58, 'Marie Schrader'),
(114, 'Marty Hart'),
(48, 'Matthew Higgins'),
(19, 'Michael Gray'),
(73, 'Michael Scott'),
(2, 'Mickael Corleone'),
(56, 'Mike Ehrmantraut'),
(35, 'Mina Murray'),
(127, 'Mr. Shaibel'),
(107, 'Murph'),
(61, 'Nacho Varga'),
(124, 'Nancy Tench'),
(39, 'Novia de Dracula'),
(102, 'Obadiah Stane'),
(141, 'Olivia Wenscombe'),
(81, 'Oscar Martínez'),
(66, 'Pablo Escobar'),
(75, 'Pam Beasly'),
(100, 'Pepper Potts'),
(25, 'Photojournalist'),
(16, 'Polly Gray'),
(109, 'Professor Brand'),
(43, 'Quincey Morris'),
(117, 'Ray Velcoro'),
(42, 'Renfield'),
(101, 'Rhodey'),
(140, 'Robert Angier'),
(138, 'Robert Fischer'),
(112, 'Rust Cohle'),
(78, 'Ryan Howard'),
(135, 'Saito'),
(144, 'Sarah'),
(55, 'Saul Goodman'),
(52, 'Skyler White'),
(4, 'Sony Corleone'),
(68, 'Steve Murphy'),
(59, 'Steven Gomez'),
(71, 'Tata Escobar'),
(146, 'Tesla'),
(47, 'Tom'),
(6, 'Tom Hagen'),
(13, 'Tommy Shelby'),
(99, 'Tony Stark'),
(44, 'Travis Bickle'),
(26, 'Tyrone \'Clean\' Miller'),
(128, 'Vasily Borgov'),
(1, 'Vito Corleone'),
(50, 'Walter White'),
(54, 'Walter White Jr.'),
(113, 'Wayne Hays'),
(121, 'Wendy Carr'),
(49, 'Wizard'),
(137, 'Yusuf');

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
(1, 'Francis Ford Coppola', 'https://en.wikipedia.org/wiki/Francis_Ford_Coppola', 'photo1669785440662-.jpg'),
(8, 'Otto Bathurst', 'https://en.wikipedia.org/wiki/Otto_Bathurst', 'photo1669786955708-.jpg'),
(9, 'Martin Scorsese', 'https://en.wikipedia.org/wiki/Martin_Scorsese', 'photo1669790942524-.jpg'),
(10, 'Vince Gilligan', 'https://en.wikipedia.org/wiki/Vince_Gilligan', 'photo1669791694648-.jpg'),
(11, 'Carlo Bernard', 'https://en.wikipedia.org/wiki/Carlos_Bernard', 'photo1669792689217-.jpg'),
(12, 'Greg Daniels', 'https://en.wikipedia.org/wiki/Greg_Daniels', 'photo1669793318934-.jpg'),
(19, 'Jon Favreau', 'https://es.wikipedia.org/wiki/Jon_Favreau', 'photo1672796618379-.jpg'),
(20, 'Christopher Nolan', 'https://en.wikipedia.org/wiki/Christopher_Nolan', 'photo1674427380251-.jpg'),
(21, 'Nic Pizzolatto', 'https://en.wikipedia.org/wiki/Nic_Pizzolatto', 'photo1674441350037-.jpg'),
(22, 'David Fincher', 'https://en.wikipedia.org/wiki/David_Fincher', 'photo1674449188418-.jpg'),
(23, 'Scott Frank', 'https://en.wikipedia.org/wiki/Scott_Frank', 'photo1674456440003-.jpeg');

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
(46, 'Película', 'El Padrino', 1972, 'R', '2h 55m', '9.2', '1,8 M', 97, 'https://www.youtube.com/watch?v=UaVTIH8mujA', '1559.90', '499.90', 'Don Vito Corleone es el jefe de una de las cinco familias que ejercen el mando de la \r\nCosa Nostra en Nueva York en los años 40. Don Corleone tiene cuatro hijos; una \r\nchica, Connie, y tres varones, Santino, o Sonny, como le gusta que le llamen, Michael \r\ny Freddie, al que envían exiliado a Las Vegas, dada su incapacidad para asumir \r\npuestos de mando en la ”Familia”. Cuando otro capo, Sollozzo, al rechazar el \r\nPadrino intervenir en el negocio de estupefacientes, intenta asesinar a éste, \r\nempieza una cruenta lucha de violentos episodios entre los distintos grupos.', 1, 1, 'productImage1669786210916-.png', 'backgroundImage1669786210917-.jpg', 2, 3),
(47, 'Serie de TV', 'Peaky Blinders', 2013, 'R', '1h', '8.8', '530 mil', 94, 'https://www.youtube.com/watch?v=oVzVdvGIC7U', '1999.90', '599.90', 'Peaky Blinders es un drama de BBC que narra la historia de la familia gitana Shelby \r\ny su banda de gángsters, un grupo de personas características por sus boinas con \r\ncuchillas y dueñas de los asuntos ilegales, que dominan las apuestas clandestinas \r\ny se rigen mediante extorsiones.', 8, 7, 'productImage1669787373127-.jpg', 'backgroundImage1669787373166-.jpg', 2, 3),
(48, 'Película', 'Apocalypse Now', 1979, 'R', '2h 27min', '8.5', '663 mil', 93, 'https://www.youtube.com/watch?v=9l-ViOOFH-s', '1559.90', '499.90', 'Un oficial del ejército estadounidense que sirve en Vietnam recibe el encargo de \r\nasesinar a un coronel renegado de las fuerzas especiales que se ve a sí mismo \r\ncomo un dios.', 1, 8, 'productImage1669787841260-.png', 'backgroundImage1669787841275-.jpg', 10, 3),
(49, 'Película', 'El Padrino II', 1974, 'R', '3h 22min', '9.0', '1,3 M', 96, 'https://www.youtube.com/watch?v=9O1Iy9od7-A', '1559.90', '499.90', 'El Padrino II retoma la historia de la familia Corleone en el punto al cual había \r\nllegado la primera parte, pero con una vuelta de tuerca: mientras sigue el ascenso \r\nde Michael en el mundo del crimen durante los años 50, reconstruye los primeros \r\naños del padre de Michael, Vito, desde que escapa, aún niño, de la violenta Sicilia \r\nhasta que comienza a dar sus primeros pasos como líder mafioso en Nueva York, \r\nen las primeras décadas del siglo XX.', 1, 1, 'productImage1669788294623-.png', 'backgroundImage1669788294636-.jpg', 2, 3),
(50, 'Película', 'Dracula', 1992, 'R', '2h 8min', '7.4', '217 mil', 76, 'https://www.youtube.com/watch?v=CjgwUB1CXek', '1259.90', '399.90', 'El conde Drácula, un príncipe del siglo XV, está condenado a vivir de la sangre de los \r\nvivos por toda la eternidad. El joven abogado Jonathan Harker es enviado al castillo \r\nde Drácula para finalizar un trato de tierras, pero cuando el Conde ve una foto de la \r\nprometida de Harker, Mina, la viva imagen de su esposa muerta, lo encarcela y se \r\ndirige a Londres para localizarla.', 1, 9, 'productImage1669788839886-.jpg', 'backgroundImage1669788839896-.jpg', 5, 8),
(51, 'Película', 'Taxi Driver', 1976, 'R', '1h 54min', '8.2', '822 mil', 96, 'https://www.youtube.com/watch?v=UUxD4-dEzn0', '1999.90', '499.90', 'Aquejado de insomnio, el solitario y perturbado Travis Bickle (Robert De Niro) \r\nacepta un trabajo como taxista en la ciudad de Nueva York, rondando las calles \r\ntodas las noches, alejándose cada vez más de la realidad mientras sueña con \r\nlimpiar la sucia ciudad. Cuando Travis conoce a la bella trabajadora de campaña \r\nBetsy (Cybill Shepherd), se \\r\\nobsesiona con la idea de salvar el mundo, primero \r\nplanea asesinar a un candidato presidencial y luego dirige su atención a rescatar a \r\nla prostituta de 12 años.', 9, 10, 'productImage1669791214629-.jpg', 'backgroundImage1669791214631-.jpg', 2, 3),
(52, 'Serie de TV', 'Breaking Bad', 2008, '16', '49min', '9.5', '1,8 M', 96, 'https://www.youtube.com/watch?v=HhesaQXLuRY', '1999.90', '599.90', 'En Albuquerque, ciudad del estado de Nuevo México (Estados Unidos), un profesor \r\nde química de instituto llamado \r\nWalter White (Bryan Cranston) descubre que padece un cáncer incurable. A raíz de \r\nesta noticia, y temiendo por la \r\neconomía de su familia, decide aliarse con un antiguo alumno, Jesse Pinkman \r\n(Aaron Paul), para producir y vender \r\nmetanfetamina.', 10, 11, 'productImage1669792076634-.jpg', 'backgroundImage1669792076659-.jpg', 2, 3),
(53, 'Serie de TV', 'Better Call Saul', 2015, '16', '46min', '8.9', '508 mil', 98, 'https://www.youtube.com/watch?v=HN4oydykJFc', '1999.90', '599.90', 'En 2002, Jimmy McGill aún no se había convertido en Saul Goodman, uno de los \r\nabogados criminalistas más solicitados en el mundo del hampa de Nuevo México. \r\nPor aquel entonces, McGill acababa de empezar una carrera que le acabó llevando a \r\ndefender al mismísimo Walter White.', 10, 11, 'productImage1669792463593-.jpg', 'backgroundImage1669792463613-.jpg', 2, 3),
(54, 'Serie de TV', 'Narcos', 2015, '16', '49min', '8.0', '418 mil', 89, 'https://www.youtube.com/watch?v=RNWAKZzgbp4', '1999.00', '599.00', 'Una mirada a las hazañas criminales del narcotraficante \r\ncolombiano Pablo Escobar, \r\nasí como a muchos otros capos que plagaron el país a \r\ntravés de los años.', 11, 12, 'productImage1671087631510-.jpg', 'backgroundImage1671087631534-.jpg', 2, 3),
(55, 'Serie de TV', 'The Office', 2005, '13', '22min', '9.0', '583 mil', 81, 'https://www.youtube.com/watch?v=tNcDHWpselE', '1999.00', '599.00', 'Un falso documental sobre un grupo de trabajadores de \r\noficina típicos, donde la jornada laboral consiste en \r\nchoques de ego, comportamiento inapropiado y tedio.', 12, 13, 'productImage1671571846889-.jpg', 'backgroundImage1671087126732-.png', 11, 13),
(88, 'Película', 'Iron Man', 2008, '7', '2h 6m', '7.9', '1,1 M', 94, 'https://www.youtube.com/watch?v=8ugaeA-nMTc', '1999.90', '599.90', 'Anthony Edward \'Tony\' Stark es un personaje ficticio que \r\nda vida a este personaje, un multimillonario magnate \r\nempresarial y filántropo estadounidense, playboy e \r\ningenioso científico, que sufrió una grave lesión en el \r\npecho durante un secuestro en el Medio Oriente. Cuando \r\nsus captores intentan forzarlo a construir un arma de \r\ndestrucción masiva, pero en cambio, construyó una \r\narmadura para salvar su vida y escapar del cautiverio.', 19, 14, 'productImage1674425593568-.jpg', 'backgroundImage1674425593570-.jpg', 1, 6),
(89, 'Película', 'Interstellar', 2014, '12', '2h 49min', '8.6', '1,8 M', 73, 'https://www.youtube.com/watch?v=zSWdZVtXT7E', '989.90', '299.90', 'Al ver que la vida en la Tierra está llegando a su fin, un \r\ngrupo de exploradores dirigidos por el piloto Cooper \r\n(McConaughey) y la científica Amelia (Hathaway) \r\nemprende una misión que puede ser la más importante \r\nde la historia de la humanidad: viajar más allá de nuestra \r\ngalaxia para descubrir algún planeta en otra que pueda \r\ngarantizar el futuro de la raza humana. ', 20, 15, 'productImage1674427700655-.jpg', 'backgroundImage1674427700655-.jpg', 7, 3),
(90, 'Serie de TV', 'True Detective', 2014, '16', '55min', '8.9', '577 mil', 77, 'https://www.youtube.com/watch?v=fVQUcaO4AvE', '1562.20', '567.00', 'Dos detectives de Lousiana, Rust Cohle (Matthew \r\nMcConaughey) y Martin Hart (Woody Harrelson), vuelven \r\na investigar el difícil caso de un asesino en serie en el \r\nque ya habían trabajado. Obligados a regresar a un \r\nmundo tan siniestro, el avance de la investigación y el \r\nmayor conocimiento mutuo les enseñan que la \r\noscuridad reside a ambos lados de la ley.', 21, 16, 'productImage1674442304817-.jpg', 'backgroundImage1674442304819-.jpg', 2, 3),
(91, 'Serie de TV', 'Mindhunter', 2017, '16', '1h', '8.0', '294 mil', 97, 'https://www.youtube.com/watch?v=oFlKiTwhd38', '1699.00', '650.00', 'A finales de los años 70, dos agentes de la FBI se reúnen \r\ncon asesinos y violadores encarcelados para desarrollar \r\nperfiles psicológicos de criminales, pero sus jefes temen \r\nque se están involucrando demasiado con sus \r\nentrevistados.', 22, 17, 'productImage1674449746108-.jpg', 'backgroundImage1674455732882-.jpg', 2, 3),
(92, 'Serie de TV', 'Gambito de dama', 2020, '16', '1h', '8.6', '461 mil', 96, 'https://www.youtube.com/watch?v=kwrQzTz16w4', '1999.90', '599.90', 'Miniserie de 7 episodios. Kentucky, años 60. En plena \r\nGuerra Fría, la joven Beth Harmon (Anya Taylor-Joy) es \r\nuna huérfana con una aptitud prodigiosa para el ajedrez, \r\nque lucha contra sus adicciones mientras trata de \r\nconvertirse en la mejor jugadora del mundo ganando a \r\nlos grandes maestros, en especial a los rusos.', 23, 18, 'productImage1674456886649-.jpg', 'backgroundImage1674456886650-.jpg', 3, 14),
(93, 'Película', 'Inception', 2010, '12', '2h 28min', '8.0', '2.4 M', 87, 'https://www.youtube.com/watch?v=YoHD9XEInc0', '1200.00', '330.00', 'Dom Cobb (DiCaprio) es un experto en el arte de \r\napropiarse, durante el sueño, de los secretos del \r\nsubconsciente ajeno. La extraña habilidad de Cobb le \r\nha convertido en un hombre muy cotizado en el \r\nmundo del espionaje, pero también lo ha condenado a \r\nser un fugitivo y, por consiguiente, a renunciar a llevar \r\nuna vida normal. Su única oportunidad para cambiar \r\nde vida será hacer exactamente lo contrario de lo que \r\nha hecho siempre: la incepción, que consiste en \r\nimplantar una idea en el subconsciente en lugar de \r\nsustraerla. Sin embargo, su plan se complica debido a \r\nla intervención de alguien que parece predecir cada \r\nuno de sus movimientos, alguien a quien sólo Cobb \r\npodrá descubrir.', 20, 19, 'productImage1674459256492-.jpg', 'backgroundImage1674459376068-.jpg', 7, 14),
(94, 'Película', 'The Prestige', 2006, '18', '2h 10min', '8.0', '1.3 M', 76, 'https://www.youtube.com/watch?v=RLtaA9fFNXU', '1750.00', '462.00', 'En Londres, a finales del siglo XIX, cuando los magos \r\neran los ídolos más aclamados, dos jóvenes \r\nilusionistas se proponen alcanzar la fama. El \r\nsofisticado Robert Angier (Hugh Jackman) es un \r\nconsumado artista, mientras que el tosco y purista \r\nAlfred Borden (Christian Bale) es un genio creativo, \r\npero carece de la habilidad necesaria para ejecutar en \r\npúblico sus mágicas ideas. Al principio son \r\ncompañeros y amigos que se admiran mutuamente. \r\nSin embargo, cuando el mejor truco ideado por ambos \r\nfracasa, se convierten en enemigos irreconciliables: \r\ncada uno de ellos intentará por todos los medios \r\nsuperar al otro y acabar con él. Truco a truco, \r\nespectáculo a espectáculo, se va fraguando una feroz \r\ncompetición que no tiene límites.', 20, 15, 'productImage1674460329381-.jpg', 'backgroundImage1674460452905-.jpg', 3, 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_actor_character`
--

CREATE TABLE `product_actor_character` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `actor_id` int(11) NOT NULL,
  `character_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `product_actor_character`
--

INSERT INTO `product_actor_character` (`id`, `product_id`, `actor_id`, `character_id`) VALUES
(1, 46, 1, 1),
(2, 46, 3, 3),
(3, 46, 2, 2),
(4, 46, 5, 5),
(5, 46, 4, 4),
(6, 46, 6, 6),
(7, 46, 7, 7),
(8, 47, 17, 13),
(9, 47, 18, 14),
(10, 47, 19, 15),
(11, 47, 20, 16),
(12, 47, 21, 17),
(13, 47, 22, 18),
(14, 47, 23, 19),
(15, 47, 24, 20),
(16, 47, 25, 21),
(17, 48, 1, 22),
(18, 48, 26, 23),
(19, 48, 6, 24),
(20, 48, 27, 25),
(21, 48, 29, 27),
(22, 48, 30, 28),
(23, 48, 28, 26),
(24, 48, 31, 29),
(25, 48, 32, 30),
(26, 49, 2, 2),
(27, 49, 33, 1),
(28, 49, 3, 3),
(29, 49, 6, 6),
(30, 49, 5, 5),
(31, 49, 34, 31),
(32, 49, 35, 32),
(33, 49, 36, 7),
(34, 49, 37, 33),
(35, 50, 38, 34),
(36, 50, 39, 35),
(37, 50, 40, 36),
(38, 50, 41, 37),
(39, 50, 42, 38),
(40, 50, 43, 39),
(41, 50, 44, 40),
(42, 50, 45, 41),
(43, 50, 46, 42),
(44, 50, 47, 43),
(45, 51, 49, 46),
(46, 51, 33, 44),
(47, 51, 48, 45),
(48, 51, 51, 48),
(49, 51, 50, 47),
(50, 51, 52, 49),
(51, 52, 53, 50),
(52, 52, 55, 52),
(53, 52, 54, 51),
(54, 52, 56, 53),
(55, 52, 57, 54),
(56, 52, 58, 55),
(57, 52, 59, 56),
(58, 52, 61, 58),
(59, 52, 60, 57),
(60, 52, 62, 59),
(61, 53, 58, 55),
(62, 53, 63, 60),
(63, 53, 59, 56),
(64, 53, 64, 61),
(65, 53, 65, 62),
(66, 53, 60, 57),
(67, 53, 66, 63),
(68, 53, 67, 64),
(69, 54, 69, 66),
(70, 54, 70, 67),
(71, 54, 71, 68),
(72, 54, 73, 70),
(73, 54, 72, 69),
(74, 54, 74, 71),
(75, 54, 75, 72),
(76, 55, 76, 73),
(77, 55, 77, 74),
(78, 55, 78, 75),
(79, 55, 79, 76),
(80, 55, 80, 77),
(81, 55, 81, 78),
(82, 55, 82, 79),
(83, 55, 83, 80),
(84, 55, 84, 81),
(85, 55, 85, 82),
(119, 88, 88, 99),
(120, 88, 91, 102),
(121, 88, 90, 101),
(122, 88, 92, 103),
(123, 88, 93, 104),
(124, 88, 89, 100),
(125, 89, 95, 106),
(126, 89, 96, 107),
(127, 89, 94, 105),
(128, 89, 97, 109),
(129, 89, 98, 47),
(130, 89, 99, 110),
(131, 89, 101, 111),
(132, 90, 106, 117),
(133, 90, 94, 112),
(134, 90, 102, 114),
(135, 90, 104, 113),
(136, 90, 105, 118),
(137, 90, 107, 116),
(138, 90, 103, 115),
(139, 91, 108, 119),
(140, 91, 109, 120),
(141, 91, 110, 121),
(142, 91, 112, 122),
(143, 91, 111, 123),
(144, 91, 113, 124),
(145, 92, 114, 126),
(146, 92, 24, 125),
(147, 92, 115, 127),
(148, 92, 116, 128),
(149, 92, 117, 129),
(150, 92, 118, 131),
(151, 92, 119, 130),
(152, 93, 120, 132),
(153, 93, 121, 133),
(154, 93, 122, 134),
(155, 93, 123, 135),
(156, 93, 19, 136),
(157, 93, 124, 137),
(158, 93, 17, 138),
(159, 94, 125, 139),
(160, 94, 126, 140),
(161, 94, 127, 141),
(162, 94, 97, 142),
(163, 94, 128, 143),
(164, 94, 129, 144),
(165, 94, 132, 145),
(166, 94, 130, 146),
(167, 94, 131, 147);

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
(65, 46, 1),
(66, 46, 2),
(67, 46, 3),
(68, 46, 4),
(69, 46, 5),
(70, 46, 6),
(71, 46, 7),
(72, 47, 13),
(73, 47, 14),
(74, 47, 15),
(75, 47, 16),
(76, 47, 17),
(77, 47, 18),
(78, 47, 19),
(79, 47, 20),
(80, 47, 21),
(81, 48, 22),
(82, 48, 23),
(83, 48, 24),
(84, 48, 25),
(85, 48, 26),
(86, 48, 27),
(87, 48, 28),
(88, 48, 29),
(89, 48, 30),
(90, 49, 2),
(91, 49, 1),
(92, 49, 3),
(93, 49, 6),
(94, 49, 5),
(95, 49, 31),
(96, 49, 32),
(97, 49, 7),
(98, 49, 33),
(99, 50, 34),
(100, 50, 35),
(101, 50, 36),
(102, 50, 37),
(103, 50, 38),
(104, 50, 39),
(105, 50, 40),
(106, 50, 41),
(107, 50, 42),
(108, 50, 43),
(109, 51, 44),
(110, 51, 45),
(111, 51, 46),
(112, 51, 47),
(113, 51, 48),
(114, 51, 49),
(115, 52, 50),
(116, 52, 51),
(117, 52, 52),
(118, 52, 53),
(119, 52, 54),
(120, 52, 55),
(121, 52, 56),
(122, 52, 57),
(123, 52, 58),
(124, 52, 59),
(125, 53, 55),
(126, 53, 60),
(127, 53, 56),
(128, 53, 61),
(129, 53, 62),
(130, 53, 63),
(131, 53, 57),
(132, 53, 64),
(133, 54, 66),
(134, 54, 67),
(135, 54, 68),
(136, 54, 69),
(137, 54, 70),
(138, 54, 71),
(139, 54, 72),
(140, 55, 73),
(141, 55, 74),
(142, 55, 75),
(143, 55, 76),
(144, 55, 77),
(145, 55, 78),
(146, 55, 79),
(147, 55, 80),
(148, 55, 81),
(149, 55, 82),
(183, 88, 99),
(184, 88, 100),
(185, 88, 102),
(186, 88, 101),
(187, 88, 103),
(188, 88, 104),
(189, 89, 105),
(190, 89, 106),
(191, 89, 107),
(192, 89, 109),
(193, 89, 47),
(194, 89, 110),
(195, 89, 111),
(196, 90, 112),
(197, 90, 114),
(198, 90, 117),
(199, 90, 118),
(200, 90, 113),
(201, 90, 116),
(202, 90, 115),
(203, 91, 119),
(204, 91, 120),
(205, 91, 121),
(206, 91, 122),
(207, 91, 123),
(208, 91, 124),
(209, 92, 125),
(210, 92, 126),
(211, 92, 127),
(212, 92, 128),
(213, 92, 129),
(214, 92, 50),
(215, 92, 130),
(216, 93, 132),
(217, 93, 133),
(218, 93, 134),
(219, 93, 135),
(220, 93, 136),
(221, 93, 137),
(222, 93, 138),
(223, 94, 139),
(224, 94, 140),
(225, 94, 141),
(226, 94, 142),
(227, 94, 143),
(228, 94, 144),
(229, 94, 145),
(230, 94, 146),
(231, 94, 147);

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
(1, 'Mario Puzo', 'https://en.wikipedia.org/wiki/Mario_Puzo', 'photo1669785505033-.jpg'),
(7, 'Steven Knight', 'https://en.wikipedia.org/wiki/Steven_Knight', 'photo1669786996009-.jpg'),
(8, 'John Milius', 'https://en.wikipedia.org/wiki/John_Milius', 'photo1669787548093-.jpg'),
(9, 'James V. Hart', 'https://en.wikipedia.org/wiki/James_V._Hart', 'photo1669788553871-.jpg'),
(10, 'Paul Schrader', 'https://en.wikipedia.org/wiki/Paul_Schrader', 'photo1669790974385-.jpg'),
(11, 'Vince Gilligan', 'https://en.wikipedia.org/wiki/Vince_Gilligan', 'photo1669791706303-.jpg'),
(12, 'Carlo Bernard', 'https://en.wikipedia.org/wiki/Carlos_Bernard', 'photo1669792704098-.jpg'),
(13, 'Greg Daniels', 'https://en.wikipedia.org/wiki/Greg_Daniels', 'photo1669793340067-.jpg'),
(14, 'Mark Fergus', 'https://en.wikipedia.org/wiki/Mark_Fergus_and_Hawk_Ostby', 'photo1672796825927-.jpg'),
(15, 'Jonathan Nolan', 'https://en.wikipedia.org/wiki/Jonathan_Nolan', 'photo1674427433277-.jpg'),
(16, 'Nic Pizzolatto', 'https://en.wikipedia.org/wiki/Nic_Pizzolatto', 'photo1674441360820-.jpg'),
(17, 'Joe Penhall', 'https://en.wikipedia.org/wiki/Joe_Penhall', 'photo1674449281533-.jpg'),
(18, 'Scott Frank', 'https://en.wikipedia.org/wiki/Scott_Frank', 'photo1674456452404-.jpeg'),
(19, 'Christopher Nolan', 'https://en.wikipedia.org/wiki/Christopher_Nolan', 'photo1674459464476-.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `surname` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(400) DEFAULT NULL,
  `phone_number` varchar(30) DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `genre1_id` int(10) DEFAULT NULL,
  `genre2_id` int(10) DEFAULT NULL,
  `user_photo` varchar(100) DEFAULT NULL,
  `admin_status` int(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `email`, `password`, `phone_number`, `birthdate`, `genre1_id`, `genre2_id`, `user_photo`, `admin_status`) VALUES
(5, 'Juan Cruz Etchart', '0', 'etchart.juancruz@gmail.com', '$2a$10$HqWn5jUv4ctULBYb2YUNi.ssrTihXQiCoxMUG2mszUUGUfNRhEIpy', '', '0000-00-00', NULL, NULL, NULL, 0),
(7, 'Ahmed Kalim', '0', 'ahmedandres20@gmail.com', '$2a$10$GwjjuGKhKazEW1Y.FEO.AOhWk1/KxHjbaWrxDlthHLpiStld.SAye', '', '0000-00-00', NULL, NULL, NULL, 0),
(8, 'Alberto Roper V', '0', 'albertoropervilar@gmail.com', '$2a$10$qS1LO0uz.QGc18PGItX2cuT7E6k1yHijPK.TEpxfw9XL/PxA.kJUa', '', '0000-00-00', NULL, NULL, NULL, 0),
(9, 'Alan Diaz', '0', 'alandiazyoel1@gmail.com', '$2a$10$TjR0FnbuofUxYwXxv9lKI.oZG1nRVg6RtgAMeYkeI/Asg.jmjGOaO', '', '0000-00-00', NULL, NULL, NULL, 0),
(15, 'Elon Musk', '0', 'admin@gmail.com', '$2a$10$Jsa3aCCf9mP3SkkTSDKUY.iO7RVeQ0yKsOcC75DHbv3qU.bwaI.aa', '', '0000-00-00', NULL, NULL, NULL, 1),
(16, 'Prueba', 'aaaa', 'prueba@gmail.com', '$2a$10$sziNJdaysEyuHqMznJDYb.WYophh8fgCI.c3Kq/9TEhVT9G3hYdEW', '45456465', '2023-02-01', 11, 10, 'photo1674547205500-.jpg', 0),
(17, 'prueba2', 'prueba3', 'prueba2@gmail.com', '$2a$10$bBqem8Ca2.uYmCzMhj3SY.KfDQ1pb7qN5wCdpx0F.wcXbYeVRPVgG', '544564', '2023-01-19', 2, 1, 'photo1674547426441-.jpg', 0),
(18, 'Prueba2', 'Prueba444', 'Hola@gmail.com', '$2a$10$y5wsah0JKeikC3zprx6f6.Vsm06p575uxxAKjvhVXaBwTcTK5wQba', '45477757845', '2023-01-24', 10, 6, 'userPhoto1675057810223-.png', 0),
(19, 'Hola', 'Holaa', 'hola@gmai.com', '$2a$10$.Y4BWJ68HEPG.o1EHZM6vuAz61gXOWh7RU3rkT6t41h9xL92UfSxm', '123456', '2023-01-18', 9, 6, 'defaultUserImage', 0),
(20, 'Hola', 'Holaa', 'holaaaaa@gmai.com', '$2a$10$wSeErZ9/5Qiv2i25yeWcu.xUQXf3F6FJVMl8.gRMolgCEsJJ2Y1UC', '123456', '2023-01-18', 9, 6, 'userPhoto1675061102305-.jpg', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_cart`
--

CREATE TABLE `user_cart` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_favorites`
--

CREATE TABLE `user_favorites` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_product` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `full_name` (`full_name`);

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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `directors`
--
ALTER TABLE `directors`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `full_name` (`full_name`);

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
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `genre1_id` (`genre1_id`),
  ADD KEY `genre2_id` (`genre2_id`),
  ADD KEY `director_id` (`director_id`),
  ADD KEY `screenwriter_id` (`screenwriter_id`);

--
-- Indices de la tabla `product_actor_character`
--
ALTER TABLE `product_actor_character`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `character_id` (`character_id`),
  ADD KEY `actor_id` (`actor_id`);

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
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `full_name` (`full_name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `genre1_id` (`genre1_id`),
  ADD KEY `genre2_id` (`genre2_id`);

--
-- Indices de la tabla `user_cart`
--
ALTER TABLE `user_cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `user_favorites`
--
ALTER TABLE `user_favorites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_product` (`id_product`),
  ADD KEY `id_user` (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actors`
--
ALTER TABLE `actors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=133;

--
-- AUTO_INCREMENT de la tabla `actor_character`
--
ALTER TABLE `actor_character`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;

--
-- AUTO_INCREMENT de la tabla `actor_product`
--
ALTER TABLE `actor_product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=250;

--
-- AUTO_INCREMENT de la tabla `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=148;

--
-- AUTO_INCREMENT de la tabla `directors`
--
ALTER TABLE `directors`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT de la tabla `product_actor_character`
--
ALTER TABLE `product_actor_character`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=168;

--
-- AUTO_INCREMENT de la tabla `product_character`
--
ALTER TABLE `product_character`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=232;

--
-- AUTO_INCREMENT de la tabla `screenwriters`
--
ALTER TABLE `screenwriters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de la tabla `user_cart`
--
ALTER TABLE `user_cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `user_favorites`
--
ALTER TABLE `user_favorites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
-- Filtros para la tabla `product_actor_character`
--
ALTER TABLE `product_actor_character`
  ADD CONSTRAINT `product_actor_character_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `product_actor_character_ibfk_2` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`),
  ADD CONSTRAINT `product_actor_character_ibfk_3` FOREIGN KEY (`actor_id`) REFERENCES `actors` (`id`);

--
-- Filtros para la tabla `product_character`
--
ALTER TABLE `product_character`
  ADD CONSTRAINT `product_character_ibfk_1` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`),
  ADD CONSTRAINT `product_character_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`genre1_id`) REFERENCES `genres` (`id`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`genre2_id`) REFERENCES `genres` (`id`);

--
-- Filtros para la tabla `user_cart`
--
ALTER TABLE `user_cart`
  ADD CONSTRAINT `user_cart_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `user_cart_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `user_favorites`
--
ALTER TABLE `user_favorites`
  ADD CONSTRAINT `user_favorites_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `user_favorites_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

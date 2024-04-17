

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


-- --------------------------------------------------------


CREATE TABLE `courses` (
  `id` int(100) NOT NULL,
  `course_code` varchar(255) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `syllabus` varchar(255) NOT NULL,
  `progression` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



INSERT INTO `courses` (`id`, `course_code`, `course_name`, `syllabus`, `progression`) VALUES
(9, 'DT207G', 'Backend-baserad webbutveckling', 'https://www.miun.se/utbildning/kursplaner-och-utbildningsplaner/DT207G/', 'B'),
(10, 'DT057G', 'Webbutveckling I', 'https://webbutveckling.miun.se/ramschema#:~:text=%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A7%D9%84%D9%88%D9%8A%D8%A8%20I-,DT057G,-%D8%A3', 'A'),
(11, 'DT084G', 'Introduktion till programmering i JavaScript', 'https://webbutveckling.miun.se/ramschema#:~:text=programmering%20i%20JavaScript-,DT084G,-A', 'A');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

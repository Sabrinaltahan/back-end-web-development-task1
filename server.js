const express = require("express");
const mariadb = require("mariadb");

const app = express();
const PORT = process.env.PORT || 3000;


const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database connection configuration
const pool = mariadb.createPool({
    // host: "localhost",
    // user: "root",
    // password: "",
    // database: "cv",

    host: "sql6.freesqldatabase.com",
    port: 3306,
    user: "sql6699922",
    password: "VcNcnsXkxd",
    database: "sql6699922"
});

// Route for home page
app.get("/", async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM courses");
        conn.release();
        res.render("home", { courses: rows });
    } catch (err) {
        console.error("Error retrieving data from database:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Route for deleting a course
app.post("/courses/:id", async (req, res) => {
    const courseId = req.params.id;
    try {
        const conn = await pool.getConnection();
        await conn.query("DELETE FROM courses WHERE id = ?", [courseId]);
        conn.release();
        res.redirect("/");
    } catch (err) {
        console.error("Error deleting course:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Route for rendering the add page
app.get("/add", (req, res) => {
    res.render("add");
});

// Route for adding a new course
app.post("/courses", async (req, res) => {
    const { courseCode, courseName, syllabus, progression } = req.body;
    try {
        const conn = await pool.getConnection();
        await conn.query("INSERT INTO courses (course_code, course_name, syllabus, progression) VALUES (?, ?, ?, ?)", [courseCode, courseName, syllabus, progression]);
        conn.release();
        res.redirect("/");
    } catch (err) {
        console.error("Error adding new course:", err);
        res.status(500).send("Internal Server Error");
    }
});

// Route for about page
app.get("/about", (req, res) => {
    res.render("about");
});

// Set view engine to EJS
app.set("view engine", "ejs");

// Serve static files from the public directory
app.use(express.static("views"));




// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const app = express();

// start server
app.listen(4000, () => {
  console.log("Server is running on port 3000");
});

app.use(express.json());

const students = [
  {
    id: 1,
    name: "Levi",
    grade: 10,
  },
  { id: 2, 
    name: "Malvyn",
    grade: 9 },
  {
    id: 3,
    name: "kelvin",
    grade: 8,
  },
];

app.get("/students", (req, res) => {
  res.json(students);
});
app.post("/students", (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.status(201).send("student added");
});



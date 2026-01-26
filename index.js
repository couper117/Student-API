const express = require("express");
const app = express();

// start server
app.listen(3000, () => {
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

let users = [
  { id:1, name:"john", email:"john@gmail.com", password:"123456"}
]

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  if (!newUser.password || newUser.password.length < 6) { 
    return res.status(400).send("Error: Password is required and must be at least 6 characters long");
  } 
  if (!newUser.email || !newUser.email.includes("@")) {
    return res.status(400).send("Error: Valid email is required");
  }
  
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send({"User added" });
});


app.get("/students", (req, res) => {
  res.json(students);
});
app.post("/students", (req, res) => {
 const newstudent = req.body;
   if (!newstudent.name || typeof newstudent.name !== "string") {
    return res.status(400).send("Error: Name is required and must be a string");
  }
  if (!newstudent.grade || typeof newstudent.grade !== "number") {
    return res.status(400).send("Error: Grade is required and must be a number");
  }

  newStudent.id = students.length +1;
  students.push(newStudent);
  res.status(201).send({message: "student added" , students: newStudent});
});



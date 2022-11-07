// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// const path = require("path");
// // const Enrollment = require("./src/components/Enrollment");

// app.use(bodyParser.urlencoded({ extended: true }));
// mongoose.connect(
//   "mongodb+srv://krishna:1234@cluster0.5cxcgzw.mongodb.net/Online_Course_Registration",
//   { useNewUrlParser: true },
//   { useUnifiedTopology: true }
// );

// app.put("/success", function (req, res) {
//   //   res.sendFile(
//   //     "/MY DATA/Acdemics/Project/frontend/app/src/components/Enrollment.jsx"
//   //   );
//   //   res.sendFile({ Enrollment });
//   res.send("hello world");
//   // res.sendFile(__dirname + "/src/components/Enrollment.jsx");

//   // res.sendFile("/MY DATA/Acdemics/Project/frontend/app/public/index.html");

//   //   res.sendFile("/MY DATA/Acdemics/Project/testreact/my-app/build/index.html");
// });

// app.post("/enroll", function (req, res) {
//   let NewStudent = new Student({
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     Email: req.body.Email,
//     course_name: req.body.course_name,
//     Profession: req.body.Profession,
//   });
//   NewStudent.save();
//   res.redirect("/enroll");
// });

// app.listen(5000, function () {
//   console.log("Server running is running on 5000");
// });
// -------------------------------------------------------------------
// var express = require("express");
// var path = require("path");
// var bodyParser = require("body-parser");
// var mongodb = require("mongodb");
// const { connection } = require("mongoose");

// var dbConn = mongodb.MongoClient.connect("mongodb://localhost:27017");

// var app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(
//   express.static(path.resolve(__dirname, "/src/components/Enrollment.jsx"))
// );

// app.post("/post-feedback", function (req, res) {
//   res.send("Data received");
//   console.log("Hello data received");
//   let NewStudent = new Student({
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     Email: req.body.Email,
//     course_name: req.body.course_name,
//     Profession: req.body.Profession,
//   });

//   app.get("/about", function (res, req) {
//     console.log("Hiiiii");
//     res.send("Hello world");
//   });

//   dbConn.then(function (NewStudent) {
//     delete req.body._id;
//     db.collection("Student").insertOne(req.body);
//   });
//   console.log(JSON.stringify(req.body));
//   res.send("Data received:\n" + JSON.stringify(req.body));
// });

// app.listen(process.env.PORT || 5000, process.env.IP || "0.0.0.0");
// console.log("Server listening on port 5000");

// --------------------------------------------------------------------------------------------------

const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "/config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require(__dirname + "/src/components/Enrollment.jsx"));
// get driver connection
const dbo = require("./db/conn");

app.post("/post-feedback", function (req, res) {
  console.log("Hello data received");
  let NewStudent = new Student({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    Email: req.body.Email,
    course_name: req.body.course_name,
    Profession: req.body.Profession,
  });
  console.log(NewStudent);
  NewStudent.save();
});

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is ruuning on ${port}`);
});

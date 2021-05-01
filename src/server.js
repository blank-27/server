const express = require("express");
const routes = require("./routers");
const morgan = require("morgan");
// const cors = require("cors");
const StudentModel= require("./database/models/test.model");

const app = express();

// log all requests in console
app.use(morgan("dev"));

// // allow cross-origin requests
// app.use(cors);

// to parse json body data from requests (i.e req.body)
app.use(express.json());
// to parse data from x-urlencoded-forms
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("nothing to send here.");
  // For my reference: Karan  <IGNORE>
  // const studentModel= new StudentModel({
  //   fullName:'Karan'
  // });
  // studentModel.save()
  //   .then((result)=>{
  //     res.send(result)
  //   })
  //   .catch((e)=>{
  //     console.log(e);
  //   });
})

// test route
app.use("/test", routes.test);

// TODO in actual app
// app.use("/dashboard", routes.dashboard);
// app.use("/jobs-applied", routes.jobs-applied);
// app.use("/all-jobs", routes.all-jobs);

module.exports = app;

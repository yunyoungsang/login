
"use strict";

// 모듈
const express = require("express");
const router = require("./routes/home");
const app = express();

// 라우팅
const home = require("./routes/home");

//앱 세팅
app.set("views","./views");
app.set("view engine","ejs");

const PORT = 3000;

app.use("/",home); //use -> 미들웨어  

module.exports = app;


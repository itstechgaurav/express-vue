const {PORT , express, bodyParser, app} = require("./config");
const fs = require("fs");
const path = require("path");
// routes started

// RT.get("/", "auth/auth@init");
// RT.get("/profile", "auth/auth@profile", "auth/auth@do")
// RT.get("/login", "auth/auth@showLogin", "auth/auth@loged");
// RT.get("/logout", "auth/auth@logout", "auth/auth@logedout");
// RT.post("/login", "auth/auth@login", "auth/auth@loged");
// RT.get("/signup", "auth/auth@showSignup", "auth/auth@loged");
// RT.post("/signup", "auth/auth@signup", "auth/auth@loged");
// RT.get("/verify/:tok", "auth/auth@verify");
// RT.get("/reset", "auth/auth@showReset", "auth/auth@loged");
// RT.get("/reset/:token", "auth/auth@resetPass", "auth/auth@loged");
// RT.post("/reset/:token", "auth/auth@resetingPass", "auth/auth@loged");
// RT.post("/reset", "auth/auth@resetPassMail", "auth/auth@loged");
//
// app.get("/ohk", (req, res) => {
//      res.view("auth/ohk", {
//           layout: "auth"
//      })
// });

app.get("/api/home", (req, res) => {
     res.jsonp({
         msg: "Home route"
     })
});

app.get("/api/about", (req, res) => {
    res.jsonp({
        msg: "about route"
    })
});

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "./../client/dist/index.html")); 
})

// route ended

app.listen(PORT, function () {
    console.log("App is running on: " + PORT);
});

var express = require("express");
var app = express();
const data = require("./fakeData.json")
const path = require("path")
const PORT = process.env.PORT || 3301

if (process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../client/build")))
};

app.get("/api/all", (req,res) => {
    res.json(data)
})

if (process.env.NODE_ENV === "production"){
    app.get("*", (req,res) => {
        res.sendFile(path.join(__dirname, "../client/build/index.html"))
    })
}

app.listen(PORT, () => {
    console.log("listening on port")
})
var express = require('express');
const bodyParser = require("body-parser")
var mysql = require('mysql');
var app = express();

var dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123bon567tam",
    database: "test"
});

app.use(express.static(__dirname)); // Link css
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")

app.get('/index', function (req, res) { // Truy xuất dữ liệu
    dbConn.query('SELECT * FROM test.new_table', function (error, results, fields) {
        if (error) throw error;
        return res.render("index.ejs", { result: results })
    });
});

app.post('/add-new', function (req, res) {// Thêm dữ liệu
    let newID = req.body.ID
    let newName = req.body.name
    let newImage = req.body.image
    let newWeight = req.body.weight
    let newOld = req.body.old
    let newSex = req.body.sex
    dbConn.query("INSERT INTO test.new_table SET", { ID: newID, name: newName, image: newImage, weight: newWeight, old: newOld, sex: newSex, }, function (error, results, fields) {
        if (error) throw error;
        return res.redirect("/index")
    });
});

app.post('/delete', function (req, res) { // Xoá dữ liệu
    let newID = req.body.ID;
    console.log("newID",newID)
    if (!newID) {
        return res.status(400).send({ error: true, message: 'Please provide ID' });
    }
    dbConn.query('DELETE FROM test.new_table WHERE ID = ?', [newID], function (error, results, fields) {
        if (error) throw error;
        return res.redirect("/index")
    });
});

app.post('/updateCard', function (req, res) { // Cập nhật dữ liệu
    let newID = req.body.ID
    let newName = req.body.name
    let newImage = req.body.image
    let newWeight = req.body.weight
    let newOld = req.body.old
    let newSex = req.body.sex
  

    if (!newID || !newName || !newImage || !newWeight || !newOld || !newSex) {
        return res.status(400).send({ error: newName, message: 'Please provide enough information' });
    }
    dbConn.query("UPDATE test.new_table SET name = ? ,image = ? ,weight = ?,old = ?,sex = ? WHERE ID = ?",
    [newName, newImage, newWeight, newOld, newSex, newID], function (error, results, fields) {
        if (error) throw error;
        return res.redirect('/index');
    });
});

app.use(bodyParser.urlencoded({ extended: true })) // Nhúng bodyParser vào trong app
dbConn.connect(function (err) {
    if (err) throw err;
    console.log("Connected!")
});

app.get('/index/:newID', function (req, res) { //Sửa dữ liệu
    let ID = req.params.newID;
    dbConn.query(`SELECT * FROM  test.new_table WHERE ID = ?`,[ID], function (err, results) {
        if (err) throw err;
        return res.render("index1.ejs",{result: results})  
    });
})

app.listen(3000, function () {
    console.log('Node server running http://localhost:3000')
});
const express = require("express")
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient
const app = express()


let quotes = [{
        name: 'Mèo anh lông dài',
        image: "https://dogily.vn/wp-content/uploads/2020/03/meo-anh-long-dai-de-thuong.jpg",
        weight: "2KG",
        old: 1,
        sex: "Đực"
    },
    {
        name: "Mèo Munchkin",
        image: "https://trumboss.vn/wp-content/uploads/2018/10/giong-meo-Munchkin-Midget.jpg",
        weight: "1.2KG",
        old: 2,
        sex: "Cái"
    },
    {
        name: "Mèo anh lông ngắn",
        image: "https://instagram.fhan5-6.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/95266037_1440345266144815_1656681335014302426_n.jpg?_nc_ht=instagram.fhan5-6.fna.fbcdn.net&_nc_cat=107&_nc_ohc=GrUK7p7m-u4AX-p1_EX&oh=6807f54990a98bf839a7211f86cf6592&oe=5F03FF76",
        weight: "3KG",
        old: 3,
        sex: "Đực"
    },
    {
        name: "Chó Corgi",
        image: "https://sieupet.com/sites/default/files/pictures/images/cho-corgi-4.jpg",
        weight: "6KG",
        old: 2,
        sex: "Đực"
    },
    {
        name: "Chó Husky",
        image: "data:image/jpeg;base64,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",
        weight: "2KG",
        old: 1,
        sex: "Đực"
    },
    {
        name: "Chó Alaska",
        image: "https://myaloha.vn/upload/images/anh-baiviet-46164-fc0504cd-e018-45b3-81ea-cf7bd76181de.jpg",
        weight: "2KG",
        old: 1,
        sex: "Đực"
    }
]

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "ejs")

app.get("/index", function(req, res) {
    res.render("index.ejs", { result: quotes })
})

app.listen(3000, function() {
    console.log("Hello World! running on port 3000")
})
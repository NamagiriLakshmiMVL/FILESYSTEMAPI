import express from "express";
import fs from "fs"
const app = express()
const PORT = 5000


app.post('/posting-files', express.json(), (req, res) => {
    try {
        const data = new Date().toString()
        var now = new Date();
        const result = fs.writeFile('./backup/' + now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate() + "-" + now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds() + '.txt', data, (err) => {
            res.send({ message: "File created Successfully" })
            re.send("Succcess")
        })
    }
    catch (error) {
        res.send({ message: error })
    }

})

app.get("/getting-files", (req, res) => {
    try {
        fs.readdir("./backup", (err, data) => {
            res.send(data)
        })
    }
    catch (error) {
        res.send({ message: error })
    }
})



app.listen(PORT, () => console.log("Connected to Server"))


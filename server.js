const express=require("express")
const app= express()

app.use("/static", express.static('./static/'));
app.set('view engine','ejs')

app.get('/',(req,res) => {
    console.log("here")
    res.render("index")
})

app.listen(3000)
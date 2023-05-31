const express = require("express");
const app = express();
const port = 8090;

app.set('view engine', 'pug');
app.use(express.static('static'));

app.get('/', (req, res) => {
    params = {
      hi : "Hello topi"
    }
    res.status(200).render('index.pug', params);
  });
app.post('/', (req,res,next)=>{
  console.log("Pakehhe")
  console.log(req)
})

app.listen(port, () => {
  console.log("Connected on http://127.0.0.1:8000");
});

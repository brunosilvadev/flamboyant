const app = require("express")();
const path = require("path");

app.listen(
    3000,
    () => console.log("Application started")
);

app.get('/json',(req,res ) => {
    res.status(200).send(
        [{name:'Bruno', id: 1},{name:'Summer', id:3}]
    );    
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
  });
const app = require("express")();

app.listen(
    3000,
    () => console.log("paçoca")
);

app.get('',(req,res) => {
    res.status(200).send(
        [{name:'Bruno', id: 1},{name:'Summer', id:3}]
    );    
});
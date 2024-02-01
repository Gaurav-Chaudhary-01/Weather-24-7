const express= require('express');
const path= require('path');
const hbs= require('hbs');
const port= process.env.PORT ||3000;

const app= express();

//PATH

const staticPath=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.set("view engine", "hbs"); 
app.set("views",template_path);
hbs.registerPartials(partials_path);


app.use(express.static(staticPath));

    //ROUTING

app.get('', (req, res) =>{
    res.render("index");
});    

app.get('/About', (req, res) =>{
    res.render("About");
});    
 

app.get('/Weather', (req, res) =>{
    res.render("Weather");
}); 

app.get('*', (req, res) =>{
    res.render("404error");
});   

app.listen(port, ()=>{
    console.log(`Serving on port ${port}`);
});
var mongoose = require('mongoose');

var authors = require('../controllers/authors.js');

module.exports = function(app){
    app.get('/', (req, res)=> {
        console.log('here at the root in routes');
    })
    app.post('/new', (req, res) =>{
        // console.log("adding in routes");
        authors.add_author(req, res);
    })
    app.get('/authors', (req,res) =>{
        console.log("all authors at routes");
        authors.all_authors(req,res);
    })
    app.put('/edit/:id', (req, res) =>{
        console.log("editing author in routes");
        authors.edit_author(req,res);
    })
    app.get('/author/:id', (req, res) =>{
        console.log("edit author hit the route")
        authors.get_author(req, res);
    })
    app.delete('/delete/:id', (req, res) =>{
        console.log("delete author in route");
        authors.delete(req, res);
    })
}
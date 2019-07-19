var mongoose = require('mongoose');

Authors = mongoose.model('Authors');
Quotes = mongoose.model("Quotes");

module.exports = {
    add_author: (req,res) =>{
        // console.log(req.body.fullname, "this is from req.body")
        Authors.create({fullname: req.body.fullname}, function(err, author){
            if(err){
                console.log(err, "from model");
            } else{
                console.log("added in controller succesfully");
                res.json(author);
            }
        })
    },
    all_authors: (req, res) =>{
        Authors.find({}, function(err, authors){
            if(err){
                console.log(err, "all authors from controller")
            } else{
                console.log("got authors from contoller");
                res.json(authors);
            }
        })
    },
    edit_author: (req, res) =>{
        console.log(req.body, "this is req.body info")
        Authors.findOneAndUpdate({_id:req.params.id}, req.body, function(err, author){
            if(err){
                console.log(err, "error from edit author model")
            } else{
                console.log("edited successfully");
                res.json(author);
            }
        })
    },
    get_author: (req, res) =>{
        Authors.findOne({_id: req.params.id}, function(err, author){
            if(err){
                console.log(err, "this is error from get_author at controller")
            } else{
                res.json(author);
            }
        })
    },
    delete: (req, res) =>{
        Authors.remove({_id: req.params.id}, function(err, author){
            if(err){
                console.log(err, "error in controller");
            } else{
                console.log("deleted succesfully")
                res.json(author);
            }
        })
    }
}
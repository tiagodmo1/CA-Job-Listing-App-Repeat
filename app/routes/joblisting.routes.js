module.exports = app => {
    
    const joblisting = require("../controllers/JobListing.controller");

    let router = require("express").Router();

    //create a new entree
    router.post("/", joblisting.create);

    //retrieve all in treatments_list
    router.get("/", joblisting.findAll);

    //retrieve one treatment by id
    router.get("/:id", joblisting.findOne);

    //update a treatment item by id
    router.put("/:id", joblisting.update);

    //delete treatment item by id
    router.delete("/:id", joblisting.delete);

    //delete all treatment in the list
    router.delete("/", joblisting.deleteAll);

    app.use('/api/joblisting', router);
}
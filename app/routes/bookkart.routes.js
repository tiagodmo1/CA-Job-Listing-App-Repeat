module.exports = app => {
    
    const bookkart = require("../controllers/BookKart.controller");

    let router = require("express").Router();

    //create a new entree
    router.post("/", bookkart.create);

    //retrieve all in treatments_list
    router.get("/", bookkart.findAll);

    //retrieve one treatment by id
    router.get("/:id", bookkart.findOne);

    //update a treatment item by id
    router.put("/:id", bookkart.update);

    //delete treatment item by id
    router.delete("/:id", bookkart.delete);

    //delete all treatment in the list
    router.delete("/", bookkart.deleteAll);

    app.use('/api/bookkart', router);
}
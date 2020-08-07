const dbConfig = require("../confg/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.joblisting = require("./joblisting.model")(mongoose);

module.exports = db;
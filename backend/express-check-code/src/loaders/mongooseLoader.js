const mongoose = require("mongoose");

const config = require("../config");

async function mongooseLoader() {
    try{
        await mongoose.connect(config.db.uri2, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //  useFindAndModify: true,
            //  useCreateIndex: true,
        });
    }
    catch (err){
        console.error(err)
    }
}

module.exports = mongooseLoader
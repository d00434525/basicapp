const mongoose = require('mongoose');
const db = mongoose.connection;

async function connect (){
    let connectString = `mongodb+srv://d00434525:codeschool@codeschool.nexin.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(connectString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        console.log("error connecting to mongoose", error);
        throw "mongo couldn't connect";
    }
}

function onConnect(callback){
    db.once("open", () => {
        console.log("mongo connection open");
        callback();
    });
}

module.exports = {
    connect,
    onConnect,
};
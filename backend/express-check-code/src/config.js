const config = {
    server: {
        port: process.env.PORT || 7000,
    },
    db:{
        uri:process.env.DB_URI,
    }
}

module.exports = config
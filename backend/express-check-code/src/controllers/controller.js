async function getData(req, res, next){
    try{
    // const allData = await Data.find()
    res.send("hola")
    console.log("whatsupp")
    // console.info(allData)
    next()
    
    }
    catch{
        console.info("Couldnt retrieve data")
    }
}

async function getOneData(req, res, next){
    try{
    // const allData = await Data.find()
    res.send("hola")
    console.log("whatsupp")
    // console.info(allData)
    next()
    
    }
    catch{
        console.info("Couldnt retrieve data")
    }
}

module.exports = {getData, getOneData}

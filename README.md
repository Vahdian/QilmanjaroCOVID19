## QILIMANJARO COVID19 VACCINATION APP

Build a system that allows a user to request a covid-19 vaccination appointment, receive its confirmation and validate it at the day of the vaccination.

In order to build this app I've created two different APIs, a `python` based one (`Flask`)
and a `javascript` based one (`ExpressJs`). The reason to do this was just to prove that I
can build an API in both languages.

The scripts to start the two different backend APIs and the front end program are located
in the README of each folder.

I've implemented a code generation in python which is validated by the javascript API.

All keys and DB URIS are saved in enviroment docs (.env) to avoid the misuse of sensitive informacion like online database access (I've implemented a cloud database [`MongoAtlas`] that could be accesed easily if the passwords were given) so in order to access them you'll
need to request them and place them in your own .env

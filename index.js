const app = require('./src/app')
require('dotenv').config()


port = process.env.PORT || 3000

const startServer = async () =>{
    try {
        if (process.env.ENVIROMENT === 'dev'){
            app.listen( port, () =>{
                console.log(`App listening on port ${port}, dev env`)
            });
        }else {
            console.log(`App listening on port ${port}, prod env`)
        }}
    catch (error) {
        
    }
}

startServer()

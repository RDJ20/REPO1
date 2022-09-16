require("dotenv").config()
const express = require ("express")
const cors = require ("cors")
const swaggerUI = require("swagger-ui-express")
const dbConnectNoSql = require('./config/mongo')
const {dbConnectMySql} = require("./config/mysql")
const app = express()
const port = process.env.PORT||3001
const ENGINE_DB = process.env.ENGINE_DB;
const loggerStream = require("./utils/handleLogger");
const NODE_ENV = process.env.NODE_ENV || 'development';
const openApiConfiguration = require("./docs/swagger")

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))



app.use(`/documentation`, swaggerUI.serve, swaggerUI.setup(openApiConfiguration))

/**
 * aqui invocamos a las rutas
 */

app.use("/api", require("./routes"))

if(NODE_ENV !== 'test'){
    app.listen(port);
};


app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

(ENGINE_DB ==='nosql')? dbConnectNoSql() : dbConnectMySql();
module.exports = app;



const db = require("../models")
const testConnection = async () => {
    try {
      await db.sequelize.authenticate();
      console.log("Connected with database");
      return Promise.resolve();
    } catch (error) {
        return Promise.reject(error)
    }
}

const closeConnection = async () => {
    try {
        await db.sequelize.close();
        console.log("Disconnected with database");
        return 
    } catch(err) {
        Promise.reject(err)
    }
}

module.exports = {
    testConnection,
    closeConnection
}
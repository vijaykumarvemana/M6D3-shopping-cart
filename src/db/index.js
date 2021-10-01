import {Sequelize} from 'sequelize'

const {PGPORT, PGHOST, PGPASSWORD, PGUSER, PGDATABASE} = process.env

const path = process.env.DATABASE_URL

const sequelize = new Sequelize(path, {
    port: PGPORT,
    host: PGHOST,
    dialect: "postgres",
})


const testDB = async () => {

    try {
        await sequelize.authenticate()
        console.log("Database is Authenticatd")
    } catch (error) {
       console.log(error) 
    }
}
testDB()

export const connectDB = async () => {
    try {
        await sequelize.sync()
        console.log("database connected...")
        
    } catch (error) {
        console.log(error)
    }
}


export default sequelize
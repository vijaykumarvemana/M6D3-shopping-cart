import {Sequelize} from 'sequelize'

const {PGPORT, PGHOST, PGPASSWORD, PGUSER, PGDATABASE} = process.env


const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD,{
    port: PGPORT,
    host: PGHOST,
    dialect: "postgres",
})


// const testDB = async () => {

//     try {
//         await sequelize.authenticate()
//         console.log("Database is Authenticatd")
//     } catch (error) {
//        console.log(error) 
//     }
// }
// testDB()

export const connectDB = async () => {
    try {
        await sequelize.sync()
        console.log("database connected...")
        
    } catch (error) {
        console.log(error)
    }
}


export default sequelize
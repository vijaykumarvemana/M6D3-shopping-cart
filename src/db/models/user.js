import sequelize from "../index.js";


import s from "sequelize";
const { DataTypes } = s;

const User = sequelize.define("user",{
     id: {
         primaryKey: true,
         type: DataTypes.INTEGER,
         autoIncrement: true,
     },
     name: {
         type: DataTypes.STRING,
         allowNull: false,
     },
     last_name: {
         type: DataTypes.STRING,
         allowNull: false,
     },  
     country: {
         type: DataTypes.STRING,
         allowNull: false,
     },
     email: {
         type: DataTypes.STRING,
         allowNull: false,
     }  
    })

    export default User
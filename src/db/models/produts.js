import sequelize from "../index.js"


import s from "sequelize";
const { DataTypes } = s;



const Product = sequelize.define(
    "product",
    {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        productName: {
            type: DataTypes.STRING,
            allowNull : false,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        }

    }
)


export default Product
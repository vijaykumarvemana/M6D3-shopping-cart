import Product from "./produts.js"

import Review from "./reviews.js" 

import User from "./user.js"

import Category from "./categories.js"

import ProductCategory from './productCategories.js'

Product.hasMany(Review)
Review.belongsTo(Product)

User.hasMany(Review)
Review.belongsTo(User)

Category.belongsToMany(Product, {
    through: {model: ProductCategory, unique: false}
})

Product.belongsToMany(Category, {
    through: { model: ProductCategory, unique:false}
})


export default {Review, Product, User}

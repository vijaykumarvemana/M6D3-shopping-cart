import Product from "./produts.js"

import Review from "./reviews.js"

Product.hasMany(Review)

Review.belongsTo(Product)


export default {Product, Review}

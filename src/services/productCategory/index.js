
import express from "express";
import db from "../../db/models/index.js";
import sequelize from "sequelize";
import ProductCategory from "../../db/models/productCategories.js";

const { ProductCategory, Product } = db;
const router = express.Router();

/**
 * [{
 * "productId":1,
 * "unitary_qty":"2"
 * }
 * ]
 *
 *
 */

router.route("/:userId").get(async (req, res, next) => {
  try {
    const data = await ProductCategory.findAll({
      where: { userId: req.params.userId },
      include: Product,
      attributes: [
        "productId",
        [sequelize.fn("count", sequelize.col("cart.id")), "unitary_qty"],
      ],
      group: ["productId", "product.id"],
    });

    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default router;
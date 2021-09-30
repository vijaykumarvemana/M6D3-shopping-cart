import express from 'express'

import db from  '../../db/models/index.js'

const router = express.Router()

const { Review, Product, Category} = db



router.route("/").get(async (req,res, next) => {
    try {
        const category = await Category.findAll({
            // include: Review,
        })
        res.send(category)
    } catch (error) {
        console.log(error)
        next(error)
    }
})
.post(async (req,res,next) => {
    try {
        const category = await Category.create(req.body)
        res.send(category)
        
    } catch (error) {
        console.log(error)
        next(error)
    }

})


router.route("/:id")
.get( async (req, res, next) => {
    try {
        const category = await Category.findByPk(req.params.id)
        res.send(category)
    } catch (error) {
        console.log(error)
        next(error)
    }
})
.put( async (req,res,next) => {
    try {
        const category = await Category.update(req.body,{
            where:{
                id: req.params.id
            },
            returning: true,
        })
        res.send(category[1][0])
        
    } catch (error) {
        console.log(error)
        next(error)
    }
})
.delete( async(req,res,next) => {

    try {
        const rows = await Category.destroy({
            where:{
                id: req.params.id,
            } })

            if(rows > 0) {
                res.send("ok")
            }else{
                res.send("Not found")
            }
    } catch (error) {
        console.log(error)
        next(error)
    }
})


export default router
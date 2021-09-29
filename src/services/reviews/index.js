import express from 'express'


import db from  '../../db/models/index.js'
import s from 'sequelize'

const router = express.Router()
const {Product, Review} = db
const { Op } = s


router.route("/").get(async (req,res, next) => {
    try {
        const review = await Review.findAll({
            include: Product,
        })
        res.status(200).send(review)
    } catch (error) {
        console.log(error)
        next(error)
    }
})
.post(async (req,res,next) => {
    try {
        const review = await Review.create(req.body)
        res.status(201).send(review)
        
    } catch (error) {
        console.log(error)
        next(error)
    }

})


router.route("/:id")
.get( async (req, res, next) => {
    try {
        const review = await Review.findByPk(req.params.id)
        res.send(review)
    } catch (error) {
        console.log(error)
        next(error)
    }
})
.put( async (req,res,next) => {
    try {
        const review = await Review.update(req.body,{
            where:{
                id: req.params.id
            },
            returning: true,
        })
        res.send(review[1][0])
        
    } catch (error) {
        console.log(error)
        next(error)
    }
})
.delete( async(req,res,next) => {

    try {
        const rows = await Review.destroy({
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
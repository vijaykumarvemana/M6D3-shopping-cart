import express from 'express'

import db from  '../../db/models/index.js'

const router = express.Router()

const { Review, User} = db



router.route("/").get(async (req,res, next) => {
    try {
        const user = await User.findAll({
            include: Review,
        })
        res.send(user)
    } catch (error) {
        console.log(error)
        next(error)
    }
})
.post(async (req,res,next) => {
    try {
        const user = await User.create(req.body)
        res.send(user)
        
    } catch (error) {
        console.log(error)
        next(error)
    }

})


router.route("/:id")
.get( async (req, res, next) => {
    try {
        const user = await User.findByPk(req.params.id)
        res.send(user)
    } catch (error) {
        console.log(error)
        next(error)
    }
})
.put( async (req,res,next) => {
    try {
        const user = await User.update(req.body,{
            where:{
                id: req.params.id
            },
            returning: true,
        })
        res.send(user[1][0])
        
    } catch (error) {
        console.log(error)
        next(error)
    }
})
.delete( async(req,res,next) => {

    try {
        const rows = await User.destroy({
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
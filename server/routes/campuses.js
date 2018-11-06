'use strict';

const express = require('express');
const db = require('../models');
const Campus = db.models.campus;
const Student = db.models.student;

// This router is already mounted on `/api/campuses` in server/app.js
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const campuses = await Campus.findAll()
        res.json(campuses)
    } catch(err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
       const campus = await Campus.findById((req.params.id), {
           include:[{model: Student}]
       })
        res.json(campus)
    } catch(err) {
        next(err)
    }
})

router.get('/:id/students', async (req, res, next) => {
    try {
        const campusId = req.params.id
        const students = await Student.findAll({
            where: {campusId: campusId},
            include: [{model: Campus}]
        })
        res.json(students)
    } catch(err) {
        next(err)
    }
})

// router.post('/', async (req, res, next) => {
//     try {
//         const newCampus = await Campus.create(req.body)
//         res.json(newCampus)
//     } catch(err) {
//         next(err)
//     }
// })

// router.post('/:id/students', async (req, res, next) => {
//     try{

//     } catch(err) {
//         next(err)
//     }
// })

module.exports = router;

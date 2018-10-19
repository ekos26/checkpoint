'use strict';

const Sequelize = require('sequelize');
const db = require('./_db');

const Student = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    // phase: {
    //     validate: {
    //         equals: 'NULL', 
    //         equals:'junior',
    //         equals: 'senior'
    //     }
    // }
});

Student.findByPhase = async function() {
    let studentPhase = await Student.findAll({ where: {phase} })
        return studentPhase
}

module.exports = Student;

'use strict';

const Sequelize = require('sequelize');
const db = require('./_db');

const Student = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    phase: {
        type: Sequelize.ENUM('NULL', 'junior', 'senior')
    }
});

Student.findByPhase = async function(phase) {
    let studentPhase = await Student.findAll({ 
        where: {
            phase
        } 
    })
        return studentPhase
}

module.exports = Student;

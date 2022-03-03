const Faculty = require('../models/faculty');
const isFaculty = async (v) =>  await Faculty.findOne({name: v})

const Department = require('../models/department');
const isDepartment = async (v) => await Department.findOne({name: v})

module.exports = {isFaculty, isDepartment}
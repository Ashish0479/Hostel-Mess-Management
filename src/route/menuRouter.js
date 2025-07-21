const express = require('express');
const { getFixedMenuController, getTodayMenuController, updateTodayMenuController } = require('../manager/controller/menuController');
const { isLoggedIn, isAdmin } = require('../manager/validations/authValidator');

const router = express.Router();

router.get('/fixed', isLoggedIn, getFixedMenuController);      // for all students
router.get('/today', isLoggedIn, getTodayMenuController);      // for all students
router.post('/today', isLoggedIn, isAdmin, updateTodayMenuController); // for manager only

module.exports = router;

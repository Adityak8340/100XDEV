const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = express.Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    //check if admin already exists
    Admin.create({
        username: username,
        password: password
    })
    res.json({
        message: "Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses   
    
});

module.exports = router;
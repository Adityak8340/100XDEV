const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const username = req.headers.username;
    const password = req.headers.password;

    //check if user already exists
    User.create({
        username: username,
        password: password
    })
    res.json({
        message: "User created successfully"
    })
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router
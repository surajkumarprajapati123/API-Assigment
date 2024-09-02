const express = require('express');
const UserRoutes = require('./userRoutes'); // Assuming './index' exports your user routes
const router = express.Router();

const Allroutes = [
    {
        route: '/user',
        routes: UserRoutes,
    }
];

Allroutes.forEach((alroutes) => {
    router.use(alroutes.route, alroutes.routes); 
});

module.exports = router;

import express from 'express';
import bodyParser from 'body-parser';
const auth_route= require('./auth.route');
const people_finder_preview= require('./people-finder-preview.route');

const app = express();
app.use(bodyParser.json());

app.route('/api/login').post(auth_route.loginUser);
app.route('/api/getEmployeeByID').post(people_finder_preview.getEmployeeById);
app.route('/api/getEmployees').post(people_finder_preview.getEmplyees);

const httpServer = app.listen(9000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});
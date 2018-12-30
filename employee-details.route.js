import { employeeDetails } from './db.data';

export function getEmployeeDetails(req, res) {
    const empDetails = employeeDetails.filter(user => user.empid = req.body.employeeId);
    if (empDetails)
        res.status(200).json(empDetails[0]);
    else
        res.sendStatus(204);
}
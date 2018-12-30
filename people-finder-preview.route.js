import { userBasicInformation } from "./db.data";

export function getEmplyees(req, res) {
    console.log("Calling getEmplyees Service...");
    const filteredList = req.body ? getFiltereEmployeeList(req.body) : null;
    if (filteredList)
        res.status(200).json(filteredList);
    else res.sendStatus(204);

}

export function getEmployeeById(req, res) {
    console.log("Calling getEmployeeById Service...");
    const { empid } = req.body;
    const employee = getEmployeePreview(empid);
    if (employee)
        res.status(200).json(employee);
    else res.sendStatus(403);
}

function getFiltereEmployeeList(requestBody) {
    let employeeList = userBasicInformation;
    if(requestBody.empid) employeeList=employeeList.filter(user=>user.empid===requestBody.empid);
    if(requestBody.firstName) employeeList=employeeList.filter(user=>user.firstName===requestBody.firstName);
    if(requestBody.middleName) employeeList=employeeList.filter(user=>user.middleName===requestBody.middleName);
    if(requestBody.lastName) employeeList=employeeList.filter(user=>user.lastName===requestBody.lastName);
    if(requestBody.designation) employeeList=employeeList.filter(user=>user.designation===requestBody.designation);
    if(requestBody.project) employeeList=employeeList.filter(user=>user.project===requestBody.project);
    if(requestBody.account) employeeList=employeeList.filter(user=>user.firstName===requestBody.account);
    return employeeList;
}

function getEmployeePreview(empid) {
    const employeeList = userBasicInformation;
    const employee =  employeeList.filter(user => user.empid === empid);
    return employee;
}
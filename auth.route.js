import { users } from "./db.data";

export function loginUser(req, res) {
    console.log("Calling Login Service...");
    const { email, password } = req.body;
    const user = authenticate(email, password);
    if (user)
        res.status(200).json({ id: user.empid, email: user.email });
    else
        res.sendStatus(403);
}

function authenticate(email, password) {
    const user = Object.values(users).find(user => user.email === email);
    if (user && user.password == password)
        return user;
    else
        return undefined;
}
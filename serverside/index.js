import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors'; // Import the 'cors' package
import cookieParser from 'cookie-parser';

function importJSON() {
    const pathToJson = path.resolve('./serverside/data.json');
    const data = fs.readFileSync(pathToJson, 'utf-8');
    const jsonData = JSON.parse(data);
    return jsonData;
}
const data = importJSON();
const app = express();
const port = 3000;
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


const corsOptions = {
    origin: 'http://[::1]:5173',
    credentials: true,            //ustawia header access-control-allow-credentials:true
    optionSuccessStatus: 200
}

let users = [];

app.use(cors(corsOptions)); // Use the 'cors' middleware to enable CORS

app.get("/products", (req, res) => {
    res.send(data.products);
})

app.get("/promotions", (req, res) => {
    res.send(data.promotions);
})

app.get("/promotion/:id", (req, res) => {
    res.send(data.promotions.find(promotion => promotion.id === req.params.id));
})

app.get("/product/:id", (req, res) => {
    res.send(data.products.find(product => product.id === req.params.id));
})

app.post("/register", (req, res) => {
    const user = req.body;
    if (users.find(u => u.username === user.username)) {
        console.log('User already exists');
        res.status(400).send(JSON.stringify({ status: 'error', message: 'User already exists' }));
        return;
    }
    else {
        users.push(user);
        res.send(JSON.stringify({ status: 'success' }));
    }
})

app.post("/login", (req, res) => {
    const user = req.body;
    if (users.find(u => u.username === user.username && u.password === user.password)) {
        res.cookie('username', user.username, { expires: new Date(Date.now() + 90000000), httpOnly: false });
        res.send(JSON.stringify({ status: 'success' }));
    }
    else {
        res.status(400).send(JSON.stringify({ status: 'error', message: 'User not found' }));
    }
})

app.post("/check_login", (req, res) => {
    if (req.cookies.username) {
        res.send(JSON.stringify({ status: 'success', username: req.cookies.username }));
    }
    else {
        res.send(JSON.stringify({ status: 'error', message: 'User not found' }));
    }
})

app.post("/logout", (req, res) => {
    res.clearCookie('username');
    res.send(JSON.stringify({ status: 'success' }));
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
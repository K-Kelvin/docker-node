const express = require("express");
const fs = require("fs");

const app = express();

function readData(filename = "db.json") {
    return new Promise((resolve, reject) => {
        fs.readFile(__dirname + "/" + filename, (err, data) => {
            if (err) {
                console.log(err);
                reject(`Failed to read from ${filename}`);
            } else {
                resolve(JSON.parse(data));
            }
        })
    })
};


app.get("/", (req, res) => {
    res.json({
        "endpoints": [
            "/users",
            "/users/:id",
            "/users/:id/orders",
            "/users/:id/orders/:order_id",
        ]
    });
});

app.get("/users", async (req, res) => {
    const data = await readData();

    res.json(data.users);
});

app.get("/users/:id", async (req, res) => {
    const user_id = req.params.id;

    const data = await readData();

    const user = data.users?.filter(user => user.id == user_id)?.[0];

    if (user) return res.json(user);

    res.status(404).json({
        status: 404,
        detail: "User not found!"
    });
});

app.get("/users/:id/orders", async (req, res) => {
    const user_id = req.params.id;

    const data = await readData();

    const orders = data.orders?.filter(order => order.user == user_id);

    res.json(orders);
});

app.get("/users/:id/orders/:order_id", async (req, res) => {
    const user_id = req.params.id;
    const order_id = req.params.order_id;

    const data = await readData();

    const order = data.orders?.filter(order => ((order.user == user_id) && (order.id == order_id)))?.[0];

    if (order) return res.json(order);

    res.status(404).json({
        status: 404,
        detail: "Order not found!"
    });
});


const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server listening on port %d...", PORT);
});


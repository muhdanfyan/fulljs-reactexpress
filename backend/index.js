import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";

const app = express();

try {
    await db.authenticate();
    console.log('Database connected..');
} catch (error) {
    console.error ('Connection error : ', error);
}

// app.get('/', (req, res) => {
//     res.send ('welcome');
// });

app.use(express.json());

//use untuk route ke folder routes
// app.use ('/', productRoutes);
app.use ('/products', productRoutes);

app.listen(5000, () => console.log('Server running at port 5000'));

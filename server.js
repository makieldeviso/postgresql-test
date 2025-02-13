import express from "express";
import url from 'url';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Static setup
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

// Route imports
import homeRoute from "./routes/homeRoute.js";
import newRoute from "./routes/newRoute.js";

// Route setup
app.use('/new', newRoute);
app.use('/', homeRoute);

// Views setup
app.set('view engine', "ejs");
app.set('views', path.join(__dirname, 'views/pages'));

// Listen
app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
})
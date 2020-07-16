const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const app_folder = path.join(__dirname, "dist/playground");

app.use("/", express.static(app_folder));

app.listen(port, () => console.log(`app is running`));

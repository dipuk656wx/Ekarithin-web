const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const express = require("express");
const bodyparser = require('body-parser');
const path = require("path");
const connectDb = require('./config/database');
const app = express();
const port = 3000;

connectDb();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));

const RegisterRouter = require("./routes/register");
app.use("/api/register", RegisterRouter);

app.get("*", async (request, response) => {
    const supported = ["EN", "JP", "KR", "CN", "IN"];
    const languages = {
        EN: "en",
        JP: "ja",
        KR: "ko",
        CN: "zh",
        IN: "in",
    };
    let language;
    if (supported.includes(request.headers["cf-ipcountry"])) {
        let lang = request.headers["cf-ipcountry"];
        language = languages[lang];
    } else {
        language = languages["EN"];
    }
    response.render("index", {
        "language": language,
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

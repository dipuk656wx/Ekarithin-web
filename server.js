const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const connectDb = require('./config/database');
const RegisterRouter = require('./routes/register');

const app = express();
const port = 3000;

connectDb();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/register', RegisterRouter);

const supportedLanguages = ["EN", "JP", "KR", "CN", "IN"];
const languageMap = {
  EN: "en",
  JP: "ja",
  KR: "ko",
  CN: "zh",
  IN: "in",
};

app.get('*', async (request, response) => {
  const clientLanguage = request.headers['cf-ipcountry'];
  const language = supportedLanguages.includes(clientLanguage)
    ? languageMap[clientLanguage]
    : languageMap.EN;

  response.render('index', { language });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

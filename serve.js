const express = require('express');
const path = require('path');
const chalk = require('chalk');

const app = express();
const PORT = process.env.PORT || 9000;
app.use(express.static(path.join(__dirname, 'build')));

// eslint-disable-next-line func-names
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(chalk.blue(`Running on PORT ${PORT}`)));

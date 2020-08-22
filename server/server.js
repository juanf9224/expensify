const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
import ReactDomServer from ' react-dom/server';

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.get('/')
app.get('https://jsonplaceholder.typicode.com/users', (req, res) => {

});

app.listen(3000, () => {
  console.log('Server is running');
});
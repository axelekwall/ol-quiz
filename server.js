const express = require('express');

const app = express();

app.set('port', process.env.PORT || 3001);

app.get('/api', (req, res) => {
  res.send('Hi from API!');
});

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/build'));
}

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});

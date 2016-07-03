const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
  
app.use(require('morgan')('dev'));
app.sendFile('layout.html', {root: '../client/views'});

app.listen(PORT, ()=>{console.log(`Listening to port ${PORT}`);});

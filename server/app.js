const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
  
// app.use(require('morgan')('dev'));
app.use('/assets', express.static(`${__dirname}/../client/assets`));
app.use('/stylesheets', express.static(`${__dirname}/../client/stylesheets`));
app.use('/javascripts', express.static(`${__dirname}/../client/javascripts`));
app.use('/views', express.static(`${__dirname}/../client/views`));

app.get('*', (req, res)=>{
  res.sendFile('/views/layout.html', {root: './client'});
});

app.listen(PORT, ()=>{
  console.log(`Listening to port ${PORT}`);
});

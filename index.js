const express = require('express');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

const itemsRoutes = require('./routes/items');

app.use('/items', itemsRoutes); 

// start
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

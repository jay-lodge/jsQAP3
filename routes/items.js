const express = require('express');
const router = express.Router();

const mockData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

router.get('/items', (req, res) => {
  res.render('items/index', { items: mockData });
});

// new
router.post('/items', (req, res) => {
  const newItem = {
    id: mockData.length + 1,
    name: req.body.name,
  };
  mockData.push(newItem);
  res.redirect('/items');
});

//update id
router.put('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const updatedName = req.body.name;


  const itemToUpdate = mockData.find(item => item.id === itemId);
  if (itemToUpdate) {
    itemToUpdate.name = updatedName;
  }

  res.redirect('/items');
});

router.delete('/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);

  mockData = mockData.filter(item => item.id !== itemId);

  res.redirect('/items');
});

module.exports = router;

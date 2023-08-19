const express = require('express');
const router = express.Router();
const itemDal = require('../dal/items');

router.get('/api/items', async (req, res) => {
  const items = await itemDal.getItems();
  res.json(items);
});

router.post('/api/items', async (req, res) => {
  const { name } = req.body;
  const newItem = await itemDal.createItem(name);
  res.json(newItem);
});


router.put('/api/items/:id', async (req, res) => {
  const itemId = req.params.id;
  const { name } = req.body;
  const updatedItem = await itemDal.updateItem(itemId, name);
  res.json(updatedItem);
});

router.patch('/api/items/:id', async (req, res) => {
  const itemId = req.params.id;
  const { name } = req.body;
  const updatedItem = await itemDal.partialUpdateItem(itemId, name);
  res.json(updatedItem);
});

router.delete('/api/items/:id', async (req, res) => {
  const itemId = req.params.id;
  await itemDal.deleteItem(itemId);
  res.sendStatus(204);
});

module.exports = router;

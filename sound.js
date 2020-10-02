const express = require('express');
const router = express.Router();

router.get('/:fileName', (req, res) => {
  console.log(req.params);
  res.sendFile(`${__dirname}/${req.params.fileName}`);
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/:fileName', (req, res) => {
  let fileName = req.params.fileName;
  res.sendFile(`${__dirname}/${fileName}`);
});

module.exports = router;

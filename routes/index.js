var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', {});
});

router.post('/new', function(req, res) {
  /* Fields from form are inside the body object of the req variable.
   * They are accessible via the name attribute of the input fields, e.g. req.body.name
   */
  const name = req.body.name;
  const message = req.body.message;

  messages.push({text: message, 
                 user: name, 
                 added: new Date()});

  // Redirects users back to index page after submitting a new message
  res.redirect('/');
});

module.exports = router;

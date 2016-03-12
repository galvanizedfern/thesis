var userController = require('../controllers/userController');
var videoController = require('../controllers/videoController');


exports = function(app, express) {
  // Handles request to sign up new user
  app.post('/signup', userController.userSignUp);

  // Handles request to sign in existing user
  app.post('/signin', userController.userSignIn);
}
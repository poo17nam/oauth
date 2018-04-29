const router = require('express').Router();
const passport = require('passport');
// auth login
router.get('/login',(req,res) => {
  res.render('login',{user: req.user})
})

// auth logout
router.get('/logout',(req,res) => {
  //handle with Passport
  req.logout()
  res.redirect('/')
})

// auth with Google,returns code
router.get('/google',passport.authenticate('google',{
  scope: ['profile']
}))

// callback route for google to redirect to
// passport callback function fires that exchanges that code for profile information
router.get('/google/redirect',passport.authenticate('google'),(req,res) =>{
  //res.send('you reached the callback URI')
  //res.send(req.user)
  res.redirect('/profile/')
})

module.exports = router;

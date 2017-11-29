// Just some example routes with iron:router to make your life easier.
// Going to your app / will redirect to "home" if not logged in, and "dashboard" if logged in
// /register goes to "register" and /login goes to "login"

Router.route('/', function () {
  if(Meteor.user())
  {
    this.render('dashboard')
  }
  else
  {
    this.render('home')
  }
})

Router.route('/login', function () {
  if(Meteor.user())
  {
    Router.go('/');
  }
  else
  {
    this.render('login')
  }
})

Router.route('/register', function () {
  if(Meteor.user())
  {
    Router.go('/');
  }
  else
  {
    this.render('register')
  }
})

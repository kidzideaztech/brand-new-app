import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.validateNewUser(function (options) {
  username = options.username;
  password = options.password;
  email = options.email;
  
  check(username, String);
  check(password, String);
  check(email, String);    
    
  if(Accounts.findUserByUsername(username)) throw new Meteor.Error("validation-error", "Username is already in use");
  if(Accounts.findUserByEmail(email)) throw new Meteor.Error("validation-error", "Email is already in use");    
  if(password.length < 6) throw new Meteor.Error("validation-error", "Passwords must be at least 6 characters long");

  return true;  
});

Meteor.methods({
  
});

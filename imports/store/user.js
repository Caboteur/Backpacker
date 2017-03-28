import {ReactiveVar} from 'meteor/reactive-var';

const loggedin = new ReactiveVar(Meteor.userId());
const user = new ReactiveVar({});

const login = (mail, password, callback)=>{
  Meteor.loginWithPassword(mail, password,(err)=>{
    if(err){
      callback(err);
      loggedin.set(false);
    } else {
      callback();
      loggedin.set(Meteor.userId());
      Meteor.call('userInfo', Meteor.userId(), (err, res)=>{
        if(err){
          console.log(err)
        } else {
          user.set(res);
        }
      });
    }
  });
};

const logout = (callback)=>{
  Meteor.logout((err)=>{
    if(err){
      callback(err)
    } else {
      loggedin.set(false);
      callback();
    }
  });

};

export default userStore = {
  loggedin,
  user,
  login,
  logout
};

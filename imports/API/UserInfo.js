
const UserInfo = {
  loggedIn: false,
  isLoging: false,
  userMail: "",
  login: (email, password) => {
    this.isLoging = true;
    // console.log(email + ' ' + password)
    Meteor.loginWithPassword(email, password, (err) => {
      if(err){
        Bert.alert({
          message: err.reason,
          type:'danger'
        });
      } else {
        Bert.alert({
          message: "Vous êtes connecté",
          type: 'success'
        });
        this.loggedIn = true;
        this.isLoging = false;
        this.userMail = email;
        FlowRouter.go('/');
      }
    });
  },
  logout: ()=>{
    this.loggedIn = false;
  }
};

export default UserInfo;

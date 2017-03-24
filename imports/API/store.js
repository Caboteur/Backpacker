
var user = {
	loggedin: new ReactiveVar(Meteor.userId()),
	email: new ReactiveVar(''),
	login: function(user, password, callback){
		Meteor.loginWithPassword(user, password, (err, res)=>{
			if(err){
				callback(err.reason);
				this.loggedin.set(false);
			} else {
				this.loggedin.set(true);
				Meteor.call('userInfo', Meteor.userId(), (err, res)=>{
					if(err){
						console.log(err)
					} else {
						this.email.set(res.emails[0].adress);
					}
				})
				callback('', 'Utilisateur connecté');
			}
		})
	},
	logout: () => {
		Meteor.logout()
	},
	sayHi: (prenom) => {
		alert('Salut ' + prenom)
	}
};

var store = {user,};

export default store;


const Articles = new Mongo.Collection("articles");

console.log(Meteor.users.find().fetch());

Meteor.methods({
  listeArticles: ()=>{
    // throw new Meteor.Error(500, "Désolé nous n'avons pas réussi à récupérer les articles");
    return Articles.find().fetch();
    console.log(Meteor.userId)
  },
  getArticle: (id)=>{
    return Articles.findOne({_id: id});
  },
  saveArticle: (obj)=> {
    Articles.insert(obj)

  },
  removeArticle(id){
    Articles.remove(id);
  }

});


const Articles = new Mongo.Collection("articles");


Meteor.methods({
  listeArticles: ()=>{
    // throw new Meteor.Error(500, "Désolé nous n'avons pas réussi à récupérer les articles");
    return Articles.find().fetch();
  },
  getArticle: (id)=>{
    return Articles.findOne({_id: id});
  },
  saveArticle: (obj)=> {
    Articles.insert(obj)

  }

});

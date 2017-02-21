
const Articles = new Mongo.Collection("articles");

const listeArticles = Articles.find().fetch();

Meteor.methods({
  listeArticles: ()=>{
    console.log('listeArticles a été appelé');
    // throw new Meteor.Error(500, "Désolé nous n'avons pas réussi à récupérer les articles");
    return Articles.find().fetch();
  },
  getArticle: (id)=>{
    return Articles.findOne({_id: id});
  }

});

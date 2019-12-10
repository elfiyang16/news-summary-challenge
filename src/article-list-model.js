// const { apiKey } = require('./config');

(function(exports){
  let apiKey = config.apiKey
  let worldNewsApi =
  "https://content.guardianapis.com/search?q=technology&from-date=2019-12-01&api-key=apiKey"
  let articles = []

  function ArticleList(){
    this.saveArticles();
    console.log(worldNewsApi)
  }

  ArticleList.prototype = {
    saveArticles: function(){
      jQuery.ajax({
        type: 'GET',
        url:worldNewsAPI,
        async: false,
        success:function(articleResponse){
          let apiResults = articleResponse.response.results;
          for (let i=0; i < apiResults.length; i++){
            articles.push(apiResults[i]);}
        }
      })
    },
    getArticles: function(){
      let article = [];
      for(let i = 0; i < articles.length; i ++){
        article.push({id:articles[i].id,title: articles[i].webTitle, extract: articles[i].fields.trailText,body:articles[i].fields.body, img: articles[i].fields.thumbnail});
      }
      return article
    }
  }
  exports.ArticleList = ArticleList
})(this)

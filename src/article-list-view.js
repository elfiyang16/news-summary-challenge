(function(exports){
  function ArticleListView (articleListModel){
    this.listView = articleListModel
  }

  ArticleListView.prototype = {
    returnHTML: function(){
      let articleList = this.listView.getArticles();
      let indexContent = []


      // if (articlesIn.length === 0)
      //        return null;
      for(let i=0; i<articleList.length; i++){
        indexContent.push(
        `<ol><div class="articles" id="${articlesList[i].id}"><li><img src="${articlesList[i].img}" id="${articlesList[i].id}">${articlesList[i].title}</li><li>${articleList[i].extract}</li></div></ol>`
      )
      }
      return `<div>${indexContent.join("")}</div>`
    }

  };
})(this)

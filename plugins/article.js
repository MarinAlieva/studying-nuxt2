class ArticleAPI {
  getArticle = () => {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const article =
          {
            id: 1,
            title: 'article1',
            content: 'article1 content',
            keywords: 'keywords article1',
            description: 'description article1',
          }
        resolve(article);
      }, 3000);
      // reject('error')
    })
  };
}

export const articleAPI = new ArticleAPI();

class NewsAPI {
  getNews = () => {

    return new Promise((resolve, reject) => {
      console.log('getNews start')
      setTimeout(() => {
        const news =
          {
            id: 1,
            title: 'news title',
            content: 'news content',
            keywords: 'keywords news',
            description: 'description news',
          }
        resolve(news);
        console.log('artigetNewscle resolve')
      }, 3000);
      // reject('error')
    })
  };
}

export const newsAPI = new NewsAPI();
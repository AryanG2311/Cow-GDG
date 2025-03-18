import  { useEffect, useState } from 'react';
import { NewsCard } from './NewsCard';
import axios from 'axios';

export const NewsGrid: React.FC = () => {
  const [articles,setArticles] = useState([]);

  useEffect(()=>{
    try {
      axios.get("https://newsapi.org/v2/everything?q=cows+farming&apiKey=8b4c14d46085483e83303df6a6c1b7d7")
      .then((res)=>{
        setArticles(res.data.articles);
      })
    } catch (error) {
      console.error(error);
    }
  },[]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Indian Cow News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <NewsCard key={`$article.source.id`} article={article} />
        ))}
      </div>
    </div>
  );
};
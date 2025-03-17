import { format } from 'date-fns';
import { ExternalLink } from 'lucide-react';

interface Article {
  urlToImage?: string;
  title: string;
  source: {
    name: string;
  };
  publishedAt: string;
  description?: string;
  url: string;
}

export const NewsCard = ({ article }: { article: Article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1596443686116-a1ffb3b6fb51?q=80&w=2070&auto=format&fit=crop';
          }}
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500">{article.source.name}</span>
          <span className="text-sm text-gray-500">
            {format(new Date(article.publishedAt), 'MMM dd, yyyy')}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{article.title}</h3>
        {article.description && (
          <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
        )}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          Read more
          <ExternalLink className="ml-1 w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
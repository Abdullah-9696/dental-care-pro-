import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { Link as LinkIcon, Youtube } from "lucide-react";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dummyArticles = [
      {
        id: 1,
        title: "Top 10 Dental Tips",
        description: "Improve your dental practice with these essential tips...",
        image_url:
          "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        website: "https://dentaltips.com",
        youtube: "https://www.youtube.com/watch?v=article1",
      },
      {
        id: 2,
        title: "Latest in Orthodontics",
        description:
          "Explore the newest research in orthodontics and treatment techniques...",
        image_url:
          "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        website: "https://orthodonticsresearch.com",
        youtube: "https://www.youtube.com/watch?v=article2",
      },
      {
        id: 3,
        title: "Endodontics Advanced",
        description:
          "Deep dive into modern endodontic procedures for better outcomes...",
        image_url:
          "https://images.unsplash.com/photo-1597764698807-8d73e785db48?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
        website: "https://endodonticspro.com",
        youtube: "https://www.youtube.com/watch?v=article3",
      },
    ];

    setTimeout(() => {
      setArticles(dummyArticles);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="articles-container">
        {loading ? (
          <div className="loader">Loading articles...</div>
        ) : (
          articles.map((article) => (
            <div key={article.id} className="article-card">
              <div className="article-image">
                {article.image_url ? (
                  <img src={article.image_url} alt={article.title} />
                ) : (
                  <div style={{ fontSize: "48px" }}>📄</div>
                )}
              </div>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="article-links">
                {article.website && (
                  <a
                    href={article.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link"
                  >
                    <LinkIcon size={16} /> Website
                  </a>
                )}
                {article.youtube && (
                  <a
                    href={article.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-link"
                  >
                    <Youtube size={16} /> YouTube
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Inline Styles */}
      <style jsx>{`
        .articles-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          padding: 120px 20px 60px 20px; /* top padding for fixed navbar */
        }
        .article-card {
          background: #fff;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .article-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }
        .article-image {
          width: 100%;
          height: 180px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 15px;
          background: #f0f0f0;
          border-radius: 12px;
        }
        .article-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }
        h3 {
          font-size: 1.4rem;
          margin-bottom: 10px;
          color: #222;
          text-align: center;
        }
        p {
          font-size: 1rem;
          margin-bottom: 15px;
          color: #555;
          text-align: center;
        }
        .article-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 10px;
        }
        .btn-link {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 8px 12px;
          background: #4caf50;
          color: white;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .btn-link:hover {
          background: #45a049;
          transform: translateY(-2px);
        }
        .loader {
          font-size: 1.2rem;
          color: #4caf50;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

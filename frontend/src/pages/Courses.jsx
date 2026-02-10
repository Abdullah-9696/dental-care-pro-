import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { BookOpen, Clock, DollarSign, Link as LinkIcon, Youtube } from "lucide-react";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dummyCourses = [
      { 
        id: 1, 
        title: "Dental Hygiene 101", 
        description: "Basics of dental hygiene.", 
        duration: "3h", 
        price: "$49", 
        image_url: null,
        website: "https://dentalhygiene101.com",
        youtube: "https://www.youtube.com/watch?v=dental1"
      },
      { 
        id: 2, 
        title: "Advanced Dentistry", 
        description: "Advanced dental procedures.", 
        duration: "5h", 
        price: "$99", 
        image_url: null,
        website: "https://advanceddentistry.com",
        youtube: "https://www.youtube.com/watch?v=dental2"
      },
      { 
        id: 3, 
        title: "Cosmetic Dentistry", 
        description: "Modern cosmetic dentistry methods.", 
        duration: "4h", 
        price: "$79", 
        image_url: null,
        website: "https://cosmeticdentistry.com",
        youtube: "https://www.youtube.com/watch?v=dental3"
      },
    ];

    setTimeout(() => { 
      setCourses(dummyCourses); 
      setLoading(false); 
    }, 1000);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="courses-container">
        {loading ? (
          <div className="loader">Loading courses...</div>
        ) : (
          courses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                {course.image_url ? (
                  <img src={course.image_url} alt={course.title} />
                ) : (
                  <BookOpen size={48} />
                )}
              </div>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <div className="course-footer">
                <span><Clock size={16} /> {course.duration}</span>
                <span><DollarSign size={16} /> {course.price}</span>
              </div>
              <div className="course-links">
                {course.website && (
                  <a 
                    href={course.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-link"
                  >
                    <LinkIcon size={16} /> Website
                  </a>
                )}
                {course.youtube && (
                  <a 
                    href={course.youtube} 
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
        .courses-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          padding: 120px 20px 60px 20px;
        }
        .course-card {
          background: #fff;
          border-radius: 15px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.15);
        }
        .course-image {
          width: 100%;
          height: 180px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 15px;
          background: #f0f0f0;
          border-radius: 12px;
        }
        .course-image img {
          max-width: 100%;
          max-height: 100%;
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
        .course-footer {
          display: flex;
          gap: 15px;
          margin-bottom: 15px;
          font-weight: 600;
          color: #333;
        }
        .course-links {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .btn-link {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 8px 12px;
          background: #4CAF50;
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
          color: #4CAF50;
        }
      `}</style>
    </div>
  );
}

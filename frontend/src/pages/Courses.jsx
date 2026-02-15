import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { BookOpen, Clock, DollarSign, Link as LinkIcon, Youtube } from "lucide-react";

/* ===== IMPORT LOCAL IMAGES ===== */
import dummyCourses1 from "../assets/doctor2.jpg";
import dummyCourses2 from "../assets/gettyimages-1296443450-612x612.jpg";
import dummyCourses3 from "../assets/doctor1.jpg";


/* ===== IMPORT LOCAL IMAGES ===== */
import dental1 from "../assets/doctor2.jpg";
import dental2 from "../assets/gettyimages-1296443450-612x612.jpg";
import dental3 from "../assets/doctor1.jpg";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setCourses([
          { id: 1, title: "Dental Hygiene 101", description: "Basics of dental hygiene.", duration: "3h", price: "$49", image_url: null, website: "#", youtube: "#" },
          { id: 2, title: "Advanced Dentistry", description: "Advanced dental procedures.", duration: "5h", price: "$99", image_url: null, website: "#", youtube: "#" },
          { id: 3, title: "Cosmetic Dentistry", description: "Modern cosmetic dentistry methods.", duration: "4h", price: "$79", image_url: null, website: "#", youtube: "#" },
        ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <Navbar />

      {/* ================= COURSES ================= */}
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
                <span><Clock size={16}/> {course.duration}</span>
                <span><DollarSign size={16}/> {course.price}</span>
              </div>

              <div className="course-links">
                {course.website && (
                  <a href={course.website} className="btn-link" target="_blank">
                    <LinkIcon size={16}/> Website
                  </a>
                )}
                {course.youtube && (
                  <a href={course.youtube} className="btn-link" target="_blank">
                    <Youtube size={16}/> YouTube
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* ================= NEW CALENDAR SECTION ================= */}
      <div className="calendar-section">
        <h2>Book Your Dental Appointment</h2>

        {/* simple HTML calendar */}
        <input type="date" className="calendar-input" />

        {/* dental images */}
        <div className="dental-gallery">
          <img src={dental1} alt="Dental 1" />
          <img src={dental2} alt="Dental 2" />
          <img src={dental3} alt="Dental 3" />
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .courses-container {
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
          gap:30px;
          padding:120px 20px 60px;
        }

        .course-card {
          background:#fff;
          border-radius:15px;
          box-shadow:0 10px 25px rgba(0,0,0,0.1);
          padding:20px;
          display:flex;
          flex-direction:column;
          align-items:center;
          transition:.3s;
        }

        .course-card:hover {
          transform:translateY(-6px);
        }

        .course-image {
          width:100%;
          height:180px;
          display:flex;
          justify-content:center;
          align-items:center;
          background:#f0f0f0;
          border-radius:12px;
          margin-bottom:15px;
        }

        .course-footer {
          display:flex;
          gap:15px;
          margin-bottom:15px;
          font-weight:600;
        }

        .btn-link {
          display:flex;
          align-items:center;
          gap:5px;
          padding:8px 12px;
          background:#4CAF50;
          color:white;
          border-radius:8px;
          text-decoration:none;
          font-weight:600;
        }

        /* ===== NEW CALENDAR STYLE ===== */
        .calendar-section {
          margin:60px 20px 100px;
          padding:40px;
          background:white;
          border-radius:18px;
          box-shadow:0 15px 40px rgba(0,0,0,0.08);
          text-align:center;
        }

        .calendar-input {
          margin-top:20px;
          padding:12px 20px;
          font-size:16px;
          border-radius:10px;
          border:1px solid #ddd;
        }

        .dental-gallery {
          margin-top:30px;
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
          gap:20px;
        }

        .dental-gallery img {
          width:100%;
          height:180px;
          object-fit:cover;
          border-radius:12px;
          transition:.3s;
        }

        .dental-gallery img:hover {
          transform:scale(1.05);
        }
      `}</style>
    </div>
  );
}

import { useState } from "react";
import "./App.css";

export default function App() {
  const [showProfile, setShowProfile] = useState(false);

  const student = {
    name: "Ramez Al Mousa",
    major: "ITE - SPU",
    gpa: "80.1%",
    year: "3",
    email: "ramezalmousa3@gmail.com",
    skills: ["C++", "C#", "React", "Algorithms"],
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721295.png", // computer icon
  };

  return (
    <div className="app">

      <div className="student-card">

        <div className="card-header">
          <img src={student.image} alt="computer" className="avatar" />

          <div>
            <h2 className="name">{student.name}</h2>
            <p className="major">{student.major}</p>
          </div>
        </div>

        <div className="card-footer">
          <button 
            className="btn primary"
            onClick={() => setShowProfile(true)}
          >
            View Profile
          </button>
        </div>

      </div>

      {/* MODAL */}
      {showProfile && (
        <div className="modal-overlay" onClick={() => setShowProfile(false)}>
          
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            
            <h2>{student.name}</h2>

            <p><strong>Major:</strong> {student.major}</p>
            <p><strong>GPA:</strong> {student.gpa}</p>
            <p><strong>Years:</strong> {student.year}</p>
            <p><strong>Email:</strong> {student.email}</p>

            <div className="skills">
              <strong>Skills:</strong>
              <div className="tags">
                {student.skills.map((skill, i) => (
                  <span key={i}>{skill}</span>
                ))}
              </div>
            </div>

            <button 
              className="btn close"
              onClick={() => setShowProfile(false)}
            >
              Close
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
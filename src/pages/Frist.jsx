import Topbar from "../components/Topbar.jsx";
import { useNavigate } from "react-router-dom";
import '../styles.css';

export default function Home() {
  const nav = useNavigate();
  
  return (
    <>
      <Topbar />
      <div className="blue-box">
        
        {/* Card 1 */}
        <div className="card-container">
          <div className="card" style={{animationDelay:"0.2s"}}>
            <h2>Curriculum Courses</h2>
            <p>Take a moment to explore the courses and find the one that’s perfect for you.</p>
            <img src="/image/1.png" alt="explore" />
            <button onClick={() => nav("/study-plans")}>EXPLORE!</button>
          </div>
          <div className="label">CURRICULUM OVERVIEW</div>
        </div>

        {/* Card 2 */}
        <div className="card-container">
          <div className="card" style={{animationDelay:"0.4s"}}>
            <h2>Check Curriculum Courses</h2>
            <p>Review the courses you have completed and easily check the remaining ones here</p>
            <img src="/image/2.png" alt="check" />
            <button onClick={() => nav("/check-subject")}>CHECK IT!</button>
          </div>
          <div className="label">CHECK CURRICULUM COURSES</div>
        </div>
      </div>
    </>
  );
}
